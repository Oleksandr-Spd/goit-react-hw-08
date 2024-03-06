import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { categoryReducer } from "./categorySlice";
// import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  category: categoryReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// export const state = configureStore({
//   contacts: contactsReducer,
//   filter: filtersReducer,
//   category: categoryReducer,
// });
