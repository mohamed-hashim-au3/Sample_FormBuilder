import { connect } from "react-redux";
import ViewFormComponent from "../components/ViewForm";
import * as actions from "../actions/Forms";
const mapStateToProps = (state, ownProps) => {
  const { form } = state.Forms;
  return { form };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFormById: data => {
      dispatch(actions.getFormById(data));
    },
    submitForm: (form_id, values) => {
      dispatch(actions.submitForm(form_id, values));
    }
  };
};

const ViewForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewFormComponent);

export default ViewForm;
