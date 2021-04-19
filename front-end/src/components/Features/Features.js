import React from "react";

const Features = () => {
  return (
    <div id="features" className="wrap-container40">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="affa-feature-icon">
              <img
                src="assets/images/content/icon/customer-first.png"
                alt="Icon"
              />
              <h4>Customer First</h4>
              <p>
                We work directly with our Clients through the entire process so we get you exactly what you want everytime. Your feedback is important to us.
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="affa-feature-icon">
              <img src="assets/images/content/icon/experience.png" alt="Icon" />
              <h4>6 Years Experience</h4>
              <p>
              Our Team is eager and ready to get to work. We have all the tools you need and the drive to get it done. We work diligently to get your products back and complete your AllSides experience.              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="affa-feature-icon">
              <img src="assets/images/content/icon/cup.png" alt="Icon" />
              <h4>10 People in Team</h4>
              <p>
              Our Team is big enough to handle all of your needs, and our skillset is broad. Anything you throw at us we can get it back to you and bring your idea to life.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
