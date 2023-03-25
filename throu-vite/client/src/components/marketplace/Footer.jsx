import React from "react";
import { FooterNav } from "./index";
import { RxDoubleArrowUp as UpArrow } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center justify-start relative gap-12">
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
