import React, { useEffect, useState } from "react";
import { PiGameControllerFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineHeart, AiOutlineYoutube } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BsMeta } from "react-icons/bs";
import { FcShare } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const SideMenu = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [activeNavLink, setActiveNavLink] = useState(null);

  // Function to handle NavLink click
  const handleNavLinkClick = navLinkId => {
    setActiveNavLink(navLinkId);
  };

  return (
    <>
      <aside
        className="w-auto custom-shadow m-5 text-white h-auto flex flex-col justify-between effects max-md:hidden max-lg:hidden"
        id="first"
      >
        <div>
          <div className="flex text-6xl font-[800] gap-5 py-5 px-6 ">
            <PiGameControllerFill className="" />
            <h1>Play</h1>
          </div>
          <ul className="pl-5 pt-5 font-[800]">
            <NavLink
              to="/"
              onClick={() => handleNavLinkClick("home")}
              className={activeNavLink === "home" ? "active" : ""}
            >
              <li className="flex items-center gap-3 w-[210px] rounded-3xl h-[40px] custom-shadow p-5 mb-5 ">
                <IoHomeOutline /> Home
              </li>
            </NavLink>
            <NavLink
              to="/categories"
              onClick={() => handleNavLinkClick("categories")}
              className={activeNavLink === "categories" ? "active" : ""}
            >
              <li className="flex items-center gap-3 w-[210px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                <TbCategory2 /> Categories
              </li>
            </NavLink>
            <NavLink
              to="/MyLibrary"
              onClick={() => handleNavLinkClick("MyLibrary")}
              className={activeNavLink === "MyLibrary" ? "active" : ""}
            >
              <li className="flex items-center gap-3 w-[210px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                <AiOutlineHeart /> My Library
              </li>
            </NavLink>
            <NavLink
              to="/add-to-cart"
              onClick={() => handleNavLinkClick("add-to-cart")}
              className={activeNavLink === "add-to-cart" ? "active" : ""}
            >
              <li className="flex items-center gap-3 w-[210px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                <BsBagCheck /> My Bag
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex text-3xl gap-3 mb-5 justify-center cursor-pointer">
          <BsMeta />
          <FaXTwitter />
          <AiOutlineYoutube />
          <FcShare />
        </div>
      </aside>

      <aside
        className="  w-[110px] custom-shadow m-5 text-white effects  max-sm:fixed max-sm:z-50 max-sm:bg-[#080b0c] max-sm:top-2 max-sm:visible max-sm:h-auto"
        id="second"
        hidden
      >
        <div className="flex flex-col  justify-between h-full">
          <div className="flex flex-col  justify-between">
            <div className="flex text-6xl font-[800] gap-5 py-5 px-6 ">
              <PiGameControllerFill className="" />
            </div>
            <ul className="pl-5 pt-5">
              <NavLink to="/">
                <li className="flex items-center gap-3  w-[65px] rounded-3xl h-[40px] custom-shadow p-5 mb-5 ">
                  <IoHomeOutline />
                </li>
              </NavLink>
              <NavLink to="/categories">
                <li className="flex items-center gap-3   w-[65px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                  <TbCategory2 />
                </li>
              </NavLink>
              <NavLink to="/MyLibrary">
                <li className="flex items-center gap-3   w-[65px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                  <AiOutlineHeart />
                </li>
              </NavLink>
              <NavLink to="/add-to-cart">
                <li className="flex items-center gap-3   w-[65px] rounded-3xl h-[40px] custom-shadow p-5 mb-5">
                  <BsBagCheck />
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col text-3xl gap-3 mb-5  items-center  cursor-pointer ">
            <BsMeta />
            <FaXTwitter />
            <AiOutlineYoutube />
            <FcShare />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
