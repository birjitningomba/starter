const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Feedback = new Schema({
  from: {
    type: String
  },
  message: {
      type: String
  },
  sent: {
      type: Date
  }
},{
    collection: 'feedback'
});

module.exports = mongoose.model('Feedback', Feedback);