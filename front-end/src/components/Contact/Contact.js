import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  const googleDirections = 'https://www.google.com/maps/dir//Philly+Kreate+Hub,+2801+Frankford+Ave,+Philadelphia,+PA+19134/@39.988715,-75.119739,16z/data=!4m6!4m5!1m0!1m2!1m1!1s0x89c6c9f8db5edd83:0xc269c21f4ffad1de!3e0?hl=en&gl=US'
  return (
    <div>
       
      <div className="wrap-container8040">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="margin-bottom40">
                <ContactForm  /> 
              </div>
            </div>

            <div className="col-md-6">
              <div className="margin-bottom40">
                <div className="post-heading-left">
                  <h2>Our Location</h2>
                  <p>Located inside the KreateHub come check us out.</p>
                </div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48925.538855125225!2d-75.176764!3d39.9671917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c945b3c7970f%3A0x4a337ccf4df9cb24!2sAllSides%20Designs!5e0!3m2!1sen!2sus!4v1619146212639!5m2!1sen!2sus"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
                <p className="map-address">
                  <a href={googleDirections} title="Open on Google Maps">
                    2801 Frankford Ave, Philadelphia
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href={"/"} className="scrollup" title="Back to Top!">
        Scroll
      </a>
    </div>
  );
};

export default Contact;
