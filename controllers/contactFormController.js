"use strict";
require('dotenv').config()


const mongoose = require("mongoose");
const ContactForm = require('../models/ContactForm');
const transporter = require("../config/transporter");
exports.list_all_forms = (req, res) => {
  ContactForm.find({}, (err, form) => {
    if (err) res.send(err);
    res.json(form);
  });
};

exports.create_a_form = (req, res) => {
  const new_form = new ContactForm(req.body);
  new_form.save((err, form) => {
    if (err) res.send(err);
    res.json(form);
    // console.log(form);
    transporter.sendMail({
      from: `${form.email} AllSides Email Delivery Service`, // sender address
      to: `${process.env.COMPANY_EMAIL}`, // list of receivers
      subject: `${form.name} has reached out for more information`, // Subject line
      text: `${form.message}`, // plain text body
      html: `<h3>Contact Email: ${form.email}</h3><br><h4>Name:${form.name}<h4>Message:</h4>${form.message}`, // html body
    });
  })
};

exports.read_a_form = (req, res) => {
  ContactForm.findById(req.params.formId, (err, form) => {
    if (err) res.send(err);
    res.json(form);
  });
};

// exports.update_a_form = (req, res) => {
//   ContactForm.findOneAndUpdate(
//     { _id: req.params.formId },
//     req.body,
//     { new: true },
//     (err, form) => {
//       if (err) res.send(err);
//       res.json(form);
//     }
//   );
// };

exports.delete_a_form = (req, res) => {
  ContactForm.remove(
    {
      _id: req.params.formId,
    },
    (err, form) => {
      if (err) res.send(err);
      res.json({ message: "ContactForm has been deleted" });
    }
  );
};
