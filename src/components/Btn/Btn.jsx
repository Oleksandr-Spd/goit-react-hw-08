import clsx from "clsx";
import css from "./Btn.module.css";

export const Btn = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  console.log(selected);
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
