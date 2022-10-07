<<<<<<< HEAD
const { Schema, model } = require("mongoose");


const daySchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
},
// {
//     events: [eventSchema]
// }
);

const Day = model("Day", daySchema);

module.exports = Day;
=======
const {Schema, model}= require('mongoose');
const { Schema } = mongoose;


const daySchema = new Schema(
    {
    location: {
       type: String,
       required: true,
       trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
    });

  const Day = mongoose.model('Day', daySchema);

  module.exports = Day;
>>>>>>> 55ce8b85b2c707184ae73e4d69f3e874c0e88999
