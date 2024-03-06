import ReactInputMask from "react-input-mask";
import css from "./NumberInput.module.css";

const NumberInput = () => {
  return (
    <ReactInputMask
      type="tel"
      mask="999-99-99"
      placeholder="123-45-89"
      required
      className={css.input}
    />
  );
};
export default NumberInput;
