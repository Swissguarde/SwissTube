import {
  AiFillBell,
  AiOutlineBars,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { toggleNav } from "../features/navSlice";
const Header = () => {
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
            <div className="hidden text-2xl font-medium sm:block">Youtube</div>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" h-7 w-[200px] border border-[#494949] bg-[#181818] p-4 outline-none sm:ml-0 sm:w-[400px] sm:p-5 lg:w-[600px]"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <AiOutlineVideoCamera className="hidden sm:block" />
          <AiFillBell className="hidden sm:block" />
          <BsPersonSquare className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default Header;
