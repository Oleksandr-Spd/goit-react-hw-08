import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { currentContact, openModal } from "../../redux/contactsSlice";
import { NumberCard } from "../NumberCard/NumberCard";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const openModalWindow = () => {
    dispatch(openModal(contact.id));
    dispatch(currentContact(contact));
  };

  return (
    <li className={css.contactItem}>
      <NumberCard contact={contact} onClick={openModalWindow} />
    </li>
  );
};
