import { connect } from "react-redux";
import FormDetailComponent from "../components/FormDetail";
import * as actions from "../actions/Forms";
const mapStateToProps = (state, ownProps) => {
  const { submissions } = state.Forms;
  return {
    submissions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubmissions: data => {
      dispatch(actions.getSubmissions(data));
    },
    deleteSubmission: id => {
      dispatch(actions.deleteSubmission(id));
    },
    deleteForm: id => {
      dispatch(actions.deleteForm(id));
    }
  };
};

const FormDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDetailComponent);

export default FormDetail;
