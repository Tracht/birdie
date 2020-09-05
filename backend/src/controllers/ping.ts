import * as express from "express";

export const pingController = express.Router();

pingController.get('/ping', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});
