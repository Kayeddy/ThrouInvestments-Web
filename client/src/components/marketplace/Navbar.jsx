import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlinePlus as PlusIcon } from "react-icons/ai";
import { mdiAccount } from "@mdi/js";
import { ReactSVG } from "react-svg";

import useStore from "../../context";

import { CustomButton, Overlay, DropdownInput } from "../marketplace";
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
  Throu_sm,
  ProfileIcon,
} from "../../assets";
import { MdLogout } from "react-icons/md";
import { mobileDrawerlinks } from "../../constants";
import { handleThemeChange } from "../../utils";

const Navbar = ({ handleWalletModal }) => {
  const navigate = useNavigate();
  const state = useStore();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [navBlur, setNavBlur] = useState(true);

  const handleNavBlur = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setNavBlur(true) : setNavBlur(false);
    });
  };

  const changeTheme = handleThemeChange();
  const address = "";
  const genericHamburgerLine =
    "h-1 w-[33px] my-1 rounded-full dark:bg-white bg-[#062147] transition ease transform duration-300";

  const handleInvestButton = () => {};
  const handleTabChange = () => {};
  const handleLogout = () => {
    navigate("/");
    state.addUser(null);
  };

  const NavigationOptions = {
    proyectos: [
      <p onClick={() => navigate("/Marketplace")}>Proyectos</p>,
      "Opcion#1",
      "Opcion#2",
      "Opcion#3",
    ],
    nostros: ["Nosotros", "Opcion#1", "Opcion#2", "Opcion#3"],
    aprende: ["Aprende", "Opcion#1", "Opcion#2", "Opcion#3"],
    profile: [
      <div className="flex flex-row gap-2" onClick={() => navigate("/perfil")}>
        <span className="material-symbols-outlined text-[#062147]">person</span>
        <p>Perfil</p>
      </div>,
      <div className="flex flex-row gap-2">
        <span className="material-symbols-outlined text-[#062147]">
          Bookmark
        </span>
        <p>Guardados</p>
      </div>,
      <div className="flex flex-row gap-2">
        <span
          className="material-symbols-outlined text-[#062147]"
          handleClick={() => {
            changeTheme.toggleTheme("dark");
          }}
        >
          dark_mode
        </span>
        <p>Tema</p>
      </div>,
      <div className="flex flex-row gap-2" onClick={handleLogout}>
        <span className="material-symbols-outlined text-[#AA1010]">logout</span>
        <p className="text-[#AA1010]">Cerrar sesion</p>
      </div>,
    ],
    notifications: state.notifications
      ? state.notifications.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start w-full h-fit p-2 gap-2 border-b-2"
            onClick={() => navigate("/user_verification")}
          >
            <p className="font-sen font-semibold text-md">{item.title}</p>
            <p className="font-jakarta font-normal text-sm">{item.message}</p>
          </div>
        ))
      : [],
  };

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

  useEffect(() => {
    setNavBlur(false);
    handleNavBlur();
    window.removeEventListener("click", handleOutsideClick);
    window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row justify-between gap-6 items-center dark:bg-[#01070E80] bg-[#F7FAFF80] backdrop-blur-xl w-full z-100 font-sen">
      <div
        className={`hidden flex-row items-center justify-between md:flex md:px-8 lg:px-8 lg:pr-[50px]  w-full gap-8 max-w-[1600px] mx-auto transition-all ease-in-out duration-200 ${
          !navBlur ? "h-[90px]" : "h-[60px]"
        }`}
      >
        <div
          className="w-[72px] h-full rounded-[20px] text-[#4b5264] bg-transparent flex justify-end items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Throu_sm} alt="search" className="w-[50px] h-[50px]" />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full flex flex-row justify-start gap-12 items-center">
            <DropdownInput
              options={NavigationOptions.proyectos}
              switchTab={handleTabChange}
              style="hover:underline hover:text-[#18A5FF]"
            />

            <DropdownInput
              options={NavigationOptions.nostros}
              switchTab={handleTabChange}
              style="hover:underline hover:text-[#18A5FF]"
            />

            <DropdownInput
              options={NavigationOptions.aprende}
              switchTab={handleTabChange}
              style="hover:underline hover:text-[#18A5FF]"
            />

            <span className="material-symbols-outlined text-[#062147] cursor-pointer">
              search
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {state.walletAddress ? (
            <div className="flex flex-row gap-2 text-[#062147] dark:text-white mr-4">
              <span class="material-symbols-outlined translate-y-0.5">
                account_balance_wallet
              </span>
              <p className="font-sen font-bold text-[18px]"> $342.90 USD </p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-2 text-white bg-[#062147] dark:text-white mr-4 py-2 px-2 cursor-pointer hover:bg-[#18A5FF]"
              onClick={() => handleWalletModal(true)}
            >
              <span class="material-symbols-outlined translate-y-0.5">
                account_balance_wallet
              </span>
              <p className="font-sen text-[18px]"> Conectar wallet </p>
            </div>
          )}

          <DropdownInput
            options={NavigationOptions.profile}
            switchTab={handleTabChange}
            optionalTitle={
              <span className="material-symbols-outlined text-[#062147]">
                person
              </span>
            }
          />

          <div className="w-fit h-fit relative">
            <DropdownInput
              options={NavigationOptions.notifications}
              switchTab={handleTabChange}
              optionalTitle={
                <span className="material-symbols-outlined text-[#062147]">
                  Notifications
                </span>
              }
            />
            <span class="absolute top-[-2px] right-[-5px] h-4 w-4 flex items-center justify-center rounded-[50%] bg-[#18A5FF] text-white text-jakarta text-xs">
              {state.notifications.length}
            </span>
          </div>
        </div>
      </div>

      {/* Small screens navigation */}

      <nav
        className={`w-full h-[90px] flex flex-row justify-between items-center py-[10px] ${
          toggleDrawer ? " bg-opacity-80" : "bg-transparent"
        }  backdrop-blur-[100px] 
             transition-all ease-in-out delay-50 md:hidden relative z-100`}
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
            className={`absolute top-[90px] right-0 z-100 py-4 w-full h-fit transition-all duration-200 bg-[#062147] bg-opacity-90 backdrop-blur-[100px]`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.01 }}
          >
            <div className="flex flex-row justify-center items-center w-[90%] h-[52px] bg-transparent border-b-[1.5px] rounded-sm border-white mx-auto mt-4">
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

            <ul className="mb-4 flex flex-col items-start justify-center py-4 px-6 h-fit w-full gap-[50px] text-white mt-[10%] z-100 bg-transparent ">
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
