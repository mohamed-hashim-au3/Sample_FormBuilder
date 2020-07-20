import React, { useState, useEffect } from "react";
import Header from "./common/Header";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";
// import history from "../store/history";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/icons/bin.svg";
function FormAction(props) {
  const { forms, form, updateForm } = props;
  const { id } = props.match.params;

  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  console.log(props, "from actions");
  useEffect(() => {
    let temp = forms.filter(i => {
      return i._id === id;
    });
    if (!temp.length) {
      setQuestions(form.questions);
      setTitle(form.name);
    } else {
      setQuestions(temp[0].questions);
      setTitle(temp[0].name);
    }

    console.log(temp);
  }, [props.forms, props.form]);

  const addQuestion = () => {
    setQuestions([...questions, { id: uuid(), question: "", type: "text" }]);
  };
  const removeQuestion = id => {
    let newQuestions = questions.filter(i => i.id !== id);
    setQuestions(newQuestions);
  };
  const handleQuestionChange = (Id, event) => {
    let newQuestions = questions.map(i => {
      if (i.id === Id) {
        i.question = event.target.value;
      }
      return i;
    });
    setQuestions(newQuestions);
  };
  const handleTypeChange = (Id, event) => {
    let newQuestions = questions.map(i => {
      if (i.id === Id) {
        i.type = event.target.value;
      }
      return i;
    });
    setQuestions(newQuestions);
  };

  const handleSave = () => {
    console.log({ name: title, questions: questions });
    updateForm({ id: id, name: title, questions: questions });
  };

  return (
    <>
      <Header />
      <section className="formaction">
        <div className="formaction__title">
          <input
            className="formaction__title-value"
            type="text"
            placeholder="Enter Form Title Here"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="formaction__section">
          {!questions
            ? ""
            : questions.map(i => {
                return (
                  <>
                    <div className="formaction__inputs" key={i.id}>
                      <input
                        className="formaction__inputs-value"
                        type="text"
                        value={i.question}
                        onChange={e => handleQuestionChange(i.id, e)}
                        placeholder="What is your Question"
                      />
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control
                          as="select"
                          onChange={e => {
                            handleTypeChange(i.id, e);
                          }}
                        >
                          <option>text</option>
                          <option>email</option>
                          <option>checkboxes</option>
                          <option>radio</option>
                          <option>number</option>
                        </Form.Control>
                      </Form.Group>
                      <div
                        className="formaction__inputs-icon"
                        onClick={() => removeQuestion(i.id)}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </>
                );
              })}

          <div className="formaction__section-addbtn" onClick={addQuestion}>
            Add Question
          </div>
          {!questions ? (
            ""
          ) : questions.length ? (
            <div className="formaction__actions">
              <Link to="/">
                <div className="formaction__actions-cancel">Cancel</div>
              </Link>
              <div className="formaction__actions-save" onClick={handleSave}>
                Save
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export default FormAction;
