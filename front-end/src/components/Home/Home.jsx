import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import TeamTiles from "../TeamTiles/TeamTiles";

const Home = () => {
  return (
    <div>
      {/* <!-- Preloader --> */}
      <div class="preloader">
        <div class="centrize full-width">
          <div class="vertical-center">
            <svg
              class="ha-logo loading"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
            >
              <path
                class="house"
                d="M1.9 8.5V5.3h-1l4-4.3 2.2
       2.1v-.6h1v1.7l1 1.1H7.9v3.2z"
              />
              <path
                class="circut"
                d="M5 8.5V4m0 3.5l1.6-1.6V4.3M5
       6.3L3.5 4.9v-.6m2.7.7l.4.4L7
       5M5.9 6.1v.5h.5M4.2 5v.5h-.8m1
       1.5v.6h-.6m1.2.8L3.6 6.7M5
       8.4l1-.9h.7M4.6 3.6L5 4l.4-.4"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <!-- Preloader End --> */}

      {/* <!--Header Start--> */}
      <header>
        {/* <!--Navigation--> */}
        <nav class="navbar navbar-top-default navbar-expand-lg navbar-simple">
          <div class="container">
            <div class="inner-nav-wrap">
              <a href="#home" title="Logo" class="logo scroll">
                {/* <!--Logo Default--> */}
                <img
                  src="assets/img/logo-white.png"
                  alt="logo"
                  class="logo-white"
                />
                <img
                  src="assets/img/logo-orange.png"
                  alt="logo"
                  class="logo-dark"
                />
              </a>
              {/* <!--Nav Links--> */}
              <div class="collapse navbar-collapse" id="AllSides Designs">
                <div class="navbar-nav ml-auto">
                  <a class="nav-link active scroll" href="#slider-area">
                    <span class="num">Home</span>
                  </a>
                  <a class="nav-link scroll" href="#team-section">
                    <span class="num">About </span>{" "}
                  </a>
                  <a class="nav-link scroll" href="#our-testimonial">
                    <span class="num">Clients </span>{" "}
                  </a>
                  <a class="nav-link scroll" href="#contact-sec">
                    <span class="num">Contact</span>{" "}
                  </a>
                </div>
              </div>

              {/* <!--Side Menu Button--> */}
              <a
                href="javascript:void(0)"
                class="sidemenu_btn"
                id="sidemenu_toggle"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a href="tel:215-558-7000" class="agency-num">
                <span>
                  <i class="lni lni-whatsapp"></i>
                </span>{" "}
                <span class="whatsapp-num">+1 215-558-7000</span>
              </a>
            </div>
          </div>
        </nav>

        {/* <!--Side Nav--> */}
        <div class="side-menu hidden">
          <div class="inner-wrapper">
            <span class="btn-close" id="btn_sideNavClose">
              <i></i>
              <i></i>
            </span>
            <nav class="side-nav w-100">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link scroll" href="#slider-area">
                    <span>01.</span> Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link scroll" href="#team-section">
                    <span>02.</span> About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link scroll" href="#our-testimonial">
                    <span>03.</span> Clients
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link scroll" href="#contact-sec">
                    <span>04.</span> Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div class="side-footer w-100">
              <ul class="social-icons-simple">
                <li>
                  <a
                    class="facebook-text-hvr"
                    href="https://www.facebook.com/MarvinCappsRealty/"
                  >
                    <i class="fab fa-facebook-f"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a
                    class="instagram-text-hvr"
                    href="https://www.instagram.com/marvincappsrealty/"
                  >
                    <i class="fab fa-instagram"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a
                    class="twitter-text-hvr"
                    href="https://twitter.com/MarvinCappsINC"
                  >
                    <i class="fab fa-twitter"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a
                    class="linkedin-text-hvr"
                    href="https://www.linkedin.com/in/marvin-capps-08b90438"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                </li>
              </ul>
              <p>
                &copy; 2021 Marvin Capps Realty, Inc. Powered by AllSides
                Designs
              </p>
            </div>
          </div>
        </div>
        <a id="close_side_menu" href="javascript:void(0);"></a>
        {/* <!-- End side menu --> */}
      </header>
      {/* <!--Header End--> */}

      {/* <!-- BANNER SECTION START --> */}
      <section class="slider-area position-relative d-flex" id="slider-area">
        <div class="bg-overlay mix-gradient opacity-9"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="slider-content">
                <h4 class="heading">MARVIN CAPPS REALTY, INC</h4>
                <h4 class="">LET US FIND YOUR DREAM HOME</h4>
                <p class="text"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-icons">
          <ul class="slider-social banner-social">
            <li class="animated-wrap">
              <a
                class="animated-element facebook_bg_hvr2"
                href="https://www.facebook.com/MarvinCappsRealty/"
              >
                <i class="fab fa-facebook-f"></i>{" "}
              </a>
            </li>
            <li class="animated-wrap">
              <a
                class="animated-element twitter_bg_hvr2"
                href="https://twitter.com/MarvinCappsINC"
              >
                <i class="fab fa-twitter"></i>{" "}
              </a>
            </li>
            <li class="animated-wrap">
              <a
                class="animated-element linkdin_bg_hvr2"
                href="https://www.linkedin.com/in/marvin-capps-08b90438"
              >
                <i class="fab fa-linkedin-in"></i>{" "}
              </a>
            </li>
            <li class="animated-wrap">
              <a
                class="animated-element instagram_bg_hvr2"
                href="https://www.instagram.com/marvincappsrealty"
              >
                <i class="fab fa-instagram"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- BANNER SECTION END --> */}

      {/* <!--BANNER FORM SECTION START--> */}
      {/* <div class="slider-form-area">
        <div class="real-state-form">
          <div class="container">
            <div class="book-property">
              <h2 class="booking-heading mb-4">Search Properties</h2>
            </div>
            <form class="contact-form" id="modal-contact-form-data">
              <div class="row">
              
                <div class="col-12 col-md-12 col-lg-12 mb-5">
                  <input
                    type="text"
                    name="userMessage"
                    class=" form-control m-mb-20"
                    placeholder="What are you looking for?"
                  />
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      name="userCity"
                      id="set1"
                      required
                    >
                      <option class="selected" hidden>
                        Select Location
                      </option>
                      <option value="New York">New York</option>
                      <option value="London">London</option>
                      <option value="Paris">Paris</option>
                    </select>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      name="propertyType"
                      id="set2"
                      required
                    >
                      <option class="selected hidden disabled" hidden>
                        Property Type
                      </option>
                      <option value="Single Family">Single Family</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Bungalow">Bungalow</option>
                    </select>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-3">
                  <input
                    type="text"
                    name="userName"
                    class=" form-control m-mb-20"
                    placeholder="Full Name"
                  />
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-3">
                  <input
                    type="text"
                    name="userEmail"
                    class=" form-control m-mb-20"
                    placeholder="Email Address"
                  />
                </div>

                <div class="col-sm-12 col-md-12 col-lg-12">
                  <button
                    type="button"
                    class="btn standard-btn modal_contact_btn btn-large btn-rounded mt-4 w-100"
                    id="submit_btn"
                  >
                    GET MATCHING RESULT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* <!--BANNER FORM SECTION END--> */}

      {/* <!--TEAM SECTION START--> */}
      <section
        class="team-section padding-top padding-bottom"
        id="team-section"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 stats-heading-area text-center wow fadeInUp">
              <span class="sub-heading">We are committed to helping you.</span>
              <h4 class="heading">
                WE ARE A{" "}
                <span>
                  <span class="color js-rotating">
                    REAL ESTATE,CONSULTING,PEOPLE
                  </span>{" "}
                  AGENCY
                </span>
              </h4>
              <p class="text">
                If you're looking for high quality and personal service, you've
                come to the right place. Tired of being ignored or feeling like
                just another "Client" to your Broker/Agent. You will not feel
                that way when you decide to allow Marvin Capps Realty, Inc. to
                handle all of your Real Estate Needs.
              </p>
            </div>
          </div>
          <TeamTiles />
        </div>
      </section>
      {/* <!--TEAM SECTION END--> */}
      {/* <!-- PROJECT SECTION START --> */}
      <section id="project-sec" class="project-sec position-relative">
        <div class="projects owl-carousel owl-theme no-gutters position-relative">
          <div class="item project-area">
            <div class="project-img order-1">
              <img src="assets/img/salebg.jpg" alt="images" />
            </div>
            <div class="container">
              <div class="project-detail text-center text-lg-left order-2">
                <div class="row no-gutters">
                  <div class="col-12 col-lg-5">
                    <div class="project-box wow fadeInLeft">
                      <div class="animate-in">
                        <p class="project-sub-heading">
                          <span></span>More About Us
                        </p>
                        <h6 class="project-heading">Sales </h6>
                        <p class="project-text">
                          Represent both: buyers, sellers, and investors in
                          residential & commercial real estate transactions
                          throughout Pennsylvania & Delaware. Act as a liaison
                          between buyers, sellers, and investors through
                          maintaining correspondence with Attorneys realtors,
                          mortgage companies, appraisers, surveyors, ordering
                          inspections, radon tests, and certificates of repair
                          via contractors. Ensuring that all parties to the
                          contract understand; all paperwork formalities, i.e.
                          Sales Agreement, H.U.D. documents, Good Faith
                          Estimates & Mortgage documents. Inform clients of
                          company Real Estate products & services.
                        </p>
                        {/* <button class="btn secondary-btn rounded-pill">
                          LAUNCH DETAILS
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="item project-area">
            <div class="project-img order-1">
              <img src="assets/img/salebg.jpg" alt="images" />
            </div>
            <div class="container">
              <div class="project-detail text-center text-lg-left order-2">
                <div class="row no-gutters">
                  <div class="col-12 col-lg-5">
                    <div class="project-box">
                      <div class="animate-in">
                        <p class="project-sub-heading">
                          <span></span>More About Us
                        </p>
                        <h6 class="project-heading">
                          Investor / Property Management <span> </span>
                        </h6>
                        <p class="project-text">
                          Research, Investigate and Analyze Market Rents &
                          Demand, along with Potential for Property
                          Appreciation. Compare Tax benefits -vs.-Tax
                          liabilities. Supervised building maintenance & upkeep.
                          Conducted tenant interview & selection processes
                          according to Federal Fair Housing Laws. Managed all
                          tenant Leasing agreements, suggestions, complaints,
                          evictions & rental payments. Coordinated government
                          compliance including: building fire alarm system
                          inspections and code enforcement. Generated very
                          successful advertising ads. Negotiated and contracted
                          with Electrical, Plumbing, Pest Control, Landscaping,
                          Carpentry, Masonry, Roofing, Heating Ventilation and
                          Air Conditioning Contractors.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div class="item project-area">
            <div class="project-img order-1">
              <img src="assets/img/salebg.jpg" alt="images" />
            </div>
            <div class="container">
              <div class="project-detail text-center text-lg-left order-2">
                <div class="row no-gutters">
                  <div class="col-12 col-lg-5">
                    <div class="project-box">
                      <div class="animate-in">
                        <p class="project-sub-heading">
                          <span></span>Most Afordable Properties
                        </p>
                        <h6 class="project-heading">
                          Consultation <span> </span>
                        </h6>
                        <p class="project-text">
                          Advised Presidents/Ceo of current Market Financial
                          Conditions concerning (Stocks-REITS-Commodities) and
                          forecast future lending guidelines that would have an
                          immediate and direct effect on company profits,
                          current/future projects and liabilities. Consulted on
                          most efficient and profitable way to manage asset
                          allocation, potential investments, rate of return on
                          investments, how to generate the “Highest and Best
                          use” of Acquired Land or potential purchases.
                          Negotiated with Lenders, Banks, Brokers and Hard Money
                          Lenders while verifying values of company owned
                          assets, regularly held meetings to inform
                          President/CEO of companies financial outlook and
                          advised regularly on the steps that needed to be taken
                          to return to profitability on company investments and
                          how to maintain and increase profitability while
                          limiting potential; internal as well as external,
                          liabilities.
                        </p>
                        {/* <button class="btn secondary-btn rounded-pill">
                          LAUNCH DETAILS
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="project-links d-flex  d-lg-block">
          <a class="customPrevBtn">
            <i class="lni lni-chevron-left"></i>
          </a>
          <a class="customNextBtn">
            <i class="Ini lni-chevron-right"></i>
          </a>
        </div>
      </section>
      {/* <!-- PROJECT SECTION END --> */}

      {/* <!-- START Testimonials --> */}
      <section id="our-testimonial" class="our-testimonial">
        <div class="parallax page-header testimonial-bg">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <div
                  class="testimonial-content wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <span>Take a word from </span>
                  <h2>Our Happy Customers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="owl-carousel" id="testimonial-slider">
            {/* <!--item 1--> */}
            <div class="item testi-box">
              <div class="row align-items-center">
                <div class="col-lg-4 col-md-12 text-center wow fadeInLeft">
                  <div class="testimonial-round d-inline-block">
                    {/* <img src="assets/img/logo-white.png" alt="" /> */}
                  </div>
                  <h4 class="defaultcolor font-light top15">
                    <a href="#.">Robert & Sineth</a>
                  </h4>
                  {/* <p>UPWORK, New York</p> */}
                </div>
                <div class="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-left text-center rating-part wow fadeInRight">
                  <p class="bottom15 top90">
                    We love the services they have to offer. We strongly
                    recommend them!
                  </p>
                  <span class="d-inline-block test-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--END Testimonials Ends--> */}

      {/* <!--Contact section start--> */}
      <section class="contact-sec" id="contact-sec">
        <div class="container">
          <div class="row">
            <ContactForm />
            <div class="col-12 col-lg-5 text-center text-lg-left position-relative">
              <div class="contact-details wow fadeInRight">
                <h4 class="heading">OUR LOCATION</h4>
                <p class="text">
                  There are many ways to get in contact with us. We are here to
                  help you through the entire process.
                </p>
                <ul>
                  <li>
                    <i aria-hidden="true" class="fas fa-map-marker-alt"></i>
                    <a href="https://bit.ly/3iRGyUH">
                      1800 JFK Blvd Suite 300 Philadelphia, PA, United States{" "}
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" class="fas fa-phone-volume"></i>
                    <a href="tel:215-558-7000">
                      <span>+1 215-558-7000</span>
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" class="fas fa-paper-plane"></i>
                    <a href="mailto: marvincappsrealty@gmail.com">
                      marvincappsrealty@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--                <img src="seo-agency/img/contact-background.png" class="contact-background" alt="contact">--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact section end--> */}

      {/* <!--Footer Start--> */}
      <footer class="footer-style-1">
        <div class="container">
          <div class="row align-items-center">
            {/* <!--Social--> */}
            <div class="col-lg-6">
              <div class="footer-social text-center text-lg-left ">
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="wow fadeInUp"
                      href="https://www.facebook.com/MarvinCappsRealty/"
                    >
                      <i aria-hidden="true" class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInDown"
                      href="https://twitter.com/MarvinCappsINC"
                    >
                      <i aria-hidden="true" class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInDown"
                      href="https://www.linkedin.com/in/marvin-capps-08b90438"
                    >
                      <i aria-hidden="true" class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp"
                      href="https://www.instagram.com/marvincappsrealty/"
                    >
                      <i aria-hidden="true" class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Text--> */}
            <div class="col-lg-6 text-center text-lg-right">
              <p class="company-about fadeIn">
                © 2021 Marvin Capps Realty, Inc. Powered By{" "}
                <a href="javascript:void(0);">AllSides Designs</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Footer End--> */}

      {/* <!--Scroll Top Start--> */}
      <span class="scroll-top-arrow">
        <i class="fas fa-angle-up"></i>
      </span>
      {/* <!--Scroll Top End--> */}
    </div>
  );
};

export default Home;
