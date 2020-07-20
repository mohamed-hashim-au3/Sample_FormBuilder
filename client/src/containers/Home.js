import { connect } from "react-redux";
import HomeComponent from "../components/HomePage";
import * as actions from "../actions/Forms";
const mapStateToProps = (state, ownProps) => {
  const { forms } = state.Forms;
  return {
    forms
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getForms: () => {
      dispatch(actions.getForms());
    }
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
