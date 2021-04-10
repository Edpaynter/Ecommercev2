import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer id="footer">
        <div className="container padding-bottom20">
          <div className="row">
            <div className="col-sm-4 widget">
              <img src="./greyicon.png" alt="Logo" className="footer-logo" />
              <p>
               
              </p>
              <div className="footer-socials">
                <a  href={"https://www.facebook.com/Allsidesdesigns-101210328318456/"} title="facebook" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href={"https://www.instagram.com/allsidesdesigns/"} title="instagram" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
               
              </div>
            </div>

            <div className="col-sm-4 widget">
              <h4 className="widget-title">Need Help?</h4>
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>
                      <a href={"/#about"}>About Us</a>
                    </li>
                    <li>
                      <a href={"/#features"}>Our Teams</a>
                    </li>
                    <li>
                      <a href={"/contact#contactform"}>Contact Us</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-sm-6">
                  <ul>
                 
                    <li>
                      <a href={"/"}>All Projects</a>
                    </li>
                    <li>
                      <a href={"/"}>Sitemap</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="col-sm-4 widget">
              <h4 className="widget-title">Contact Us</h4>
              <p>
                2801 Frankford Ave
                <br />
                Philadelphia, PA
                <br />
                <a href={"https://allsidesdesigns.co/"}>www.allsidesdesigns.co/</a>
                <br />
                <a href={"mailto:allsidesdesigns@gmail.com"}>allsidesdesigns@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <p>
              &copy; 2020 Copyrights by
              <a href="https://allsidesdesigns.co/" rel="noreferrer" target="_blank" className={classes.companyHighlight}>
                AllSides Designs, LLC
              </a>
              - All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a href={"/"} className="scrollup" title="Back to Top!">
        Scroll
      </a>
    </div>
  );
};

export default Footer;
