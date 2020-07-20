import config from "./API/services";
import history from "../store/history";
export const setForms = data => ({
  type: "SET_FORM",
  payload: data
});
export const setSingle = data => ({
  type: "SET_SINGLE",
  payload: data
});
export const setSubmissions = data => ({
  type: "SET_SUBMISSIONS",
  payload: data
});
export const setError = msg => ({
  type: "SET_ERROR",
  payload: {
    error: true,
    msg
  }
});

export const getForms = () => {
  console.log("Called");
  return async dispatch => {
    console.log("called");
    return await fetch(config.form)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          dispatch(setForms(data.data));
        } else {
          dispatch(setError(data.message));
        }
      })
      .catch(err => dispatch(setError(err)));
  };
};
export const getFormById = id => {
  return async dispatch => {
    return await fetch(`${config.form}/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          dispatch(setSingle(data.data));
        } else {
          dispatch(setError(data.message));
        }
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const createForm = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({});

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return async dispatch => {
    return await fetch(config.form, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          console.log(data.data._id);
          dispatch(setSingle(data.data));
          history.push(`/form/actions/${data.data._id}`);
          console.log(data);
        } else {
          console.log(data);
        }
      })
      .catch(err => console.log(err));
  };
};
export const deleteForm = id => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ id });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return async dispatch => {
    return fetch(config.form, requestOptions)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
          history.push(`/`);
        } else {
          dispatch(setError(data.message));
          alert(data.message);
        }
      })
      .catch(err => alert("Something Went Wrong Please try again"));
  };
};

export const updateForm = data => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return async dispatch => {
    return await fetch(config.form, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert(data.message);
          history.push("/");
        } else {
          alert(data.message);
        }
      })
      .catch(err => alert("Something went wrong please try"));
  };
};

export const getSubmissions = id => {
  return async dispatch => {
    return await fetch(`${config.submission}/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, "from submission");
        if (data.success) {
          dispatch(setSubmissions(data.data));
        } else {
          dispatch(setError(data.message));
        }
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const deleteSubmission = id => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ sub_id: id });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return async dispatch => {
    return await fetch(config.submission, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert(data.message);
          getSubmissions(id);
        } else {
          dispatch(setError(data.message));
          alert(data.message);
        }
      })
      .catch(err => alert("Something Went Wrong Please try again"));
  };
};

export const submitForm = (form_id, values) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ form_id, values });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return async dispatch => {
    return await fetch(config.submission, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          dispatch(getSubmissions(form_id));
          alert(data.message);
          history.push(`/form/viewform/${form_id}`);
          window.location.reload();
        } else {
          dispatch(setError(data.message));
          alert(data.message);
        }
      })
      .catch(err => alert("Something Went Wrong Please try again"));
  };
};
