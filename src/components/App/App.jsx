import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { ContactForm } from "../ContactForm/ContactForm";
import { NoContactsMessage } from "../NoContactMessage/NoContactMessage";
import { getContacts, getState } from "../../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { SwitcherFilter } from "../SwitcherFilter/SwitcherFilter";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import { fetchContacts } from "../../redux/operations";
import css from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { loading, error } = useSelector(getState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error && <Error />}
      {!error && (
        <div className={css.box}>
          <h1>Phonebook</h1>
          <ContactForm />
          <Filter />
          <h2>
            Contacts <FontAwesomeIcon icon={faAddressBook} />
          </h2>
          {loading && <Loader />}
          <SwitcherFilter />
          {contacts.length === 0 && !Loader ? (
            <NoContactsMessage />
          ) : (
            <ContactList />
          )}
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default App;
