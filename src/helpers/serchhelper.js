// import Fuse from "fuse.js";
// import { selectFilterName, selectFilterNumber } from "../redux/selectors";
// const dispatch = useDispatch();
// const onFilterChange = (e) => {
//   const options = {
//     keys: [selectFilterName, selectFilterNumber],
//     threshold: 0.3,
//   };
//   const fuse = new Fuse(data, options);
//   const results = fuse.search(data);
//   dispatch(changeFilter(results));
// };

//  const options = {
//    keys: [
//      { name: "name", weight: 0.7 },
//      { name: "number", weight: 0.3 },
//    ],
//    threshold: 0.3,
//  };
//  const value = e.target.value;
//  const fuse = new Fuse(selectState, options);
//  const results = fuse.search(value);
