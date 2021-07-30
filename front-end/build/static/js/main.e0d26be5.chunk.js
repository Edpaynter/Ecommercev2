(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([
  [0],
  {
    19: function (e, a, t) {
      e.exports = t(32);
    },
    32: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        s = t(16),
        c = t.n(s),
        r = t(17),
        i = t(1),
        o = t(8);
      t(24).config();
      var m = function () {
          var e = Object(n.useState)(""),
            a = Object(o.a)(e, 2),
            t = a[0],
            s = a[1],
            c = Object(n.useState)(""),
            r = Object(o.a)(c, 2),
            i = r[0],
            m = r[1],
            p = Object(n.useState)(""),
            d = Object(o.a)(p, 2),
            E = d[0],
            h = d[1],
            u = Object(n.useState)(""),
            g = Object(o.a)(u, 2),
            f = g[0],
            v = g[1],
            w = function (e) {
              e.preventDefault();
              var a = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: t,
                  subject: i,
                  email: E,
                  message: f,
                }),
              };
              fetch("/contactform", a)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return alert("Thanks for your Submission ".concat(t, " "));
                })
                .then(
                  function (e) {
                    return s("").then(function (e) {
                      return console.log("Datat", e);
                    });
                  },
                  m(""),
                  h(""),
                  v("")
                );
            };
          return l.a.createElement(
            "div",
            { class: "col-12 col-lg-7 wow fadeInLeft" },
            l.a.createElement(
              "h4",
              { class: "heading text-center text-lg-left" },
              "GET IN TOUCH"
            ),
            l.a.createElement(
              "form",
              {
                class: "row contact-form",
                id: "contact-form-data",
                onSubmit: w,
              },
              l.a.createElement("div", { class: "col-sm-12", id: "result" }),
              l.a.createElement(
                "div",
                { class: "col-12 col-md-5" },
                l.a.createElement("input", {
                  type: "text",
                  name: "userName",
                  placeholder: "Your Name",
                  class: "form-control",
                  value: t,
                  onChange: function (e) {
                    return s(e.target.value);
                  },
                }),
                l.a.createElement("input", {
                  required: !0,
                  type: "email",
                  name: "userEmail",
                  placeholder: "Email Address *",
                  class: "form-control",
                  value: E,
                  onChange: function (e) {
                    return h(e.target.value);
                  },
                }),
                l.a.createElement("input", {
                  type: "text",
                  name: "userSubject",
                  placeholder: "Subject",
                  class: "form-control",
                  value: i,
                  onChange: function (e) {
                    m(e.target.value);
                  },
                })
              ),
              l.a.createElement(
                "div",
                { class: "col-12 col-md-7" },
                l.a.createElement("textarea", {
                  class: "form-control",
                  name: "userMessage",
                  rows: "6",
                  placeholder: "Your Message",
                  value: f,
                  onChange: function (e) {
                    v(e.target.value);
                  },
                })
              ),
              l.a.createElement(
                "div",
                { class: "col-12" },
                l.a.createElement(
                  "button",
                  {
                    onClick: w,
                    class: "btn standard-btn rounded-pill w-100 contact_btn",
                  },
                  l.a.createElement("i", {
                    class: "fa fa-spinner fa-spin mr-2 d-none",
                    "aria-hidden": "true",
                  }),
                  "Send Message"
                )
              )
            )
          );
        },
        p = function () {
          var e = [
            {
              name: "Marvin Capps",
              position: "Broker/Owner",
              email: "MARVINCAPPSREALTY@GMAIL.COM",
              phone: "561.568.7465",
              photo: "assets/img/company/marvincappsheadshot.jpg",
              states: ["PA", "NY", "NJ", "DE", "FL", "MD"],
            },
            {
              name: "Yasmeen Lockett",
              email: "yasmeenlockett@gmail.com",
              position: "Agent",
              phone: "267.307.0207",
              states: ["PA"],
              photo: "assets/img/company/yasmeenlockettheadshot.jpg",
            },
            {
              name: "Julia Jackson",
              position: "Agent",
              email: "jjuluia@gmail.com",
              phone: "215.869.8555",
              photo: "assets/img/company/juliajackson.jpg",
              states: ["PA", "NYC"],
            },
            {
              name: "Johane Belony",
              position: "Agent",
              email: "jbclahar@gmail.com",
              phone: "646.326.1859",
              photo: "assets/img/company/johanebelony.jpeg",
              states: ["PA"],
            },
            {
              name: "Dana McGuinness Bonanno",
              position: "Agent",
              email: "dana.mcguinness@gmail.com",
              phone: "570.401.8080",
              photo: "assets/img/company/danamcguinness.png",
            },
            {
              name: "Johanna Daye",
              position: "Agent",
              email: "jwdaye@gmail.com",
              phone: "610.909.8245",
              photo: "assets/img/company/joannadaye.jpeg",
            },
            {
              name: "Eric Murchison",
              position: "Agent",
              email: "ericmurchison@icloud.com",
              phone: "215.416.7457",
              photo: "assets/img/company/ericmurchison.jpg",
            },
            {
              name: "Dorothy Gibbons",
              position: "Agent",
              email: "malana64@gmail.com",
              phone: "215.961.7130",
              photo: "assets/img/company/dorothygibbons.jpg",
            },
            {
              name: "Jakai Bishop",
              position: "Agent",
              email: "jakai01@gmail.com",
              phone: "215.768.7995",
              photo: "assets/img/company/jakaibishop.png",
            },
            {
              name: "Douglas J Nesmith",
              position: "Agent",
              email: "dn210@msn.com",
              phone: "267.716.5358",
              photo: "assets/img/company/douglasnesmith.png",
            },
            {
              name: "Angel Freeburn",
              position: "Agent",
              phone: "267.213.5258",
              email: "investorsfriendlyagent@gmail.com",
              photo: "assets/img/company/angelfreeburn.jpg",
              states: ["PA"],
            },
            {
              name: "Lauren Felton",
              position: "Agent",
              phone: "610.551.4844",
              email: "laurencierra.mcre@gmail.com",
              photo: "assets/img/company/laurenfelton.jpg",
              states: ["NYC", "MD"],
            },
            {
              name: "Towanda Allen",
              position: "Agent",
              email: "towandaallen2@gmail.com",
              phone: "484.410.9036",
              photo: "assets/img/company/towandaallen.png",
              states: ["PA"],
            },
            {
              name: "Nalin Passio",
              position: "Agent",
              email: "nalin.passio@gmail.com",
              phone: "267.230.7611",
              photo: "assets/img/company/nalinpassio.png",
              states: ["PA"],
            },
            {
              name: "Iris Felder",
              position: "Agent",
              email: "iris.felder@gmail.com",
              phone: "267.259.6915",
              photo: "assets/img/company/irisfelder.jpg",
            },
            {
              name: "Candice Wattley",
              position: "Agent",
              phone: "215.837.0882",
              email: "candiw4@verizon.net",
              photo: "assets/img/company/c_wattley.png",
              states: ["PA"],
            },
          ].map(function (e) {
            var a, t;
            return l.a.createElement(
              "div",
              { class: "item text-center wow fadeInUp" },
              l.a.createElement(
                "div",
                { class: "image-holder" },
                l.a.createElement("img", {
                  src: e.photo,
                  alt: "".concat(e.name, " - ").concat(e.position),
                })
              ),
              l.a.createElement("h3", { class: "team-name" }, e.name),
              l.a.createElement("span", null, e.position),
              l.a.createElement("br", null),
              l.a.createElement(
                "span",
                null,
                null === (a = e.states) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      return l.a.createElement(
                        "span",
                        { style: { padding: "5px" } },
                        " ",
                        e,
                        " "
                      );
                    })
              ),
              l.a.createElement("br", null),
              l.a.createElement(
                "span",
                null,
                null === (t = e.email) || void 0 === t
                  ? void 0
                  : t.toLowerCase()
              ),
              l.a.createElement("br", null),
              l.a.createElement("span", null, e.phone)
            );
          });
          return l.a.createElement(
            "div",
            { class: "row" },
            l.a.createElement(
              "div",
              { class: "col-12 col-lg-12 team-member-area" },
              l.a.createElement(
                "div",
                { class: "testimonial-team owl-carousel owl-theme" },
                e
              )
            )
          );
        },
        d = function () {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              { class: "preloader" },
              l.a.createElement(
                "div",
                { class: "centrize full-width" },
                l.a.createElement(
                  "div",
                  { class: "vertical-center" },
                  l.a.createElement(
                    "svg",
                    {
                      class: "ha-logo loading",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 10 10",
                    },
                    l.a.createElement("path", {
                      class: "house",
                      d: "M1.9 8.5V5.3h-1l4-4.3 2.2 2.1v-.6h1v1.7l1 1.1H7.9v3.2z",
                    }),
                    l.a.createElement("path", {
                      class: "circut",
                      d: "M5 8.5V4m0 3.5l1.6-1.6V4.3M5 6.3L3.5 4.9v-.6m2.7.7l.4.4L7 5M5.9 6.1v.5h.5M4.2 5v.5h-.8m1 1.5v.6h-.6m1.2.8L3.6 6.7M5 8.4l1-.9h.7M4.6 3.6L5 4l.4-.4",
                    })
                  )
                )
              )
            ),
            l.a.createElement(
              "header",
              null,
              l.a.createElement(
                "nav",
                {
                  class:
                    "navbar navbar-top-default navbar-expand-lg navbar-simple",
                },
                l.a.createElement(
                  "div",
                  { class: "container" },
                  l.a.createElement(
                    "div",
                    { class: "inner-nav-wrap" },
                    l.a.createElement(
                      "a",
                      { href: "#home", title: "Logo", class: "logo scroll" },
                      l.a.createElement("img", {
                        src: "assets/img/logo-white.png",
                        alt: "logo",
                        class: "logo-white",
                      }),
                      l.a.createElement("img", {
                        src: "assets/img/logo-orange.png",
                        alt: "logo",
                        class: "logo-dark",
                      })
                    ),
                    l.a.createElement(
                      "div",
                      {
                        class: "collapse navbar-collapse",
                        id: "AllSides Designs",
                      },
                      l.a.createElement(
                        "div",
                        { class: "navbar-nav ml-auto" },
                        l.a.createElement(
                          "a",
                          {
                            class: "nav-link active scroll",
                            href: "#slider-area",
                          },
                          l.a.createElement("span", { class: "num" }, "Home")
                        ),
                        l.a.createElement(
                          "a",
                          { class: "nav-link scroll", href: "#team-section" },
                          l.a.createElement("span", { class: "num" }, "About "),
                          " "
                        ),
                        l.a.createElement(
                          "a",
                          {
                            class: "nav-link scroll",
                            href: "#our-testimonial",
                          },
                          l.a.createElement(
                            "span",
                            { class: "num" },
                            "Clients "
                          ),
                          " "
                        ),
                        l.a.createElement(
                          "a",
                          { class: "nav-link scroll", href: "#contact-sec" },
                          l.a.createElement(
                            "span",
                            { class: "num" },
                            "Contact"
                          ),
                          " "
                        )
                      )
                    ),
                    l.a.createElement(
                      "a",
                      {
                        href: "javascript:void(0)",
                        class: "sidemenu_btn",
                        id: "sidemenu_toggle",
                      },
                      l.a.createElement("span", null),
                      l.a.createElement("span", null),
                      l.a.createElement("span", null)
                    ),
                    l.a.createElement(
                      "a",
                      { href: "tel:215-558-7000", class: "agency-num" },
                      l.a.createElement(
                        "span",
                        null,
                        l.a.createElement("i", { class: "lni lni-whatsapp" })
                      ),
                      " ",
                      l.a.createElement(
                        "span",
                        { class: "whatsapp-num" },
                        "+1 215-558-7000"
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { class: "side-menu hidden" },
                l.a.createElement(
                  "div",
                  { class: "inner-wrapper" },
                  l.a.createElement(
                    "span",
                    { class: "btn-close", id: "btn_sideNavClose" },
                    l.a.createElement("i", null),
                    l.a.createElement("i", null)
                  ),
                  l.a.createElement(
                    "nav",
                    { class: "side-nav w-100" },
                    l.a.createElement(
                      "ul",
                      { class: "navbar-nav" },
                      l.a.createElement(
                        "li",
                        { class: "nav-item" },
                        l.a.createElement(
                          "a",
                          { class: "nav-link scroll", href: "#slider-area" },
                          l.a.createElement("span", null, "01."),
                          " Home"
                        )
                      ),
                      l.a.createElement(
                        "li",
                        { class: "nav-item" },
                        l.a.createElement(
                          "a",
                          { class: "nav-link scroll", href: "#team-section" },
                          l.a.createElement("span", null, "02."),
                          " About"
                        )
                      ),
                      l.a.createElement(
                        "li",
                        { class: "nav-item" },
                        l.a.createElement(
                          "a",
                          {
                            class: "nav-link scroll",
                            href: "#our-testimonial",
                          },
                          l.a.createElement("span", null, "03."),
                          " Clients"
                        )
                      ),
                      l.a.createElement(
                        "li",
                        { class: "nav-item" },
                        l.a.createElement(
                          "a",
                          { class: "nav-link scroll", href: "#contact-sec" },
                          l.a.createElement("span", null, "04."),
                          " Contact"
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "side-footer w-100" },
                    l.a.createElement(
                      "ul",
                      { class: "social-icons-simple" },
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          "a",
                          {
                            class: "facebook-text-hvr",
                            href: "https://www.facebook.com/MarvinCappsRealty/",
                          },
                          l.a.createElement("i", {
                            class: "fab fa-facebook-f",
                          }),
                          " "
                        ),
                        " "
                      ),
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          "a",
                          {
                            class: "instagram-text-hvr",
                            href: "https://www.instagram.com/marvincappsrealty/",
                          },
                          l.a.createElement("i", { class: "fab fa-instagram" }),
                          " "
                        ),
                        " "
                      ),
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          "a",
                          {
                            class: "twitter-text-hvr",
                            href: "https://twitter.com/MarvinCappsINC",
                          },
                          l.a.createElement("i", { class: "fab fa-twitter" }),
                          " "
                        ),
                        " "
                      ),
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          "a",
                          {
                            class: "linkedin-text-hvr",
                            href: "https://www.linkedin.com/in/marvin-capps-08b90438",
                          },
                          l.a.createElement("i", { class: "fab fa-linkedin" }),
                          " "
                        ),
                        " "
                      )
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "\xa9 2021 Marvin Capps Realty, Inc. Powered by AllSides Designs"
                    )
                  )
                )
              ),
              l.a.createElement("a", {
                id: "close_side_menu",
                href: "javascript:void(0);",
              })
            ),
            l.a.createElement(
              "section",
              {
                class: "slider-area position-relative d-flex",
                id: "slider-area",
              },
              l.a.createElement("div", {
                class: "bg-overlay mix-gradient opacity-9",
              }),
              l.a.createElement(
                "div",
                { class: "container" },
                l.a.createElement(
                  "div",
                  { class: "row" },
                  l.a.createElement(
                    "div",
                    { class: "col-lg-6" },
                    l.a.createElement(
                      "div",
                      { class: "slider-content" },
                      l.a.createElement(
                        "h4",
                        { class: "heading" },
                        "MARVIN CAPPS REALTY, INC"
                      ),
                      l.a.createElement(
                        "h4",
                        { class: "" },
                        "LET US FIND YOUR DREAM HOME"
                      ),
                      l.a.createElement("p", { class: "text" })
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { class: "slider-icons" },
                l.a.createElement(
                  "ul",
                  { class: "slider-social banner-social" },
                  l.a.createElement(
                    "li",
                    { class: "animated-wrap" },
                    l.a.createElement(
                      "a",
                      {
                        class: "animated-element facebook_bg_hvr2",
                        href: "https://www.facebook.com/MarvinCappsRealty/",
                      },
                      l.a.createElement("i", { class: "fab fa-facebook-f" }),
                      " "
                    )
                  ),
                  l.a.createElement(
                    "li",
                    { class: "animated-wrap" },
                    l.a.createElement(
                      "a",
                      {
                        class: "animated-element twitter_bg_hvr2",
                        href: "https://twitter.com/MarvinCappsINC",
                      },
                      l.a.createElement("i", { class: "fab fa-twitter" }),
                      " "
                    )
                  ),
                  l.a.createElement(
                    "li",
                    { class: "animated-wrap" },
                    l.a.createElement(
                      "a",
                      {
                        class: "animated-element linkdin_bg_hvr2",
                        href: "https://www.linkedin.com/in/marvin-capps-08b90438",
                      },
                      l.a.createElement("i", { class: "fab fa-linkedin-in" }),
                      " "
                    )
                  ),
                  l.a.createElement(
                    "li",
                    { class: "animated-wrap" },
                    l.a.createElement(
                      "a",
                      {
                        class: "animated-element instagram_bg_hvr2",
                        href: "https://www.instagram.com/marvincappsrealty",
                      },
                      l.a.createElement("i", { class: "fab fa-instagram" }),
                      " "
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              "section",
              {
                class: "team-section padding-top padding-bottom",
                id: "team-section",
              },
              l.a.createElement(
                "div",
                { class: "container" },
                l.a.createElement(
                  "div",
                  { class: "row" },
                  l.a.createElement(
                    "div",
                    {
                      class:
                        "col-12 stats-heading-area text-center wow fadeInUp",
                    },
                    l.a.createElement(
                      "span",
                      { class: "sub-heading" },
                      "We are committed to helping you."
                    ),
                    l.a.createElement(
                      "h4",
                      { class: "heading" },
                      "WE ARE A",
                      " ",
                      l.a.createElement(
                        "span",
                        null,
                        l.a.createElement(
                          "span",
                          { class: "color js-rotating" },
                          "REAL ESTATE,CONSULTING,PEOPLE"
                        ),
                        " ",
                        "AGENCY"
                      )
                    ),
                    l.a.createElement(
                      "p",
                      { class: "text" },
                      "If you're looking for high quality and personal service, you've come to the right place. Tired of being ignored or feeling like just another \"Client\" to your Broker/Agent. You will not feel that way when you decide to allow Marvin Capps Realty, Inc. to handle all of your Real Estate Needs."
                    )
                  )
                ),
                l.a.createElement(p, null)
              )
            ),
            l.a.createElement(
              "section",
              { id: "project-sec", class: "project-sec position-relative" },
              l.a.createElement(
                "div",
                {
                  class:
                    "projects owl-carousel owl-theme no-gutters position-relative",
                },
                l.a.createElement(
                  "div",
                  { class: "item project-area" },
                  l.a.createElement(
                    "div",
                    { class: "project-img order-1" },
                    l.a.createElement("img", {
                      src: "assets/img/salebg.jpg",
                      alt: "images",
                    })
                  ),
                  l.a.createElement(
                    "div",
                    { class: "container" },
                    l.a.createElement(
                      "div",
                      {
                        class:
                          "project-detail text-center text-lg-left order-2",
                      },
                      l.a.createElement(
                        "div",
                        { class: "row no-gutters" },
                        l.a.createElement(
                          "div",
                          { class: "col-12 col-lg-5" },
                          l.a.createElement(
                            "div",
                            { class: "project-box wow fadeInLeft" },
                            l.a.createElement(
                              "div",
                              { class: "animate-in" },
                              l.a.createElement(
                                "p",
                                { class: "project-sub-heading" },
                                l.a.createElement("span", null),
                                "More About Us"
                              ),
                              l.a.createElement(
                                "h6",
                                { class: "project-heading" },
                                "Sales "
                              ),
                              l.a.createElement(
                                "p",
                                { class: "project-text" },
                                "Represent both: buyers, sellers, and investors in residential & commercial real estate transactions throughout Pennsylvania & Delaware. Act as a liaison between buyers, sellers, and investors through maintaining correspondence with Attorneys realtors, mortgage companies, appraisers, surveyors, ordering inspections, radon tests, and certificates of repair via contractors. Ensuring that all parties to the contract understand; all paperwork formalities, i.e. Sales Agreement, H.U.D. documents, Good Faith Estimates & Mortgage documents. Inform clients of company Real Estate products & services."
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  { class: "item project-area" },
                  l.a.createElement(
                    "div",
                    { class: "project-img order-1" },
                    l.a.createElement("img", {
                      src: "assets/img/salebg.jpg",
                      alt: "images",
                    })
                  ),
                  l.a.createElement(
                    "div",
                    { class: "container" },
                    l.a.createElement(
                      "div",
                      {
                        class:
                          "project-detail text-center text-lg-left order-2",
                      },
                      l.a.createElement(
                        "div",
                        { class: "row no-gutters" },
                        l.a.createElement(
                          "div",
                          { class: "col-12 col-lg-5" },
                          l.a.createElement(
                            "div",
                            { class: "project-box" },
                            l.a.createElement(
                              "div",
                              { class: "animate-in" },
                              l.a.createElement(
                                "p",
                                { class: "project-sub-heading" },
                                l.a.createElement("span", null),
                                "Most Afordable Properties"
                              ),
                              l.a.createElement(
                                "h6",
                                { class: "project-heading" },
                                "Consultation ",
                                l.a.createElement("span", null, " ")
                              ),
                              l.a.createElement(
                                "p",
                                { class: "project-text" },
                                "Advised Presidents/Ceo of current Market Financial Conditions concerning (Stocks-REITS-Commodities) and forecast future lending guidelines that would have an immediate and direct effect on company profits, current/future projects and liabilities. Consulted on most efficient and profitable way to manage asset allocation, potential investments, rate of return on investments, how to generate the \u201cHighest and Best use\u201d of Acquired Land or potential purchases. Negotiated with Lenders, Banks, Brokers and Hard Money Lenders while verifying values of company owned assets, regularly held meetings to inform President/CEO of companies financial outlook and advised regularly on the steps that needed to be taken to return to profitability on company investments and how to maintain and increase profitability while limiting potential; internal as well as external, liabilities."
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { class: "project-links d-flex  d-lg-block" },
                l.a.createElement(
                  "a",
                  { class: "customPrevBtn" },
                  l.a.createElement("i", { class: "lni lni-chevron-left" })
                ),
                l.a.createElement(
                  "a",
                  { class: "customNextBtn" },
                  l.a.createElement("i", { class: "Ini lni-chevron-right" })
                )
              )
            ),
            l.a.createElement(
              "section",
              { id: "our-testimonial", class: "our-testimonial" },
              l.a.createElement(
                "div",
                { class: "parallax page-header testimonial-bg" },
                l.a.createElement(
                  "div",
                  { class: "container" },
                  l.a.createElement(
                    "div",
                    { class: "row" },
                    l.a.createElement(
                      "div",
                      { class: "col-12 text-center" },
                      l.a.createElement(
                        "div",
                        {
                          class: "testimonial-content wow fadeInRight",
                          "data-wow-delay": "300ms",
                        },
                        l.a.createElement("span", null, "Take a word from "),
                        l.a.createElement("h2", null, "Our Happy Customers")
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { class: "container" },
                l.a.createElement(
                  "div",
                  { class: "owl-carousel", id: "testimonial-slider" },
                  l.a.createElement(
                    "div",
                    { class: "item testi-box" },
                    l.a.createElement(
                      "div",
                      { class: "row align-items-center" },
                      l.a.createElement(
                        "div",
                        {
                          class:
                            "col-lg-4 col-md-12 text-center wow fadeInLeft",
                        },
                        l.a.createElement("div", {
                          class: "testimonial-round d-inline-block",
                        }),
                        l.a.createElement(
                          "h4",
                          { class: "defaultcolor font-light top15" },
                          l.a.createElement(
                            "a",
                            { href: "#." },
                            "Robert & Sineth"
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          class:
                            "col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-left text-center rating-part wow fadeInRight",
                        },
                        l.a.createElement(
                          "p",
                          { class: "bottom15 top90" },
                          "We love the services they have to offer. We strongly recommend them!"
                        ),
                        l.a.createElement(
                          "span",
                          { class: "d-inline-block test-star" },
                          l.a.createElement("i", { class: "fas fa-star" }),
                          l.a.createElement("i", { class: "fas fa-star" }),
                          l.a.createElement("i", { class: "fas fa-star" }),
                          l.a.createElement("i", { class: "fas fa-star" }),
                          l.a.createElement("i", { class: "fas fa-star" })
                        )
                      )
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              "section",
              { class: "contact-sec", id: "contact-sec" },
              l.a.createElement(
                "div",
                { class: "container" },
                l.a.createElement(
                  "div",
                  { class: "row" },
                  l.a.createElement(m, null),
                  l.a.createElement(
                    "div",
                    {
                      class:
                        "col-12 col-lg-5 text-center text-lg-left position-relative",
                    },
                    l.a.createElement(
                      "div",
                      { class: "contact-details wow fadeInRight" },
                      l.a.createElement(
                        "h4",
                        { class: "heading" },
                        "OUR LOCATION"
                      ),
                      l.a.createElement(
                        "p",
                        { class: "text" },
                        "There are many ways to get in contact with us. We are here to help you through the entire process."
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement("i", {
                            "aria-hidden": "true",
                            class: "fas fa-map-marker-alt",
                          }),
                          l.a.createElement(
                            "a",
                            { href: "https://bit.ly/3iRGyUH" },
                            "1800 JFK Blvd Suite 300 Philadelphia, PA, United States",
                            " "
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement("i", {
                            "aria-hidden": "true",
                            class: "fas fa-phone-volume",
                          }),
                          l.a.createElement(
                            "a",
                            { href: "tel:215-558-7000" },
                            l.a.createElement("span", null, "+1 215-558-7000")
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement("i", {
                            "aria-hidden": "true",
                            class: "fas fa-paper-plane",
                          }),
                          l.a.createElement(
                            "a",
                            { href: "mailto: marvin.capps@yahoo.com" },
                            "marvin.capps@yahoo.com"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              "footer",
              { class: "footer-style-1" },
              l.a.createElement(
                "div",
                { class: "container" },
                l.a.createElement(
                  "div",
                  { class: "row align-items-center" },
                  l.a.createElement(
                    "div",
                    { class: "col-lg-6" },
                    l.a.createElement(
                      "div",
                      { class: "footer-social text-center text-lg-left " },
                      l.a.createElement(
                        "ul",
                        { class: "list-unstyled" },
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              class: "wow fadeInUp",
                              href: "https://www.facebook.com/MarvinCappsRealty/",
                            },
                            l.a.createElement("i", {
                              "aria-hidden": "true",
                              class: "fab fa-facebook-f",
                            })
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              class: "wow fadeInDown",
                              href: "https://twitter.com/MarvinCappsINC",
                            },
                            l.a.createElement("i", {
                              "aria-hidden": "true",
                              class: "fab fa-twitter",
                            })
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              class: "wow fadeInDown",
                              href: "https://www.linkedin.com/in/marvin-capps-08b90438",
                            },
                            l.a.createElement("i", {
                              "aria-hidden": "true",
                              class: "fab fa-linkedin-in",
                            })
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              class: "wow fadeInUp",
                              href: "https://www.instagram.com/marvincappsrealty/",
                            },
                            l.a.createElement("i", {
                              "aria-hidden": "true",
                              class: "fab fa-instagram",
                            })
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "col-lg-6 text-center text-lg-right" },
                    l.a.createElement(
                      "p",
                      { class: "company-about fadeIn" },
                      "\xa9 2021 Marvin Capps Realty, Inc. Powered By",
                      " ",
                      l.a.createElement(
                        "a",
                        { href: "javascript:void(0);" },
                        "AllSides Designs"
                      )
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              "span",
              { class: "scroll-top-arrow" },
              l.a.createElement("i", { class: "fas fa-angle-up" })
            )
          );
        };
      var E = function () {
        return l.a.createElement(
          r.a,
          null,
          l.a.createElement(
            i.c,
            null,
            l.a.createElement(i.a, { path: "/contact" }),
            l.a.createElement(i.a, { path: "/" }, l.a.createElement(d, null))
          )
        );
      };
      c.a.render(l.a.createElement(E, null), document.getElementById("root"));
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.e0d26be5.chunk.js.map
