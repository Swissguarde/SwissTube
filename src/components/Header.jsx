import {
  AiFillBell,
  AiOutlineBars,
  AiOutlineVideoCamera,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../features/navSlice";
import SearchBox from "./SearchBox";

const Header = () => {
  const { image } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  return (
    <>
      <div className="sticky top-0 z-50 flex h-14 w-full items-center justify-between bg-[#212121] p-5 text-white">
        <div className="flex h-8 w-8 items-center gap-4">
          <button
            className="hidden sm:block"
            onClick={() => dispatch(toggleNav())}
          >
            <AiOutlineBars />
          </button>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="mr-4 object-cover" />
            <div className="hidden text-2xl font-medium sm:block">
              SwissTube
            </div>
          </Link>
        </div>
        <SearchBox />
        <div className="flex items-center gap-2 sm:gap-4">
          <AiOutlineVideoCamera className="hidden sm:block" />
          <AiFillBell />
          <Link to="/profile" className="hidden sm:block">
            {image !== "" ? (
              <img
                src={image}
                alt="pfp"
                className="h-8 w-8 rounded-[50%] object-cover"
              />
            ) : (
              "Profile"
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
