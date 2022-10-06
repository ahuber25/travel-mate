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