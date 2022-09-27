import React from "react";
import { GoHome } from "react-icons/go";
import { RiCompassLine } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineHistory, AiOutlineLike } from "react-icons/ai";
import { CgShortcut } from "react-icons/cg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAllNav } from "../features/navSlice";
const Sidebar = () => {
  const { isOpen } = useSelector(selectAllNav);
  const menus = [
    { label: "Home", icon: GoHome },
    { label: "Explore", icon: RiCompassLine },
    { label: "Subscriptions", icon: MdOutlineLibraryBooks },
    { label: "Shorts", icon: CgShortcut, margin: true },
    { label: "History", icon: AiOutlineHistory },
    { label: "Liked Videos", icon: AiOutlineLike },
    { label: "Watch Later", icon: BsClock },
    { label: "Settings", icon: FiSettings },
  ];
  return (
    <>
      <div
        className={`${
          isOpen ? "w-64 " : " w-14"
        } fixed left-[-270px] h-full bg-[#212121] px-5 py-7 text-white transition-all duration-300 ease-in sm:left-0`}
      >
        <div className="top-section relative">
          <div className="flex flex-col ">
            {menus.map((menu, i) => (
              <Link
                to="/"
                className={`${
                  menu.margin === true &&
                  "w-full border-b-2 border-b-[#494949] pb-3"
                } mb-6 flex items-center gap-3 p-1 hover:bg-white/30`}
                key={i}
              >
                <div className="text-[10px]">
                  {React.createElement(menu.icon, { size: "20" })}
                </div>
                {isOpen && menu.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-between gap-4 bg-[#212121] p-4 text-white sm:hidden">
        <Link to="/" className="flex flex-col items-center">
          <GoHome size={23} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <RiCompassLine size={23} />
          <span className="text-xs">Explore</span>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <MdOutlineLibraryBooks size={23} />
          <span className="text-xs">Subscriptions</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <MdOutlineLibraryBooks size={23} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </>
  );
};
export default Sidebar;

// -left-0
// -left-[300px]
// sm:left-0
