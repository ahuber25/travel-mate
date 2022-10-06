const {Schema, model}= require('mongoose');
const { Schema } = mongoose;


const tripSchema = new Schema(
    {
          location: {
            type: String,
            required: true,
            trim: true
          },
          description: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
          country: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          travelMode: {
            type: String,
            required: true,
          },
        
          day: {
            type: Schema.Types.ObjectId,
             ref: "Day",
             required: true
          }
        }
     );


const Trip = model('Trip', tripSchema);

module.exports = Trip