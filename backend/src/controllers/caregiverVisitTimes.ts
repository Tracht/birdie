import * as express from "express";
import { db } from '../database/database';

// The query returns a list of all the caregivers and their checkin and checkout times
// Returns results for the most recent day care was provided (filtered by Timestamp column)
// The bulk of the query converts timestamp to UTC so that filtering by date works properly
var caregiverVisitTimes = ( 
  function (err: string, callback: Function ) { 
    if (err) throw err; 
    var databaseQuery: string = " select e.event_type as eventType, e.`caregiver_id`, IF(LOCATE('Z',e.`timestamp`) > 0, DATE_FORMAT(e.`timestamp`, '%h:%i'), DATE_FORMAT(convert_tz(SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),-1))),'%h:%i')) as utcTime from events e JOIN (SELECT *,  IF(LOCATE('Z',`timestamp`) > 0, DATE_FORMAT(`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(`timestamp`,IF(LOCATE('+', `timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) as utcDate from events where event_type = 'check_out' and `care_recipient_id` = 'df50cac5-293c-490d-a06c-ee26796f850d' order by utcDate desc limit 1) t on  t.`care_recipient_id` = e.`care_recipient_id` and t.utcDate = IF(LOCATE('Z',e.`timestamp`) > 0, DATE_FORMAT(e.`timestamp`, '%Y-%m-%d'), DATE_FORMAT(convert_tz(SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),1),'+00:00', CONCAT('+', SUBSTRING_INDEX(e.`timestamp`,IF(LOCATE('+', e.`timestamp`) >= 20,'+', '-'),-1))),'%Y-%m-%d')) where e.event_type = 'check_out' or e.event_type = 'check_in' order by utcTime, e.`caregiver_id` "
    return db.query(databaseQuery, function (err: string, result: any) { 
      if (err) throw err; 
      return callback(result);
      });
  }
);

// The controller 
export const caregiverVisitTimesController = express.Router();

caregiverVisitTimesController.get('/visit-times', (_, res) => {
  caregiverVisitTimes("", function(result:any){
  res.status(200).json(result);
});
});