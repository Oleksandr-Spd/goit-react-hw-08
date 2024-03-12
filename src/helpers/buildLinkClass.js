import clsx from "clsx";
import "../index.css";

export const buildLinkClass = ({ isActive }) => {
  return clsx({ active: isActive });
};
