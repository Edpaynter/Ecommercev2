"use strict";
module.exports = (app) => {
  const contactForm = require("../controller/contactFormController");
  app.route("/contactform").get(contactForm.list_all_forms).post(contactForm.create_a_form);

  app
    .route("/contactform/:formId")
    .get(contactForm.read_a_form)
    // .put(contactForm.update_a_form)
    .delete(contactForm.delete_a_form);
};
