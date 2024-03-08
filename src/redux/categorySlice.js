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


