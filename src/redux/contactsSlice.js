import { createSlice } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    c: false,
    selectedContact: {},
  },
  reducers: {
    openModal: {
      reducer(state) {
        state.isModal = true;
      },
    },
    closeModal: {
      reducer(state) {
        state.isModal = false;
        state.selectedContact = {};
      },
    },
    currentContact: {
      reducer(state, action) {
        state.selectedContact = action.payload;
        console.log(currentContact);
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { openModal, closeModal, currentContact } = contactsSlice.actions;
