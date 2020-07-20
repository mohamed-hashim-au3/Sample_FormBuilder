const express = require("express");
const router = express.Router();

const {
  getForm,
  createForm,
  updateForm,
  deleteForm,
  getSubmissions,
  deleteSubmissions,
  createSubmissions,
  getFormByID
} = require("../controllers/Forms.controller");

//Rouetes

router
  .route("/forms")
  .get(getForm)
  .post(createForm)
  .put(updateForm)
  .delete(deleteForm);
router.route("/forms/:id").get(getFormByID);
router
  .route("/submissions")
  .delete(deleteSubmissions)
  .post(createSubmissions);

router.route("/submissions/:form_id").get(getSubmissions);

module.exports = router;
