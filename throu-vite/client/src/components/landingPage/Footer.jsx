import React from "react";
import { CustomButton, FooterNav } from "./index";
import { RxDoubleArrowUp as UpArrow } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="lg:h-screen h-fit w-full flex flex-col items-center justify-start lg:mt-[100px] relative gap-12">
      <h1 className="text-[#062147] font-semibold lg:leading-[2em] leading-[1em] lg:text-[3em] text-[1.5em] pt-[20vh]">
        Suscríbete a nuestro boletín
      </h1>
      <div className="flex flex-wrap justify-center items-center text-center lg:flex-row flex-col gap-4 w-[800px] py-2 lg:hover:shadow-blue-200/60 lg:hover:shadow-xl h-[80px] rounded-xl transition ease-in-out delay-80 lg:mb-0">
        <p className="font-normal text-[25px] lg:block hidden text-center">
          Email
        </p>
        <div className="flex items-center justify-center lg:flex-row flex-col gap-6 w-fit">
          <input
            type="text"
            placeholder="✉️ Ingresa tu email"
            className="placeholder:text-slate-400 placeholder:font-normal placeholder:text-[20px] lg:border-2 bg-transparent p-1 placeholder:text-center lg:placeholder:text-left w-[60vw] lg:w-[500px]"
          />
          <CustomButton
            type="submit"
            title="Enviar"
            styles="px-2 text-[#062147] border-2 border-[#062147] w-[80vw] lg:w-fit h-[50px] lg:h-fit hover:bg-[#062147] hover:text-white"
          />
        </div>
      </div>

      {/* Mobile footer Nav */}
      <div className="w-full h-fit relative flex justify-end items-baseline lg:hidden mt-[20vh]">
        <FooterNav />
      </div>

      {/* Desktop footer Nav */}
      <div className="w-full h-fit hidden lg:flex">
        <FooterNav />
      </div>

      <div
        className="items-center justify-center p-4 absolute bottom-[30vh] right-0 bg-white cursor-pointer lg:flex hidden z-10"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-slate-400 text-[25px]">
          <UpArrow />
        </span>
      </div>
    </div>
  );
};

export default Footer;
