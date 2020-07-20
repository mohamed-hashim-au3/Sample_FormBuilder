import { connect } from "react-redux";
import FormActionComponent from "../components/FormAction";
import * as actions from "../actions/Forms";
const mapStateToProps = (state, ownProps) => {
  const { forms, form } = state.Forms;
  return {
    forms,
    form
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateForm: data => {
      dispatch(actions.updateForm(data));
    }
  };
};

const FromAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormActionComponent);

export default FromAction;
