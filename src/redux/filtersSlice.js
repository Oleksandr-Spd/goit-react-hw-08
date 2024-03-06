const filtersInitialState = {
  name: "",
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/filter":
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export const setFilter = (name) => {
  return {
    type: "filters/filter",
    payload: {
      name: name,
    },
  };
};
