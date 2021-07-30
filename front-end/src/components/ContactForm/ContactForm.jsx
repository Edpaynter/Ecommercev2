import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

require("dotenv").config();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setSetMessage] = useState("");

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        subject: subject,
        email: email,
        message: message,
      }),
    };

    fetch(`/contactform`, requestOptions)
      .then((response) => response.json())
      .then((data) => setOpen(true))
      .then(
        (data) => setName(""),
        setSubject(""),
        setEmail(""),
        setSetMessage("")
      );
  };

  return (
    <div class="col-12 col-lg-7 wow fadeInLeft">
      <h4 class="heading text-center text-lg-left">GET IN TOUCH</h4>
      <form
        class="row contact-form"
        id="contact-form-data"
        onSubmit={handleSubmit}
      >
        <div class="col-sm-12" id="result"></div>
        <div class="col-12 col-md-5">
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            class="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            name="userEmail"
            placeholder="Email Address *"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="userSubject"
            placeholder="Subject"
            class="form-control"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div class="col-12 col-md-7">
          <textarea
            class="form-control"
            name="userMessage"
            rows="6"
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setSetMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div class="col-12">
          <button
            onClick={handleSubmit}
            class="btn standard-btn rounded-pill w-100 contact_btn"
          >
            <i class="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i>
            Send Message
          </button>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message Successfully Sent!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
