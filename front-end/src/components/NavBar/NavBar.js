import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let navData = null;
  
  const homePage = (
    <ul className="nav navbar-nav">
      <li>
        <a href="#header" className="smooth-scroll">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="smooth-scroll">
          About
        </a>
      </li>
      <li>
        <a href="#features" className="smooth-scroll">
          Working With Us
        </a>
      </li>
      <li>
        <a href="#features4" className="smooth-scroll">
          What We Do
        </a>
      </li>
      <li>
        <a href="https://allsidesstudios.com/" target="_blank" className="smooth-scroll">
         Shop Our Store
        </a>
      </li>
      {/* <li>
        <a href="#whyus" className="smooth-scroll">
          Why Us?
        </a>
      </li> */}
      {/* <li>
        <a href="page.html">
          <span style={{ color: "" }}>Store</span>
        </a>
      </li> */}
      <li className="menu-btn">
        <Link to="/contact#contactform"> Contact </Link>
      </li>
    </ul>
  );
  const contactPage = (
    <ul className="nav navbar-nav">
      <li>
        <a href="/#header" className="smooth-scroll">
          
          Home
        </a>
      </li>
      <li>
        <a href="/#about" className="smooth-scroll">
          
          About
        </a>
      </li>
      <li>
        <a href="/#features" className="smooth-scroll">
          
          Working With Us
        </a>
      </li>
      <li>
        <a href="/#features4" className="smooth-scroll">
          What We Do
        </a>
      </li>
      {/* <li>
        <a href="/#whyus" className="smooth-scroll">
          
          Why Us?
        </a>
      </li> */}
      {/* <li>
        <a href="page.html">
          
          <span style={{ color: "" }}>Store</span>
        </a>
      </li> */}
      <li>
        <a href="https://allsidesstudios.com/" target="_blank" className="smooth-scroll">
         Shop Our Store
        </a>
      </li>
      <li className="menu-btn">
        <Link to="/contact#contactform"> Contact </Link>
      </li>
    </ul>
  );
  if (window.location.pathname === "/contact") {
    navData = contactPage;
  } else {
    navData = homePage;
  }
  return (
    <nav id="navigation" className="navbar scrollspy">
      <div className="container">
        <div className="navbar-brand">
          <a href={"/"}>
            <img style={{ height: "8rem" }} src="./greyicon.png" alt="Logo" />
          </a>
        </div>
        {navData}
      </div>
    </nav>
  );
};

export default NavBar;
