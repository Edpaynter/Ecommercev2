const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
          type: 'OAuth2',
          user: process.env['EMAIL_USERNAME'],
          clientId: process.env['EMAIL_CLIENT_ID'],
          clientSecret: process.env['EMAIL_CLIENT_SECRET'],
          refreshToken: process.env['EMAIL_REFRESH_TOKEN'],
        }
  }); 

module.exports = transporter;