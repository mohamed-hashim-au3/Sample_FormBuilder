import React, { useState } from "react";
import Sidebar from "./common/Sidebar";
import Table from "react-bootstrap/Table";
import history from "../store/history";
import { Modal } from "react-bootstrap";
function FormDetail(props) {
  const { submissions, getSubmissions, deleteSubmission, deleteForm } = props;
  // const [submissions,setSubmissions] = useState(submissions)
  const { id } = props.match.params;
  React.useEffect(() => {
    console.log(id);
    getSubmissions(id);
  }, [id, getSubmissions]);
  React.useEffect(() => {
    console.log(submissions, "updated");
  }, [submissions]);
  return (
    <>
      <main className="main">
        <div className="sidebar__wrapper">
          <Sidebar />
        </div>
        <div className="contents formdetail">
          <h1 className="contents__heading">{submissions.name}</h1>

          <section>
            <div className="mb-3 d-flex justify-content-between">
              <h4>SUBMISSIONS</h4>
              <div className="d-flex">
                <div
                  className="contents__editForm mr-3"
                  onClick={() => {
                    window.confirm(
                      "Are you sure you want to delete this form ?"
                    );
                    deleteForm(id);
                  }}
                  style={{
                    border: "1px solid red",
                    color: "red"
                  }}
                >
                  DELETE FORM
                </div>
                <div
                  className="contents__editForm mr-3"
                  onClick={() =>
                    history.push(`/form/actions/${submissions._id}`)
                  }
                >
                  EDIT FORM
                </div>
                <div
                  className="contents__editForm"
                  onClick={() =>
                    window.open(`/form/viewform/${submissions._id}`, "_blank")
                  }
                >
                  VIEW FORM
                </div>
              </div>
            </div>

            {!submissions.submissions ? (
              ""
            ) : !submissions.submissions.length ? (
              <div className="contents__nodata">
                No Submissions Were Made So Far
              </div>
            ) : (
              <Table responsive={true}>
                <tbody>
                  {submissions.submissions.map((i, index) => {
                    return (
                      <>
                        <tr>
                          <td className="formdetail__id">{index + 1}</td>
                          <td>
                            <SubmissionData
                              data={i.values}
                              name={submissions.name}
                            />
                          </td>
                          <td>
                            <div
                              className="formdetail__delete"
                              onClick={() => deleteSubmission(i._id)}
                            >
                              Delete
                            </div>
                          </td>
                          <td>
                            <div className="formdetail__id">{i._id}</div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

const SubmissionData = props => {
  // const [questions, SetQuestions] = useState(Object.keys(props.data));
  // const [answers, SetAnswers] = useState(Object.values(props.data));

  React.useEffect(() => {
    console.log(props);
  }, [props.data]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="formdetail__view" onClick={handleShow}>
        View
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <section className="viewform">
          <div className="viewform__container">
            <h1 className="viewform__container-title">{props.name}</h1>
            <div className="submission__container">
              {props.data.map((i, index) => {
                return (
                  <>
                    <div className="submission__container-title">
                      {Object.keys(i).join("")}
                    </div>
                    <div className="submission__container-value">
                      {Object.values(i).join("")}
                    </div>
                  </>
                );
              })}
              <div
                className="btn btn-info"
                style={{ fontSize: "2rem" }}
                onClick={handleClose}
              >
                CLOSE
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default FormDetail;
