import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filter.name;

export const selectCategory = (state) => state.category.category;

export const selectState = (state) => state.contacts;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectCategory],
  (contacts, searchValue, categoryFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (categoryFilter === statusFilters.all ||
          contact.category === categoryFilter)
    );
  }
);
console.log(selectVisibleContacts);
