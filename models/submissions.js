const mongoose = require("mongoose");

const Submissions = new mongoose.Schema({
  values: {
    type: Array
  }
});
module.exports = mongoose.model("Submission", Submissions);
