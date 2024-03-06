import toast from "react-hot-toast";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { faTrashCan, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error(`${contact.name} has been deleted from your contacts`);
  };

  return (
    <li className={css.contactItems}>
      <p>
        <FontAwesomeIcon icon={faUser} /> &nbsp;{contact.name}: {contact.number}
      </p>
      <p className={css.category}>
        <FontAwesomeIcon icon={faLayerGroup} />
        &nbsp;{contact.category}
      </p>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
};
