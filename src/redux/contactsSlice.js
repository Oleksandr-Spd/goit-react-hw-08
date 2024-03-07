import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            name: data.name,
            number: data.number,
            category: data.category,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: "contact",
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// export const contactsReducer = contactsSlice.reducer;

//********************************************2 */************************** */
// const contactsInitialState = {
//   items: [],
// };

// export const addContact = createAction("items/addContact", (data) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//       category: data.category,
//     },
//   };
// });
// export const deleteContact = createAction("items/deleteContact");

// export const contactsReducer = createReducer(
//   contactsInitialState,
//   (builder) => {
//     builder
//       .addCase(addContact, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact, (state, action) => {
//         state.items = state.items.filter(
//           (contact) => contact.id !== action.payload
//         );
//       });
//   }
// );
//******************************* 1 */************************************* */

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case "items/addContact":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case "items/deleteContact":
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export const addContact = (data) => {
//   return {
//     type: "items/addContact",
//     payload: {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//       category: data.category,
//     },
//   };
// };

// export const deleteContact = (contactID) => {
//   return {
//     type: "items/deleteContact",
//     payload: contactID,
//   };
// };
