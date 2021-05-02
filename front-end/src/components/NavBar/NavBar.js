import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let affixNav = null;
  let position = null;
  let contactCheck = "";
  let homeLink = null;
  let contactLink = (
    <li className="menu-btn">
      <Link to="/contact#contactform"> Contact </Link>
    </li>
  );
  if (window.location.pathname === "/contact") {
    contactCheck = "/";
    affixNav = "affix";
    position = { position: "relative" };
    homeLink = (
      <li>
        <a href={`${contactCheck}`} className="smooth-scroll">
          Home
        </a>
      </li>
    );
    contactLink = null;
  }
  return (
    <nav
      id="navigation"
      className={`navbar scrollspy ${affixNav}`}
      style={position}
    >
      <div className="container">
        <div className="navbar-brand">
          <a href={"/"}>
            <img style={{ height: "8rem" }} src="./greyicon.png" alt="Logo" />
          </a>
        </div>
        <ul className="nav navbar-nav">
          {homeLink}
          <li>
            <a href={`${contactCheck}#about`} className="smooth-scroll">
              About
            </a>
          </li>
          <li>
            <a href={`${contactCheck}#features`} className="smooth-scroll">
              Working With Us
            </a>
          </li>
          <li>
            <a href={`${contactCheck}#features4`} className="smooth-scroll">
              What We Do
            </a>
          </li>
          <li>
            <a
              href="https://allsidesstudios.com/"
              target="_blank"
              className="smooth-scroll"
            >
              Shop Our Store
            </a>
          </li>
          {contactLink}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
