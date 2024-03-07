import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const categorySlice = createSlice({
  name: "category",
  initialState: { category: statusFilters.all },
  reducers: {
    toggleCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { toggleCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;


//*********************************************1 */****************** */

// const categoryInitialState = {
//   category: statusFilters.all,
// };

// export const categoryReducer = (state = categoryInitialState, action) => {
//   switch (action.type) {
//     case "category/toggleCategory":
//       return {
//         ...state,
//         category: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const toggleCategory = (category) => {
//   return {
//     type: "category/toggleCategory",
//     payload: category,
//   };
// };
