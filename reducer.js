const initialState = {
  count: 0,
  firstName: "Alimardon",
  lastName: "Badriddinov",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RANDOM":
      return {
        ...state,
        count: action.payload,
      };
  }
};

export default reducer;
