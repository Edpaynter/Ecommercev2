const Appointment = require('../models/Appointment');
const Slot = require('../models/Slot');
const Nexmo = require("nexmo");

const appointmentController = {
  all(req, res) {
    // Returns all appointments
    
    Appointment.find({}).exec((err, appointments) => {res.json(appointments)
    console.log(appointments + 'here')
    });
  },
  create(req, res) {
    const requestBody = req.body;

    const newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save();
    // Creates a new record from a submitted form
    const newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id
    });

    const nexmo = new Nexmo({
        apiKey: 'd806608f',
        apiSecret: '7eqt7q5HF1wZr7hC',
    });
      

    let msg =
      requestBody.name +
      " " +
      "this message is to confirm your appointment at" +
      "AllSides Designs " +
      newslot.slot_date + ' ' + newslot.slot_time ;

    // and saves the record to
    // the data base
    newappointment.save((err, saved) => {
      // Returns the saved appointment
      // after a successful save
      Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));

      const from = '19099474252';
      const to = '12155930078';

      nexmo.message.sendSms(from, to, msg, (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      });
    });
  }
};

module.exports = appointmentController;
