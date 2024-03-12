import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.userMenu}>
      <p className={css.invitation}>
        Welcome, {user.name}: {user.email}
      </p>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out <FontAwesomeIcon icon={faDoorOpen} />
      </button>
    </div>
  );
};
