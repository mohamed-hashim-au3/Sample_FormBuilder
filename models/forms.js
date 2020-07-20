const mongoose = require("mongoose");

const Forms = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: "Untitled"
  },
  questions: {
    type: Array,
    required: false
  },
  submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Submission"
    }
  ]
});
module.exports = mongoose.model("Form", Forms);
