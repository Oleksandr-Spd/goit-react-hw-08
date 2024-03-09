import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectContacts } from "../../redux/selectors";
// import NumberInput from "../NumberInput/NumberInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLayerGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { CategorySwitcher } from "../CategorySwitcher/CategorySwitcher";
import { addContact } from "../../redux/operations";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Too Long!")
    .required("This is a required field"),
  number: Yup.string().required("Required"),
  category: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Category must contain only letters")
    .min(3)
    .required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const existingContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.number === values.number
    );

    if (existingContact) {
      toast(`${values.name} is already in the contacts.`);
      return;
    }
    toast.success(
      `${values.name} has been successfully added to the contact book.`
    );

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "", category: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <FontAwesomeIcon icon={faUser} />
          &nbsp; Name &nbsp;&nbsp;&nbsp;&nbsp;
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            autoFocus
            pattern="^[A-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <span></span>
        </label>
        <label className={css.label}>
          <FontAwesomeIcon icon={faPhone} /> &nbsp;Number&nbsp;&nbsp;
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="123-45-89"
            required
          />
          {/* <Field className={css.input} as={NumberInput} name="number" /> */}
          <span></span>
        </label>
        <label className={css.label}>
          <FontAwesomeIcon icon={faLayerGroup} />
          &nbsp; Category
          <CategorySwitcher />
          <span></span>
        </label>
        <button className={css.btn} type="submit">
          Add contacts <FontAwesomeIcon icon={faAddressCard} />
        </button>
      </Form>
    </Formik>
  );
};
