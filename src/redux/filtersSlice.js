import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
    number: ",",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
