const express = require('express');
const FeedbackRoute = express.Router();

const Feedback = require('./feedback');

FeedbackRoute.route('/create').post(function (req, res) {
  const feedback = new Feedback();
  feedback.from = req.query.from;
  feedback.message = req.query.message;
  feedback.sent = new Date();

  feedback.sent = Date();
  feedback.save()
    .then(feedback => {
     
      res.json('Feedback entered successfully');
    })
    .catch(err => {
      res.status(400).send("unable to add feedback to database");
    });
});

module.exports = FeedbackRoute;