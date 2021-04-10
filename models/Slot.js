const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose);

const slotSchema = new Schema({
  slot_time: String,
  slot_date: String,
  created_at: Date,
});


module.exports = mongoose.model("Slot", slotSchema)