import React, { useState, useEffect } from "react";
// import Header from "./common/Header";
// const form = [
//   { questions: "sample question 1", type: "checkboxes", id: 1234 },
//   { questions: "sample question 2", type: "radio", id: 1235 }
// ];
function ViewForm(props) {
  const { id } = props.match.params;
  const { getFormById, form, submitForm } = props;
  const [state, setState] = useState({
    answers: []
  });

  useEffect(() => {
    getFormById(id);
  }, []);
  const handleChange = (event, index) => {
    const updatedArray = [...state.answers];
    updatedArray[index] = event.target.value;
    setState({ answers: updatedArray });
  };
  const handleCheckbox = (event, index) => {
    const updatedArray = [...state.answers];
    if (updatedArray[index] !== undefined) {
      let temp = updatedArray[index].split(",");
      if (temp.includes(event.target.value)) {
        updatedArray[index] = temp
          .filter(i => i !== event.target.value)
          .join(",");
      } else {
        updatedArray[index] = [...temp, event.target.value].join(",");
      }
    } else {
      updatedArray[index] = event.target.value;
    }

    setState({ answers: updatedArray });
  };
  const onSubmit = () => {
    let values = form.questions.map((i, index) => {
      return { [i.question]: state.answers[index] };
    });
    submitForm(id, values);
    console.log(values);
  };

  return (
    <>
      {/* <Header /> */}
      <section className="viewform">
        <div className="viewform__container">
          <h1 className="viewform__container-title">{form.name}</h1>

          {!form
            ? ""
            : !form.questions
            ? ""
            : form.questions.map((i, index) => {
                return (
                  <>
                    <div className="viewform__container-label" key={i.id}>
                      {i.questions}
                    </div>
                    {i.type === "radio" ? (
                      <>
                        <div className="viewform__questions">{i.question}</div>
                        <input
                          type="radio"
                          id="Yes"
                          name={i.question}
                          value="Yes"
                          className="mr-3"
                          onChange={e => handleChange(e, index)}
                        />
                        <label htmlFor="Yes">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="No"
                          name={i.question}
                          className="mr-3"
                          value="No"
                          onChange={e => handleChange(e, index)}
                        />
                        <label htmlFor="No">No</label>
                        <br />
                      </>
                    ) : i.type === "checkboxes" ? (
                      <>
                        <div className="viewform__questions">{i.question}</div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input mr-3"
                            id="exampleCheck1"
                            value="Choice 1"
                            onChange={e => handleCheckbox(e, index)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Choice 1
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input mr-3"
                            id="exampleCheck2"
                            value="Choice 2"
                            onChange={e => handleCheckbox(e, index)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck2"
                          >
                            Choice 2
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input mr-3"
                            id="exampleCheck3"
                            value="Choice 3"
                            onChange={e => handleCheckbox(e, index)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck3"
                          >
                            Choice 3
                          </label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="viewform__questions">{i.question}</div>
                        <input
                          type={i.type}
                          className="viewform__container-input"
                          name={i.question}
                          onChange={e => handleChange(e, index)}
                        />
                      </>
                    )}
                  </>
                );
              })}

          <div className="viewform__container-actions">
            <div
              className="viewform__container-actions-save"
              onClick={onSubmit}
            >
              SUBMIT
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewForm;
