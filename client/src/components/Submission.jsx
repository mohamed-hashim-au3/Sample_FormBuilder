import React from "react";
import Header from "./common/Header";

function Submission() {
  return (
    <>
      <Header back={true} />
      <section className="viewform">
        <div className="viewform__container">
          <h1 className="viewform__container-title">Form title</h1>
          <div className="submission__container">
            <div className="submission__container-title">Sample question ?</div>
            <div className="submission__container-value">Answer</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Submission;
