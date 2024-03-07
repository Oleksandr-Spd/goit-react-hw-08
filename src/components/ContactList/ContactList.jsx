import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import { getContacts, getFilter } from "../../redux/selectors";
import { NoContactsMessage } from "../NoContactMessage/NoContactMessage";
import { statusFilters } from "../../redux/constants";
import { Contact } from "../Contact/Contact";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const serchValue = useSelector(getFilter);
  const categoryFilter = useSelector((state) => state.category.category);

  const getVisibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(serchValue.toLowerCase()) &&
      (categoryFilter === statusFilters.all ||
        contact.category === categoryFilter)
  );

  return (
    <div>
      {getVisibleContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {getVisibleContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <NoContactsMessage />
      )}
    </div>
  );
};
