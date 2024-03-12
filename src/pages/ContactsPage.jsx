import { useDispatch, useSelector } from "react-redux";
import { selectState, selectVisibleContacts } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "../components/Loader/Loader";
import { SwitcherFilter } from "../components/SwitcherFilter/SwitcherFilter";
import { NoContactsMessage } from "../components/NoContactMessage/NoContactMessage";
import { ContactList } from "../components/ContactList/ContactList";
import { Error } from "../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const { loading, error } = useSelector(selectState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div style={{ marginTop: "110px" }}>
      {error && <Error />}
      {!error && (
        <>
          <h1>Phonebook</h1>
          <ContactForm />
          <Filter />
          <h2>
            Contacts <FontAwesomeIcon icon={faAddressBook} />
          </h2>
          {loading && <Loader />}
          <SwitcherFilter />

          {contacts.length === 0 && <NoContactsMessage />}

          {contacts.length > 0 && <ContactList />}
        </>
      )}
    </div>
  );
}
