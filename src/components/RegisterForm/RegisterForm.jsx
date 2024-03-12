import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Too Long!")
    .required("This is a required field"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)/,
    //   "Password must contain at least one letter and one number"
    // )
    .min(8)
    .required("Required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  console.log(handleSubmit);
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <FontAwesomeIcon icon={faUser} />
          &nbsp; Username &nbsp;&nbsp;&nbsp;
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
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="345678@gmail.com"
            required
          />
          <span></span>
        </label>
        <label className={css.label}>
          <FontAwesomeIcon icon={faKey} />
          &nbsp; Password &nbsp;&nbsp;&nbsp;&nbsp;
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="********"
            autoFocus
            required
          />
          <span></span>
        </label>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
