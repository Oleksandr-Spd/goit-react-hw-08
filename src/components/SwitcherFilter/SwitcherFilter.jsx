import { Btn } from "../Btn/Btn";
import css from "./SwictherFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { toggleCategory } from "../../redux/categorySlice";

export const SwitcherFilter = () => {
  const dispatch = useDispatch();
  const category = useSelector(getCategory);

  const handleCategoryFilter = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className={css.boxBtn}>
      <Btn
        selected={category === statusFilters.all}
        onClick={() => handleCategoryFilter(statusFilters.all)}
      >
        All
      </Btn>
      <Btn
        selected={category === statusFilters.family}
        onClick={() => handleCategoryFilter(statusFilters.family)}
      >
        Family
      </Btn>
      <Btn
        selected={category === statusFilters.friends}
        onClick={() => handleCategoryFilter(statusFilters.friends)}
      >
        Friends
      </Btn>
      <Btn
        selected={category === statusFilters.job}
        onClick={() => handleCategoryFilter(statusFilters.job)}
      >
        Job
      </Btn>
      <Btn
        selected={category === statusFilters.other}
        onClick={() => handleCategoryFilter(statusFilters.other)}
      >
        Other
      </Btn>
    </div>
  );
};
