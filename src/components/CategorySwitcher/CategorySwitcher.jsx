import { Field } from "formik";
import css from "./CategorySwitcher.module.css";

export const CategorySwitcher = () => {
  return (
    <Field className={css.switcher} as="select" name="category" required>
      <option disabled hidden value="">
        Select category
      </option>
      <option value="Family">Family</option>
      <option value="Friends">Friends</option>
      <option value="Job">Job</option>
      <option value="Other">Other</option>
    </Field>
  );
};
