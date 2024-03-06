import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { NoContactsMessage } from "./components/NoContactMessage/NoContactMessage";
import { getContacts } from "./redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { SwitcherFilter } from "./components/SwitcherFilter/SwitcherFilter";

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>
        Contacts <FontAwesomeIcon icon={faAddressBook} />
      </h2>
      <SwitcherFilter />
      {contacts.length === 0 ? <NoContactsMessage /> : <ContactList />}

      <Toaster />
    </div>
  );
};

export default App;

// useEffect(() => {
//   const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
//   setContacts(savedContacts);
// }, []);

// useEffect(() => {
//   localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);
