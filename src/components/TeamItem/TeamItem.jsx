import css from "./TeamItem.module.css";

export const TeamItem = ({ img, name, title }) => {
  return (
    <div className={css.teamItem}>
      <img srcSet={img} src={img} alt="Photo" width="260px" height="260px" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};
