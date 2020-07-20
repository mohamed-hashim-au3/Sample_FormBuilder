import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import ScrollTop from "./ScrollTop";
import FormAction from "./containers/FormAction";
import Submission from "./components/Submission";
import FormDetail from "./containers/FormDetail";
import ViewForm from "./containers/ViewForm";

function routes() {
  return (
    <>
      <ScrollTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/form/actions/:id" component={FormAction} />
      <Route exact path="/form/details/:id" component={FormDetail} />
      <Route exact path="/form/viewform/:id" component={ViewForm} />
      <Route exact path="/form/submission/:id" component={Submission} />
    </>
  );
}

export default routes;
