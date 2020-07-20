import thunkMiddleware from "redux-thunk";
import createRootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import history from "./history";

import { routerMiddleware } from "connected-react-router";

// Build the middleware for intercepting and dispatching navigation actions
const router_middleware = routerMiddleware(history);

export default function configureStore(preloadedState) {
  let store = null;

  if (module.hot) {
    let actionCreators = {};
    store = createStore(
      createRootReducer(history),
      compose(
        applyMiddleware(thunkMiddleware, router_middleware),
        window.devToolsExtension
          ? window.devToolsExtension({ actionCreators })
          : f => f
      )
    );
  } else {
    store = createStore(
      createRootReducer(history),
      preloadedState,
      applyMiddleware(thunkMiddleware, router_middleware)
    );
  }
  return store;
}
