import {
  faHouseCircleCheck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { buildLinkClass } from "../../helpers/buildLinkClass";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/register" className={buildLinkClass}>
            Register <FontAwesomeIcon icon={faUserPlus} />
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/login" className={buildLinkClass}>
            Login <FontAwesomeIcon icon={faHouseCircleCheck} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
