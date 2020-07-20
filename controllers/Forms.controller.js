const Form = require("../models/forms");
const Submission = require("../models/submissions");

// @desc    Get Forms
// @route   GET /api/v1/forms
// @access  Public

exports.getForm = (req, res) => {
  Form.find({}, (err, forms) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Retreived Successfully",
      data: forms
    });
  });
};
// @desc    Get Form by ID
// @route   GET /api/v1/forms/:id
// @access  Public

exports.getFormByID = (req, res) => {
  const { id } = req.params;
  Form.findById(id, (err, forms) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Retreived Successfully",
      data: forms
    });
  });
};

// @desc    Create New Form
// @route   POST /api/v1/forms
// @access  Public

exports.createForm = (req, res) => {
  const form = new Form({});
  form.save((err, form) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Form Created Successfully",
      data: form
    });
  });
};

// @desc    Update form
// @route   PUT /api/v1/forms
// @access  Public

exports.updateForm = (req, res) => {
  const { id, questions, name } = req.body;
  Form.findByIdAndUpdate(id, { name, questions }, (err, form) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "updated Successfully",
      data: form
    });
  });
};

// @desc    Delete form
// @route   DELETE /api/v1/forms
// @access  Public

exports.deleteForm = (req, res) => {
  const { id } = req.body;
  Form.findByIdAndRemove(id, (err, form) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Deleted Successfully",
      data: form
    });
  });
};

// @desc    Create Submission
// @route   POST /api/v1/submissions
// @access  Public

exports.createSubmissions = (req, res) => {
  const { form_id, values } = req.body;
  const submission = new Submission({ values });
  submission.save((err, submission) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    Form.findByIdAndUpdate(
      form_id,
      { $push: { submissions: submission._id } },
      { new: true, useFindAndModify: false },
      (err, form) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Something Went Wrong ,Please try again"
          });
        }
        return res.status(200).json({
          success: true,
          message: "Form Submitted Successfully",
          data: form
        });
      }
    );
  });
};

// @desc    Delete Submission
// @route   DELETE /api/v1/submissions
// @access  Public

exports.deleteSubmissions = (req, res) => {
  const { sub_id } = req.body;
  Submission.findByIdAndRemove(sub_id, (err, sub) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something Went Wrong ,Please try again"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Submission Deleted Successfully",
      data: sub
    });
  });
};

// @desc    get Submissions by form id
// @route   GET /api/v1/submissions/:form_id
// @access  Public

exports.getSubmissions = (req, res) => {
  const { form_id } = req.params;
  Form.findById(form_id)
    .populate("submissions")
    .exec((err, form) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Something Went Wrong ,Please try again"
        });
      }
      return res.status(200).json({
        success: true,
        message: "Submissions Retrived Succesfully",
        data: form
      });
    });
};
