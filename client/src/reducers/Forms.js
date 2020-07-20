const initialState = {
  forms: [],
  submissions: {},
  form: {},
  submission: {},
  loading: false,
  error: false,
  msg: ""
};

export const Forms = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM":
      return { ...state, forms: action.payload };
    case "SET_SINGLE":
      return { ...state, form: action.payload };
    case "SET_SUBMISSIONS":
      return { ...state, submissions: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload.error, msg: action.payload.msg };
    default:
      return state;
  }
};
