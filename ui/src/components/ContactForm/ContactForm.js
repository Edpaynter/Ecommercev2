import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setSetMessage] = useState("");
  // const [ErrorMessage, setErrorMessage] = useState("");
  const PORT = 8080

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, subject: subject, email: email, message: message })
    };
    fetch(`http://localhost:${PORT}/contactform`, requestOptions)
      .then((response) => response.json())
      .then(data =>  alert(`Thanks for your Submission ${name} `))
    setName('')
    setSubject('')
    setEmail('')

    
  };
  useEffect(() => {
    fetch(`http://localhost:${PORT}/contactform`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setData(data);
      })
      .catch((error) => {
        // setErrorMessage(error);
        console.error("There was an error!", error);
      });
  }, [data, PORT]);

  return (
    <div id="contactform">
      
      <div className="post-heading-left">
        <h2>Leave Us a Message</h2>
        <p>
          Let us know how we are doing. All feedback is
          welcome, we encourage it.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="affa-form-contact">
        <div className="submit-status"></div>
        <div className="row">
          <div className="col-md-6">
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              required
              type="text"
              name="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <input
          required
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          required
          name="message"
          placeholder="Message *"
          value={message}
          onChange={(e) => setSetMessage(e.target.value)}
        ></textarea>
        <input
          type="submit"
          name="submit"
          value="Send Message"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default ContactForm;
