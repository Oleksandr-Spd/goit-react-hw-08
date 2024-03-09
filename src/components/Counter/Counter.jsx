import { useSelector } from "react-redux";
import {
  selectCategory,
  selectContacts,
  selectVisibleContacts,
} from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import css from "./Counter.module.css";

export const Counter = () => {
  const category = useSelector(selectCategory);
  const contacts = useSelector(selectContacts);
  const visible = useSelector(selectVisibleContacts);
  return (
    <div className={css.counterBox}>
      {category === statusFilters.all ? (
        <span>Total contacts: {contacts.length}</span>
      ) : (
        <span>
          You found {visible.length} from {contacts.length}
        </span>
      )}
    </div>
  );
};
