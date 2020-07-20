import React from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import history from "../store/history";
function FormCard(props) {
  const { id, title, createForm } = props;
  return (
    <>
      {props.create ? (
        <div className="col-3">
          <Card className="form__card ">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="form__card-create" onClick={createForm}>
                Create Form
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="col-3">
          <Card
            className="form__card "
            onClick={() => history.push(`/form/details/${id}`)}
          >
            <div className="form__card-image"></div>
            <Card.Body>
              <Card.Title className="form__card-title">{title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default FormCard;
