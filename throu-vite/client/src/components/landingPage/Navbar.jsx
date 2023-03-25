import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Navbar = ({ blur }) => {
  const handleInvestButton = () => {};
  const navigate = useNavigate();
  const [toggleDrawer, setToggleDrawer] = useState(false);

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

  const genericHamburgerLine =
    "h-1 w-[33px] my-1 rounded-full bg-[#062147] transition ease transform duration-300";

  return (
    <>
      <nav
        className={`w-full h-[90px] flex flex-row justify-between items-center py-[10px] px-[100px] bg-white  ${
          blur
            ? "bg-opacity-0"
            : "bg-opacity-50 backdrop-filter backdrop-blur-lg"
        }  fixed top-0 z-20 transition-all ease-in-out delay-50 hidden lg:flex`}
      >
        <div className="flex justify-center items-center">
          <img
            src={blur ? Throu_l : Throu_sm}
            alt="Logo"
            className={`${
              blur ? "w-[12em] h-[3em]" : "w-[3em] h-[3em]"
            } transition ease-in-out duration-100`}
          />
        </div>

        <div className="flex justify-center items-center">
          <ul className=" w-full flex justify-center items-center list-none">
            {["proyectos", "nosotros", "aprende"].map((item) => (
              <li key={`link-${item}`} className="mx-[2em] my-0 cursor-pointer">
                <a
                  href={`/${item}`}
                  className="font-[400] text-[20px] text-[#062147] leading-[24.06px] decoration-0 flex justify-center items-center capitalize hover:underline hover:text-[#18A5FF]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row gap-[1em] items-center justify-center">
          <a
            href=""
            className="font-normal text-[1.1em] text-[#062147] hover:text-[#18A5FF] hover:underline"
          >
            Iniciar sesión
          </a>
          <CustomButton
            title="Invertir"
            handleClick={handleInvestButton}
            styles="bg-[#062147] px-[50px] py-[10px] flex items-center justify-center xl:w-[196px] lg:w-fit h-[60px] text-white"
          />
        </div>
      </nav>

      {/*Small screens navigation */}
      <nav
        className={`w-full h-[90px] flex flex-row justify-between items-center pt-[10px] pb-[10px] bg-white ${
          blur
            ? "bg-opacity-0"
            : "bg-opacity-50 backdrop-filter backdrop-blur-lg"
        }  fixed top-0 z-20 transition-all ease-in-out delay-50 block lg:hidden`}
      >
        <Link to="/">
          <div className="w-[80px] h-[80px] rounded-[10px] bg-transparent flex justify-center items-center cursor-pointer">
            <img
              src={Throu_sm}
              alt="Small Throu icon"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>

        <button
          type="button"
          className="text-[30px] text-[#062147] mr-[5%] object-contain cursor-pointer z-10"
          onClick={() => {
            setToggleDrawer((prev) => !prev);
          }}
          ref={navigationBarRef}
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
          <Overlay>
            <motion.div
              className={`absolute top-[90px] right-0 left-0  py-4 w-[100vw] h-[560px] transition-all duration-200 backdrop-filter backdrop-blur-lg ${
                blur ? "bg-opacity-0" : "bg-white/95"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.01 }}
            >
              <ul className="mb-4 flex flex-col items-center justify-start w-full gap-[50px] text-[#062147] mt-[10%]">
                {["proyectos", "nosotros", "aprender"].map((item) => (
                  <li
                    key={item}
                    className="capitalize text-normal text-[1.25em] leading-[1em]"
                  >
                    {item}
                  </li>
                ))}
                <li>
                  <a
                    href=""
                    className="font-semibold text-[1.2em] hover:text-[#18A5FF] hover:underline capitalize"
                  >
                    Iniciar sesión
                  </a>
                </li>
                <CustomButton
                  title="Invertir"
                  handleClick={handleInvestButton}
                  styles="bg-[#062147] px-[50px] py-[10px] flex items-center justify-center w-[90%]"
                />

                <div className="flex flex-col items-center justify-center w-full h-fit px-2 gap-8">
                  <div className="w-full flex flex-row items-center justify-between">
                    <a href="">Términos del servicio</a>
                    <a href="">Privacidad</a>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <a href="">
                      <img
                        src={Instagram_mobile}
                        alt="Instagram account icon"
                        className="h-[20px] w-[20px]"
                      />
                    </a>
                    <a href="">
                      <img
                        src={Twitter_mobile}
                        alt="Twitter account icon"
                        className="h-[20px] w-[20px]"
                      />
                    </a>

                    <a href="">
                      <img
                        src={Facebook_mobile}
                        alt="Facebook account icon"
                        className="h-[20px] w-[13px]"
                      />
                    </a>

                    <a href="">
                      <img
                        src={Discord_mobile}
                        alt="Facebook account icon"
                        className="h-[20px] w-[20px]"
                      />
                    </a>
                  </div>
                </div>
              </ul>
            </motion.div>
          </Overlay>
        )}
      </nav>
    </>
  );
};

export default Navbar;
