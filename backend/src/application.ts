
import * as express from "express";
const app = express();
const createError = require("http-errors");

import {completedVisitsController} from "./controllers/completedVisits";
import {caregiverVisitTimesController} from "./controllers/caregiverVisitTimes";
import {eventTypeFreqController} from "./controllers/eventTypeFreq";
import {generalObsController} from "./controllers/generalObs";
import {moodObsController} from "./controllers/moodObs";
import {mentalHealthObsController} from "./controllers/mentalHealthObs";
import {physicalHealthObsController} from "./controllers/physicalHealthObs";

// CONTROLLERS
app.use(completedVisitsController);
app.use(caregiverVisitTimesController);
app.use(eventTypeFreqController);
app.use(generalObsController);
app.use(mentalHealthObsController);
app.use(moodObsController);
app.use(physicalHealthObsController);

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (_req, _res, next: any) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err: any, req: any, res: any, _next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


export default app;
