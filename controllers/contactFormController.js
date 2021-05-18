"use strict";
require("dotenv").config();

const mongoose = require("mongoose");
const ContactForm = require("../models/ContactForm");
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
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet">
      </head>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet">
  
      <body>
          <div style="background-color: red;
          color: white;
          text-align: center;
          letter-spacing: 5px;
          text-transform: uppercase;">Do Not Reply to this Email</div>
          <div>
              <img>
          </div>
          <div>AllSides Email Delivery Service</div>
          <hr style="background-color: black;
          height: 2px;
          font-family: 'Roboto', sans-serif;
          ">
          <div> From:<span> ${form.email} </span></div>
          <div>
          Name: ${form.name}
          </div>
          <div>
              Message:  ${form.message}
          </div>
          <hr>
          <div>
              <small style="font-size: 10px;">
                  Disclaimer: Any email sent this address will not be viewed or replied to, please copy the email
                  above into a new thread to respond.
              </small>
          </div>
      </body>
      </html>`,
      // html: `<h3>Contact Email: ${form.email}</h3><br><h4>Name:${form.name}<h4>Message:</h4>${form.message}`, // html body
    });
  });
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
