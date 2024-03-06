import { statusFilters } from "./constants";

const categoryInitialState = {
  category: statusFilters.all,
};

export const categoryReducer = (state = categoryInitialState, action) => {
  switch (action.type) {
    case "category/toggleCategory":
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export const toggleCategory = (category) => {
  return {
    type: "category/toggleCategory",
    payload: category,
  };
};
