import * as express from "express";
import { db } from '../database/database';

// Returns results for the most recent day that care was provided (filtered by Timestamp column)
// And shows the frequency of all event types (i.e. number of mood observations, number of fluid intake observations)
// The bulk of the query converts timestamp to UTC so that filtering by date works properly
var eventTypeFreq = ( 
  function (err: string, callback: Function ) { 
    if (err) throw err; 
    var databaseQuery: string = "select e.event_type as eventType, count(e.event_type) as count from events e JOIN (SELECT *,  IF(LOCATE('Z',`timestamp`) > 0, DATE_FORMAT(`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) as utcDate from events where `care_recipient_id` = 'df50cac5-293c-490d-a06c-ee26796f850d' order by utcDate desc limit 1) t on  t.`care_recipient_id` = e.`care_recipient_id` and t.utcDate = IF(LOCATE('Z',e.`timestamp`) > 0, DATE_FORMAT(e.`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(    SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) group by e.event_type "
    return db.query(databaseQuery, function (err: string, result: any) { 
      if (err) throw err; 

      return callback(result);
      });
  }
);

// The Controller 
export const eventTypeFreqController = express.Router();

eventTypeFreqController.get('/event-type-freq', (_, res) => {
  eventTypeFreq("", function(result:any){
  res.status(200).send(
     {"eventTypeFreq" : result} 
  );
});
});