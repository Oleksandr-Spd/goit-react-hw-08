import { nanoid } from "nanoid";

const contactsInitialState = {
  items: [],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "items/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "items/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = (data) => {
  return {
    type: "items/addContact",
    payload: {
      id: nanoid(),
      name: data.name,
      number: data.number,
      category: data.category,
    },
  };
};

export const deleteContact = (contactID) => {
  return {
    type: "items/deleteContact",
    payload: contactID,
  };
};
