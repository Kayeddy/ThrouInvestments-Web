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
import useStore from "../../context";

const Navbar = ({ blur = false, handleRegistrationModal }) => {
  const navigate = useNavigate();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const { userProfile } = useStore();
  const socialMediaLinks = [
    { src: Instagram_mobile, alt: "Instagram account icon" },
    { src: Twitter_mobile, alt: "Twitter account icon" },
    { src: Facebook_mobile, alt: "Facebook account icon" },
    { src: Discord_mobile, alt: "Discord account icon" },
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

  const buttonStyles = `border-2 border-[#062147] px-16 ${
    blur ? "py-[5px]" : "py-[10px] "
  } flex items-center justify-center text-white hidden md:block hover:text-white bg-[#062147] hover:bg-[#18A5FF] hover:border-[#18A5FF] text-[18px] transition ease transform duration-300`;

  return (
    <>
      <nav
        className={`w-full flex flex-row justify-between items-center py-[10px] px-[6%] bg-white font-sen  ${
          blur
            ? "bg-opacity-50 backdrop-filter backdrop-blur-lg h-[60px]"
            : "bg-opacity-0 h-[90px] "
        }  fixed top-0 transition-all ease-in-out delay-50 hidden md:flex`}
      >
        <div className="flex justify-center items-center">
          <img
            src={blur ? Throu_sm : Throu_l}
            alt="Logo"
            className={`${
              blur
                ? "w-[40px] h-[40px] "
                : "lg:w-[12em] md:w-[13.5vw] lg:h-[50px] md:h-[40px]"
            } transition ease-in-out duration-100`}
          />
        </div>

        <div className="flex justify-center items-center mx-3">
          <ul className=" w-full flex justify-center items-center list-none gap-12">
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

        <div className="flex flex-row gap-[1em] items-center justify-center">
          {!userProfile && (
            <p
              className="font-normal text-[1.1em] text-[#062147] hover:text-[#18A5FF] hover:underline cursor-pointer transition ease transform duration-300"
              onClick={() => handleRegistrationModal(true)}
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

      {/*Small screens navigation */}
      <nav
        className={`w-full h-[90px] flex flex-row justify-between items-center pt-[10px] pb-[10px] bg-white ${
          blur
            ? "bg-opacity-50 backdrop-filter backdrop-blur-lg"
            : "bg-opacity-0 "
        }  fixed top-0 transition-all ease-in-out delay-50 block md:hidden z-10`}
      >
        <div
          className="w-[80px] h-[80px] rounded-[10px] bg-transparent flex justify-center items-center cursor-pointer"
          onClick={() => {
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

        {toggleDrawer && (
          <Overlay>
            <motion.div
              className={`flex flex-col items-center justify-between right-0 left-0  py-4 w-[100vw] h-[560px] transition-all duration-200 backdrop-filter  z-10 mt-[48px] backdrop-blur-[10px] bg-opacity-[0.8] ${
                !blur ? "bg-white/95" : ""
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.01 }}
            >
              <ul
                className="mb-4 flex flex-col items-center justify-start w-full gap-[50px] text-[#062147] content-below"
                style={{ zIndex: 5 }}
              >
                {navbarLinks.map((item) => (
                  <li
                    key={item.title}
                    className="capitalize text-normal text-[1.25em] leading-[1em]"
                    onClick={item.onClick}
                  >
                    {item.title}
                  </li>
                ))}
                <li>
                  <p
                    className="font-semibold text-[1.2em] hover:text-[#18A5FF] hover:underline capitalize"
                    onClick={() => handleRegistrationModal(true)}
                  >
                    Iniciar sesión
                  </p>
                </li>
                <CustomButton
                  title="Invertir"
                  handleClick={() => {
                    navigate("/marketplace");
                  }}
                  styles={`bg-[#062147] text-white py-3 mb-3 mt-5 hover:bg-[#18A5FF] w-[90%]`}
                />
              </ul>
              <div className="flex flex-col gap-6 items-center justify-center w-full">
                <div className="flex flex-row justify-around w-full">
                  <p className="text-[#062147] text-[1em] font-semibold">
                    {" "}
                    Términos del servicio{" "}
                  </p>
                  <p className="text-[#062147] text-[1em] font-semibold">
                    {" "}
                    Privacidad{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-around w-full gap-4 mt-auto">
                  {socialMediaLinks.map(({ src, alt }, index) => (
                    <img
                      key={`social-media-${index}`}
                      src={src}
                      alt={alt}
                      className="w-4 h-4 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </Overlay>
        )}
      </nav>
    </>
  );
};

export default Navbar;
