import React, { useEffect } from "react";
import Sidebar from "./common/Sidebar";
import FormCard from "../containers/FormCard";

function HomePage(props) {
  const { forms } = props;
  useEffect(() => {
    props.getForms();
  }, []);
  // useEffect(() => {
  //   console.log(props.forms);
  // }, [props.forms]);
  return (
    <>
      <main className="main">
        <div className="sidebar__wrapper">
          <Sidebar />
        </div>
        <div className="contents">
          <h1 className="contents__heading">Forms</h1>
          <div className="container">
            <section className="row">
              <FormCard create={true} />
              {!forms
                ? ""
                : forms.map(i => {
                    return <FormCard title={i.name} key={i._id} id={i._id} />;
                  })}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
