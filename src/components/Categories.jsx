import { useDispatch } from "react-redux";
import { selectCategory } from "../features/categorySlice";
import { Link } from "react-router-dom";
const Categories = () => {
  const keywords = [
    "All",
    "React js",
    "Fifa 23",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Man Utd",
    "Premier League",
  ];
  const dispatch = useDispatch();
  return (
    <div className="categoriesBar sticky top-14 z-50 flex h-12 items-center overflow-x-scroll border-b border-[#494949] bg-black sm:h-fit">
      {keywords.map((value, i) => (
        <Link to="/" key={i}>
          <span
            onClick={() => dispatch(selectCategory(value))}
            className="border-[#494949]"
          >
            {value}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
