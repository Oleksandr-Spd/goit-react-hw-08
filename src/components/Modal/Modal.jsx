import Modal from "react-modal";
import css from "./Modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/contactsSlice";
import { selectCurrentContact, selectModal } from "../../redux/selectors";
import { NumberCard } from "../NumberCard/NumberCard";
import toast from "react-hot-toast";
import { deleteContact } from "../../redux/operations";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const contact = useSelector(selectCurrentContact);
  console.log(contact);

  const closeModalWindow = () => {
    dispatch(closeModal(modal));
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error(`${contact.name} has been deleted from your contacts`);
    dispatch(closeModal(modal));
  };

  return (
    <Modal
      isOpen={modal}
      onRequestClose={closeModalWindow}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modal}>
        <h2> Do you realy want to delete this contact? </h2>
        <NumberCard contact={contact} onClick={handleDelete} />
      </div>
    </Modal>
  );
};
