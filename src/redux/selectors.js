import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import Fuse from "fuse.js";

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filter.name;

export const selectCategory = (state) => state.category.category;

export const selectState = (state) => state.contacts;

export const selectModal = (state) => state.contacts.isModal;

export const selectCurrentContact = (state) => state.contacts.selectedContact;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectCategory],
  (contacts, searchValue, categoryFilter) => {
    const fuseOptions = {
      keys: ["name", "number"],
      threshold: 0.3,
    };

    const fuse = new Fuse(contacts, fuseOptions);
    const searchResults = fuse.search(searchValue).map((result) => result.item);
    // console.log(searchResults);
    const allContacts = (contact) =>
      categoryFilter === statusFilters.all ||
      contact.category === categoryFilter;

    const filteredContacts = searchResults.filter(allContacts);
    const filteredAll = contacts.filter(allContacts);

    return searchValue.trim() === "" ? filteredAll : filteredContacts;
  }
);
console.log(selectVisibleContacts);

// return contacts.filter(
//   (contact) =>
//     contact.name.toLowerCase().includes(searchValue.toLowerCase()) &&
//     (categoryFilter === statusFilters.all ||
//       contact.category === categoryFilter)
// );
