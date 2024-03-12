import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const onFilterChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <label>
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
