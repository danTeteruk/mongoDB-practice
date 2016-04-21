const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var institutionSchema = new Schema({
    name: { type: String, required: true , unique : true},
    address: {
        street: { type: String, required: true },
        number: { type: Number, required: true },
        city: { type: String, required: true , trim:true}
    },
    type: { type: String, enum: ['restaurant', 'coffee-bar','lounge', 'hookah'] },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' },
    capacity: { type: Number },
    workingHour: [{
      day: String,
      open_time: String,
      close_time: String
     }]
})

var Institution = mongoose.model('Institution', institutionSchema);
module.exports = Institution;
