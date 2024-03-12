import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAddressBook, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import { buildLinkClass } from "../../helpers/buildLinkClass";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={buildLinkClass}>
            Home <FontAwesomeIcon icon={faHouse} />
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.navItem}>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts <FontAwesomeIcon icon={faAddressBook} />
            </NavLink>
          </li>
        )}
      </ul>
      ;
    </nav>
  );
};
