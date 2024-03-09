import { useSelector } from "react-redux";

import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
