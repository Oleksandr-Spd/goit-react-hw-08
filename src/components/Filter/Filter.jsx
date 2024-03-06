import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filtersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);

  const onFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };
  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filters.name}
        onChange={onFilterChange}
        required
      />
    </label>
  );
};
