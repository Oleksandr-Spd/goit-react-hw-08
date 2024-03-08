import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { categoryReducer } from "./categorySlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    category: categoryReducer,
  },
});
