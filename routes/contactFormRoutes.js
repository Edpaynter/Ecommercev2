const express = require("express");
const contactForm = require("../controllers/contactFormController");
const router = express.Router();

// GET /user
router.get("/contactform", contactForm.list_all_forms);
// POST /user
router.post("/contactform", contactForm.create_a_form);

router.get("/contactform/:formId", contactForm.read_a_form);
// DELETE /user/:userId
router.delete("/contactform/:formId", contactForm.delete_a_form);

module.exports = router;

