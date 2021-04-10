let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const Slot = require('./Slot');

const appointmentSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: Number,
  slots: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
  created_at: Date,
});


module.exports =  mongoose.model('Appointment', appointmentSchema);
