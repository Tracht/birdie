import * as express from "express";
import { db } from '../database/database';

var eventTypeFreq = ( 
  function (err: string, callback: Function ) { 
    if (err) throw err; 
    var databaseQuery: string = "select e.event_type, count(e.event_type) from events e JOIN (SELECT *,  IF(LOCATE('Z',`timestamp`) > 0, DATE_FORMAT(`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) as utcDate from events where `care_recipient_id` = 'df50cac5-293c-490d-a06c-ee26796f850d' order by utcDate desc limit 1) t on  t.`care_recipient_id` = e.`care_recipient_id` and t.utcDate = IF(LOCATE('Z',e.`timestamp`) > 0, DATE_FORMAT(e.`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(    SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) group by e.event_type "
    return db.query(databaseQuery, function (err: string, result: any) { 
      if (err) throw err; 
      return callback(result);
      });
  }
);

export const eventTypeFreqController = express.Router();

eventTypeFreqController.get('/event-type-freq', (_, res) => {
  eventTypeFreq("", function(result:any){
  res.status(200).json({
    result
  });
});
});