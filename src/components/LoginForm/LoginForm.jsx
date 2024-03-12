import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const contactSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(8).required("Required"),
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};
