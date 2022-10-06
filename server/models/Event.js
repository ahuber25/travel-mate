const {Schema, model}= require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema(
    {
          travelDate: {
            type: String,
            required: true,
          },
          activity: {
            type: String,
            required: true,
          },
          startDate: {
            type: Date,
            required: true
          },
          endDate: {
            type: Date,
            required: true
          },
        trips: [
            {
            type: Schema.Types.ObjectId,
             ref: "Trips"
            }
         ],
        }
     );


const Event = model('Event', eventSchema);

module.exports = eventSchema