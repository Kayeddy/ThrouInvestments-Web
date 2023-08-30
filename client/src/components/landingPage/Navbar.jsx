import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Throu_sm,
  Throu_l,
  Twitter_mobile,
  Facebook_mobile,
  Instagram_mobile,
  Discord_mobile,
} from "../../assets";

import { CustomButton, Overlay } from "./index";
import useUserStore from "../../context/useUserStore";
import useInAppNotificationStore from "../../context/useInAppNotificationStore";

const Navbar = ({ blur, handleRegistrationModal, registrationModalState }) => {
  const navigate = useNavigate();
  const openModal = useInAppNotificationStore((state) => state.openModal);

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const { userProfile } = useUserStore();
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
      title: "Proyectos",
      onClick: () => {
        handleRegistrationModal(false);
        navigate("/marketplace");
      },
    },
    {
      title: "Nosotros",
      onClick: () => {
        handleRegistrationModal(false);
        navigate("/nosotros");
      },
    },
    {
      title: "Aprende",
      onClick: () => {
        handleRegistrationModal(false);
        navigate("/aprende");
      },
    },
  ];

  const handleInvestButton = () => {
    userProfile ? navigate("/marketplace") : handleRegistrationModal(true);
  };

  const handleToggleDrawer = () => {
    setToggleDrawer((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
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

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyles = `border-2 border-[#062147] ${
    blur ? "py-[5px]" : "py-[10px] "
  } flex items-center justify-center text-white hidden md:block hover:text-white bg-[#062147] hover:bg-[#18A5FF] hover:border-[#18A5FF] text-[18px] transition ease transform duration-300`;

  return (
    <>
      {/* Desktop navbar */}
      <nav
        className={`w-full flex flex-row justify-between items-center py-[10px] px-[6%] bg-white font-sen  ${
          blur
            ? "bg-opacity-50 backdrop-filter backdrop-blur-lg h-[60px]"
            : "bg-opacity-0 h-[90px] "
        }  fixed top-0 transition-all ease-in-out delay-50 hidden md:flex`}
      >
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={blur ? Throu_sm : Throu_l}
            alt="Logo"
            className={`object-fill ${
              blur
                ? "w-[45px] h-[45px]"
                : "md:w-[90px] lg:w-[120px] xl:w-[200px] md:h-[30px] lg:h-[30px] xl:h-[42px]"
            } transition ease-in-out duration-100`}
          />
        </div>

        <div className="flex justify-center items-center mx-3">
          <ul className=" w-full flex justify-center items-center list-none gap-6">
            {navbarLinks.map((item) => (
              <li key={`link-${item.title}`} className="my-0 cursor-pointer">
                <p
                  to={`/${item}`}
                  className={`font-[400] text-[20px] text-[#062147] leading-[24.06px] decoration-0 flex justify-center items-center capitalize hover:underline hover:text-[#18A5FF] transition ease transform duration-300`}
                  onClick={item.onClick}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center justify-center gap-3">
          {!userProfile && (
            <p
              className="font-normal text-[18px] text-[#062147] hover:text-[#18A5FF] hover:underline cursor-pointer transition ease transform duration-300"
              onClick={() =>
                openModal("authentication", "generalAuthConnection")
              }
            >
              Iniciar sesión
            </p>
          )}

          <CustomButton
            title="Invertir"
            handleClick={handleInvestButton}
            styles={buttonStyles}
          />
        </div>
      </nav>

      {/*Mobile Navbar*/}
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
            onClick={() => {
              handleRegistrationModal(false);
              navigate("/");
            }}
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
              className={`flex flex-col items-center gap-12 justify-start py-5 w-[100vw] h-fit transition-all duration-200 backdrop-blur-[10px] bg-opacity-50 ${
                !blur ? "bg-transparent" : "bg-white"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.01 }}
            >
              <ul className="mb-4 flex flex-col items-center justify-start w-full gap-[50px] text-[#062147]">
                {navbarLinks.map((item) => (
                  <li
                    key={item.title}
                    className="capitalize font-sen text-normal text-[20px] leading-[1em]"
                    onClick={item.onClick}
                  >
                    {item.title}
                  </li>
                ))}
                <li>
                  <p
                    className="font-semibold text-[1.2em] hover:text-[#18A5FF] hover:underline capitalize font-sen"
                    onClick={() =>
                      openModal("authentication", "generalAuthConnection")
                    }
                  >
                    Iniciar sesión
                  </p>
                </li>
              </ul>

              <CustomButton
                title="Invertir"
                handleClick={() => {
                  navigate("/marketplace");
                }}
                styles={`bg-[#062147] text-white py-3.5 hover:bg-[#18A5FF] w-[90%]`}
              />

              <div className="flex flex-col gap-12 items-center justify-center w-[90%]">
                <div className="flex flex-row justify-between w-full">
                  <p className="text-[#062147] text-[14px]">
                    {" "}
                    Términos del servicio{" "}
                  </p>
                  <p className="text-[#062147] text-[14px]"> Privacidad </p>
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
