import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideo } from "../features/categorySlice";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchVideo(query));
      navigate(`/search/${query}`);
      setQuery("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" h-7 w-[200px] border border-[#494949] bg-[#181818] p-4 outline-none sm:ml-0 sm:w-[400px] sm:p-5 lg:w-[600px]"
      />
    </div>
  );
};
export default SearchBox;
