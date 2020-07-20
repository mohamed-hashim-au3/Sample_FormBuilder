import React from "react";
import Routes from "./routes";
// import history from "./store/history";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigStore";
import "./assets/styles/root.scss";

function App(props) {
  return (
    <>
      <Provider store={configureStore()}>
        <ConnectedRouter history={props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </>
  );
}

export default App;
