import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

//*********************************************1 */****************** */

// const filtersInitialState = {
//   name: "",
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/filter":
//       return {
//         ...state,
//         name: action.payload.name,
//       };

//     default:
//       return state;
//   }
// };

// export const setFilter = (name) => {
//   return {
//     type: "filters/filter",
//     payload: {
//       name: name,
//     },
//   };
// };
