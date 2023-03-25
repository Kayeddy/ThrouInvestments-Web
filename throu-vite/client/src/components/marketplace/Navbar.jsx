import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlinePlus as PlusIcon } from "react-icons/ai";

import { CustomButton, Overlay } from "../marketplace";
import {
  search,
  User_add_icon,
  User_profile_icon,
  User_notifications_icon,
  Throu_sm_dark,
  Twitter_mobile,
  Facebook_mobile,
  Instagram_mobile,
  Discord_mobile,
  Theme_light_icon,
  Theme_dark_icon,
  Instagram_icon_light,
  Twitter_icon_light,
  Facebook_icon_light,
  Discord_icon_light,
  Logout,
  Logout_icon_dark,
} from "../../assets";
import { MdLogout } from "react-icons/md";
import { mobileDrawerlinks } from "../../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const address = "";
  const genericHamburgerLine =
    "h-1 w-[33px] my-1 rounded-full bg-white transition ease transform duration-300";

  const handleInvestButton = () => {};

  const navigationBarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      navigationBarRef.current &&
      !navigationBarRef.current.contains(event.target)
    ) {
      setToggleDrawer(false);
    }
  };

  const handleScroll = () => {
    setToggleDrawer(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Icon = ({ imgUrl, handleClick }) => (
    <div
      className={`w-[15px] h-[15px] rounded-[10px] flex justify-center items-center cursor-pointer`}
      onClick={() => handleClick()}
    >
      <img
        src={imgUrl}
        alt="Profile_interaction_icon"
        className={`w-[20px] h-[20px]`}
      />
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mt-[6px] gap-6 md:items-center dark:bg-[#01070E80] bg-[#F7FAFF80] backdrop-blur-xl md:w-[90%] w-full md:px-2 md:rounded-md">
      <div className="hidden md:flex flex-row lg:flex-1 max-w-[458px] py-2 pl-4 pr-2 h-fit bg-transparent border-b-[1px] mb-[10px] border-[#B5B5B5] items-center">
        <input
          type="text"
          placeholder="Buscar proyectos"
          className="flex w-full font-epilogue font-normal text-[16px] placeholder:text-[#B5B5B5] placeholder:text-[16px] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] text-[#4b5264] bg-transparent flex justify-end items-center cursor-pointer ml-2">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div className="md:flex hidden flex-row justify-end gap-12 dark:text-white text-[#062147] w-fit">
        <div className="flex flex-row gap-2 items-center justify-center">
          <Icon imgUrl={User_add_icon} />
          <p className="font-bold text-[15px] ">342.90 USD</p>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <Icon imgUrl={User_profile_icon} />
          <Icon imgUrl={User_notifications_icon} />
        </div>
      </div>

      {/* Small screens navigation */}

      <nav
        className={`w-full h-[90px] flex flex-row justify-between items-center py-[10px] ${
          toggleDrawer ? "bg-[#062147] bg-opacity-80" : "bg-transparent"
        }  backdrop-blur-[100px] 
             transition-all ease-in-out delay-50 md:hidden relative z-90`}
        ref={navigationBarRef}
      >
        <Link to="/">
          <div className="w-[80px] h-[80px] rounded-[10px] bg-transparent flex justify-center items-center cursor-pointer">
            <img
              src={Throu_sm_dark}
              alt="Small Throu icon"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>

        <button
          type="button"
          className="text-[30px] text-[#06214] mr-[5%] object-contain cursor-pointer z-10"
          onClick={() => {
            setToggleDrawer((prev) => !prev);
          }}
        >
          <div
            className={`${genericHamburgerLine} ${
              toggleDrawer && "rotate-45 translate-y-2 translate-x-1"
            }`}
          />

          <div
            className={`ml-[12px] ${genericHamburgerLine} ${
              toggleDrawer
                ? "-rotate-45 -translate-y-0 -translate-x-2"
                : "group-hover:opacity-100"
            }`}
          />
        </button>

        {toggleDrawer && (
          <motion.div
            className={`absolute top-[90px] right-0  py-4 w-full h-fit transition-all duration-200 bg-[#062147] bg-opacity-90 backdrop-blur-[100px]`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.01 }}
          >
            <div className="flex flex-row justify-center items-center w-[90%]  h-[52px] bg-transparent border-b-[1.5px] rounded-sm border-white mx-auto mt-4">
              <input
                type="text"
                placeholder="Buscar proyectos"
                className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-white text-white bg-transparent outline-none"
              />
              <div className="w-[72px] h-full rounded-[20px] text-white bg-transparent flex justify-end items-center cursor-pointer ml-2">
                <img
                  src={search}
                  alt="search"
                  className="w-[15px] h-[15px] object-contain"
                />
              </div>
            </div>

            <ul className="mb-4 flex flex-col items-start justify-center py-4 px-6 h-fit w-full gap-[50px] text-white mt-[10%]  bg-transparent ">
              <li className="flex flex-row items-center justify-start gap-2">
                <span className="text-[13px] text-white border-[1px] border-white flex items-center justify-center">
                  <PlusIcon />
                </span>
                <p className="text-white text-[23px] font-bold">$342.90 USD</p>
              </li>
              <li className="flex flex-row gap-2 items-center justify-between w-full">
                <div className="flex flex-row items-center justify-start gap-2">
                  <span>
                    <Icon imgUrl={Theme_dark_icon} />
                  </span>
                  <p className="text-[1.25em] leading-[1em]"> Modo oscuro</p>
                </div>
                <div className="flex items-center justify-center">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      checked
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#18A5FF]"></div>
                  </label>
                </div>
              </li>
              {mobileDrawerlinks.map((item) => (
                <li
                  key={item.name}
                  className="text-normal text-[1.25em] leading-[1em] flex flex-row gap-2 items-center justify-start w-full"
                >
                  <span className="flex items-center justify-center">
                    <img src={item.imgUrl} alt="item icon" />
                  </span>
                  {item.name}
                </li>
              ))}
              <li className="flex justify-center items-center w-full gap-2">
                <span>
                  <img src={Logout_icon_dark} alt="" />
                </span>
                <a
                  href=""
                  className="font-semibold text-[1.2em] text-[#18A5FF] hover:underline capitalize"
                >
                  Cerrar sesión
                </a>
              </li>

              <div className="flex flex-col items-center justify-center w-full h-fit px-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <a href="">
                    <img
                      src={Instagram_icon_light}
                      alt="Instagram account icon"
                      className="h-[20px] w-[20px] moonIcon"
                    />
                  </a>
                  <a href="">
                    <img
                      src={Twitter_icon_light}
                      alt="Twitter account icon"
                      className="h-[20px] w-[20px]"
                    />
                  </a>

                  <a href="">
                    <img
                      src={Facebook_icon_light}
                      alt="Facebook account icon"
                      className="h-[20px] w-[13px]"
                    />
                  </a>

                  <a href="">
                    <img
                      src={Discord_icon_light}
                      alt="Facebook account icon"
                      className="h-[20px] w-[20px]"
                    />
                  </a>
                </div>
              </div>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
