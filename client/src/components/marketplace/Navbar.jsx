import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ConnectKitButton } from "connectkit";

import { BsBookmark as BookmarkIcon } from "react-icons/bs";
import { FaRegBookmark as NavBookmarkIcon } from "react-icons/fa";
import { MdOutlineMenuBook as LearnIcon } from "react-icons/md";
import { BiHelpCircle as HelpIcon } from "react-icons/bi";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

import useUserStore from "../../context/useUserStore";
import useInAppNotificationStore from "../../context/useInAppNotificationStore";
import useNotificationStore from "../../context/useNotificationStore";

import { DropdownInput } from "../marketplace";
import {
  Twitter_mobile,
  Facebook_mobile,
  Instagram_mobile,
  Discord_mobile,
  Throu_sm,
} from "../../assets";
import { MdLogout } from "react-icons/md";

import { handleThemeChange } from "../../utils";
import { useWalletManagementHook } from "../../hooks/UseWalletManagementHook";

const Navbar = ({ handleWalletModal }) => {
  const navigate = useNavigate();
  const { userProfile, removeUser, wallet, updateWallet } = useUserStore();
  useWalletManagementHook();

  const notifications = useNotificationStore((state) => state.notifications);
  const openModal = useInAppNotificationStore((state) => state.openModal);

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [navBlur, setNavBlur] = useState(true);

  const socialMediaLinks = [
    {
      src: Instagram_mobile,
      alt: "Instagram account icon",
      style: "w-[20px] h-[20px]",
    },
    {
      src: Twitter_mobile,
      alt: "Twitter account icon",
      style: "w-[20px] h-[20px]",
    },
    {
      src: Facebook_mobile,
      alt: "Facebook account icon",
      style: "w-[11px] h-[20px]",
    },
    {
      src: Discord_mobile,
      alt: "Discord account icon",
      style: "w-[20px] h-[20px]",
    },
  ];

  const navbarLinks = [
    {
      title: "Guardado",
      icon: <NavBookmarkIcon />,
      onClick: () => {
        handleRegistrationModal(false);
        navigate("/marketplace");
      },
    },
    {
      title: "Aprender",
      icon: <LearnIcon />,

      onClick: () => {
        handleRegistrationModal(false);
        navigate("/nosotros");
      },
    },
    {
      title: "Soporte y ayuda",
      icon: <HelpIcon />,
      onClick: () => {
        handleRegistrationModal(false);
        navigate("/aprende");
      },
    },
  ];

  const handleInvestButton = () => {};

  const handleTabChange = () => {};
  const handleLogout = () => {
    navigate("/");
    removeUser();
    updateWallet("address", null);
    updateWallet("name", null);
    updateWallet("balance", null);
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
      <div className="flex flex-row gap-2" onClick={handleThemeChange}>
        <span className="material-symbols-outlined text-[#062147]">
          dark_mode
        </span>
        <p>Tema</p>
      </div>,
      <div className="flex flex-row gap-2" onClick={handleLogout}>
        <span className="material-symbols-outlined text-[#AA1010]">logout</span>
        <p className="text-[#AA1010]">Cerrar sesion</p>
      </div>,
    ],
    notifications: notifications
      ? notifications.map((item) => (
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

  const handleScroll = () => {
    setToggleDrawer(false);
  };

  const handleToggleDrawer = () => {
    setToggleDrawer((prev) => !prev);
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="flex flex-row justify-between gap-6 items-center dark:bg-[#01070E80] bg-[#F7FAFF80] backdrop-blur-xl w-full font-sen">
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
              <p
                className="font-sen text-[20px] text-[#062147] hover:underline hover:text-[#18A5FF] cursor-pointer transition-all duration-300"
                onClick={() => navigate("/marketplace")}
              >
                Proyectos
              </p>
              <p
                className="font-sen text-[20px] text-[#062147] hover:underline hover:text-[#18A5FF] cursor-pointer transition-all duration-300"
                onClick={() => navigate("/nosotros")}
              >
                Nosotros
              </p>

              <p
                className="font-sen text-[20px] text-[#062147] hover:underline hover:text-[#18A5FF] cursor-pointer transition-all duration-300"
                onClick={() => navigate("/aprende")}
              >
                Aprende
              </p>

              <span className="material-symbols-outlined text-[#062147] cursor-pointer">
                search
              </span>
            </div>
          </div>

          {userProfile ? (
            <div className="flex flex-row items-center justify-center gap-4">
              <ConnectKitButton.Custom>
                {({
                  isConnected,
                  isConnecting,
                  show,
                  hide,
                  address,
                  ensName,
                  chain,
                }) => {
                  return (
                    <>
                      {isConnected ? (
                        <div
                          className="flex flex-row gap-2 text-[#062147] dark:text-white mr-4 cursor-pointer"
                          onClick={show}
                        >
                          <span className="material-symbols-outlined translate-y-0.5">
                            account_balance_wallet
                          </span>
                          <p className="font-sen font-bold text-[18px]">
                            {wallet?.balance} USDT
                          </p>
                        </div>
                      ) : (
                        <div
                          className="flex flex-row gap-2 text-[#062147] lg:text-white md:bg-transparent lg:bg-[#062147] dark:text-white lg:mr-4 py-2 lg:px-2 cursor-pointer hover:bg-[#18A5FF] rounded-md"
                          onClick={show}
                        >
                          <span className="material-symbols-outlined translate-y-0.5">
                            account_balance_wallet
                          </span>
                          <p className="font-sen text-[18px] md:hidden lg:block">
                            {" "}
                            Conectar wallet{" "}
                          </p>
                        </div>
                      )}
                    </>
                  );
                }}
              </ConnectKitButton.Custom>

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
                <span className="absolute top-[-2px] right-[-5px] h-4 w-4 flex items-center justify-center rounded-[50%] bg-[#18A5FF] text-white text-jakarta text-xs">
                  {notifications.length}
                </span>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-row gap-2 text-[#062147] lg:text-white md:bg-transparent lg:bg-[#062147] dark:text-white lg:mr-4 py-2 px-4 cursor-pointer hover:bg-[#18A5FF] transition-all duration-300"
              onClick={() => handleWalletModal(true)}
            >
              <p className="font-sen text-[18px]">Iniciar sesion</p>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`w-full h-[90px] fixed top-0 transition-all ease-in-out delay-50 md:hidden z-10`}
      >
        <div
          className={`w-full h-full flex flex-row justify-between items-center pt-[10px] pb-[10px] backdrop-blur-[10px] bg-opacity-50 z-20 ${
            !blur ? "bg-transparent" : "bg-white"
          }`}
        >
          <div
            className="w-[80px] h-[80px] rounded-[10px] bg-transparent flex justify-center items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={Throu_sm}
              alt="Small Throu icon"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>

          <button
            type="button"
            className="text-[30px] text-[#062147] mr-[5%] object-contain cursor-pointer z-10"
            onClick={handleToggleDrawer}
            ref={navigationBarRef}
          >
            <div
              className={`h-1 w-[33px] my-1 rounded-full bg-[#062147] transition ease transform duration-300 ${
                toggleDrawer && "rotate-45 translate-y-2 translate-x-1"
              }`}
            />

            <div
              className={`ml-[12px] h-1 w-[33px] my-1 rounded-full bg-[#062147] transition ease transform duration-300 ${
                toggleDrawer
                  ? "-rotate-45 -translate-y-0 -translate-x-2"
                  : "group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        {toggleDrawer && (
          <div className="absolute top-[90.1px] flex items-start justify-center w-fit h-fit z-10 font-sen">
            <motion.div
              className={`flex flex-col items-start px-2 gap-[40px] justify-start py-5 w-[100vw] h-fit transition-all duration-200 backdrop-blur-[10px] bg-opacity-50 ${
                !blur ? "bg-transparent" : "bg-white"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.01 }}
            >
              <div className="w-full flex flex-col items-start justify-start gap-[40px] px-4">
                <div className="relative w-full flex flex-row items-center border-b-[#062147] border-b-[1px]">
                  <input
                    id="searchbar"
                    type="text"
                    className="w-full md:font-semibold font-jakarta outline-none placeholder:text-[#062147] border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-[#062147] text-[20px] leading-[30px] "
                    placeholder="Buscar proyectos"
                  />

                  <span className="text-[20px] text-[#062147]">
                    <SearchIcon />
                  </span>
                </div>
                <ConnectKitButton.Custom>
                  {({
                    isConnected,
                    isConnecting,
                    show,
                    hide,
                    address,
                    ensName,
                    chain,
                  }) => {
                    return (
                      <>
                        {isConnected ? (
                          <div
                            className="flex flex-row gap-2 text-[#062147] dark:text-white mr-4 cursor-pointer"
                            onClick={show}
                          >
                            <span className="material-symbols-outlined translate-y-0.5">
                              account_balance_wallet
                            </span>
                            <p className="font-sen font-bold text-[18px]">
                              {wallet?.balance} USDT
                            </p>
                          </div>
                        ) : (
                          <div
                            className="flex flex-row items-center justify-start gap-2"
                            onClick={show}
                          >
                            <span className="material-symbols-outlined cursor-pointer text-[#18A5FF] text-[20px]">
                              account_balance_wallet
                            </span>
                            <p className="text-[20px] font-sen text-[#18A5FF]">
                              Conectar billetera
                            </p>
                          </div>
                        )}
                      </>
                    );
                  }}
                </ConnectKitButton.Custom>
                <div className="w-full flex flex-row justify-between items-center px-2">
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <span className="material-symbols-outlined cursor-pointer text-[#062147]">
                      dark_mode
                    </span>
                    <p className="text-[20px] font-sen text-[#062147]">
                      Modo oscuro
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#18A5FF]"></div>
                    </label>
                  </div>
                </div>
              </div>

              <ul className="px-6 flex flex-col items-start justify-start w-full gap-[40px] text-[#062147]">
                {navbarLinks.map((item) => (
                  <li
                    key={item.title}
                    className="capitalize font-sen text-normal text-[20px] leading-[1em]"
                    onClick={item.onClick}
                  >
                    <span className="flex flex-row items-start justify-between gap-2">
                      {item.icon}
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-[40px] items-center justify-center w-full">
                <div className="flex flex-row justify-center items-center gap-2 text-[#18A5FF] text-[20px]">
                  <MdLogout />
                  <p className="text-[20px]">Cerrar sesion</p>
                </div>

                <div className="flex flex-row items-center justify-between w-full gap-4 mt-auto">
                  {socialMediaLinks.map(({ src, alt, style }, index) => (
                    <img
                      key={`social-media-${index}`}
                      src={src}
                      alt={alt}
                      className={`cursor-pointer ${style}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
