const initialstate = {
  data: [],
  error: {},
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        data: action.payload,
      };
    case "errors":
      return {
        ...state,
        error: action.payload,
      };
    case "delete":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
