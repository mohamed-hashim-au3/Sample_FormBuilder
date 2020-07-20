import { connect } from "react-redux";
import FormCardComponent from "../components/FormCard";
import * as actions from "../actions/Forms";
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createForm: data => {
      dispatch(actions.createForm(data));
    }
  };
};

const FormCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCardComponent);

export default FormCard;
