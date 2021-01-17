import React from "react";

const About = () => {
  return (
    <div id="about" className="wrap-container8060">
      <div className="container">
        <div className="post-heading-center">
          <h2>About Us</h2>
          <p>
            A company that's here to disrupt the custom design market and
            deliver quality products to our clients.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <figure className="padding-top30-md margin-bottom20">
              <img
                src="assets/images/company/aboutimg.jpg"
                alt=""
                className="img-style-left"
              />
            </figure>
          </div>
          <div className="col-md-6 col-lg-offset-1">
            <div className="margin-bottom20 margin-top30">
              <p>
                <a
                  
                  href="http://allsidesdesigns.co"
                  rel="noreferrer"
                  target="_blank"
                >
                  Allsides Designs
                </a>
                is a branding company that works with you to
                design, and create products to boost your brand. It could be the
                need of an online presence, or it maybe you have something you
                want bring to life in a 3D model, we can work with you to make
                it happen. We even could capture all the footage for you,
                whatever you need we have you covered on AllSides
              </p>
              {/* <p>
                <strong>Sed ut perspiciatis</strong> unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
