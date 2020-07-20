import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { Forms } from "./Forms";
// import { reducer as reduxFormReducer } from "redux-form";
export default history =>
  combineReducers({
    router: connectRouter(history),
    Forms
  });
// const RootReducer = history =>
//   combineReducers({
//     Forms,
//     router: connectRouter(history)
//     // form: reduxFormReducer // mounted under "form"
//   });

// export default RootReducer;
