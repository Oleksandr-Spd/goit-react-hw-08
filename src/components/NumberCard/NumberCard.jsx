import { faTrashCan, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import css from "./NumberCard.module.css";

export const NumberCard = ({ contact, onClick }) => {
  return (
    <div className={css.contactBox}>
      <p>
        <FontAwesomeIcon icon={faUser} /> &nbsp;{contact.name}: {contact.number}
      </p>
      <p className={css.category}>
        <FontAwesomeIcon icon={faLayerGroup} />
        &nbsp;{contact.category}
      </p>

      <button className={css.deleteBtn} type="button" onClick={onClick}>
        Delete <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};
