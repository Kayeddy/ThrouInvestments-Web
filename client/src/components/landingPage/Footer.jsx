import React from "react";
import { CustomButton, FooterNav } from "./index";
import { RxDoubleArrowUp as UpArrow } from "react-icons/rx";
import { AiOutlineUserAdd as UserIcon } from "react-icons/ai";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import { Bg_logo2_right } from "../../assets";

const Footer = () => {
  return (
    <div className=" h-fit w-full flex flex-col items-center justify-start relative gap-12">
      {/* Mobile footer Nav */}
      <div className="w-full h-fit relative flex justify-end items-baseline md:hidden">
        <FooterNav />
      </div>

      {/* Desktop footer Nav */}
      <div className="w-full h-fit hidden md:flex">
        <FooterNav />
      </div>

      <div className="w-full h-[480px] md:h-[570px] bg-[#062147] absolute bottom-[440px] md:bottom-[160px] p-4 px-[6%] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-start lg:gap-24 gap-12 relative h-full w-full pb-12">
          <div className="flex flex-col gap-2 items-start justify-center md:w-[40%] w-full">
            <h2 className="text-white text-[28px] md:text-[50px] font-semibold font-sen">
              <span className="md:text-[#18A5FF] text-white">Conoce</span> el
              universo de posibilidades de{" "}
              <span className="md:text-[#18A5FF] text-white">Throu</span>.
            </h2>
            <p className="md:w-[60%] text-[17px] md:text-[16px] leading-[22.68px] font-normal text-[#F7FAFF] font-jakarta">
              {" "}
              Vulputate at commodo mi cursus amet. Eget porta sed egestas sociis
              pellentesque pellentesque. Ultricies ac phasellus dapibus.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center lg:gap-16 gap-4 z-20">
            <span className="px-1 py-3 md:p-4 lg:p-6 flex flex-col gap-4 items-center justify-between w-[170px] h-fit md:w-[180px] lg:w-[200px] md:h-[230px] rounded-[30px] md:rounded-md text-center text-white text-[18px] md:text-[20px] font-Plus_Jakarta_Sans font-bold shadow-custom">
              <div className="flex flex-col gap-3 items-center">
                <span className="md:text-[60px] text-[40px]">
                  <UserIcon />
                </span>
                <p className="leading-[20px] md:text-[18px] text-[16px] font-jakarta">
                  Conoce Throu y{"\n"}
                  <span className="text-[18px] md:text-[23px] block">
                    crea una cuenta
                  </span>{" "}
                </p>
              </div>
              <a
                href=""
                className="text-[#18A5FF] md:text-[20px] hover:underline font-sen"
              >
                {" "}
                Registrarme{" "}
              </a>
            </span>
            <span className="px-1 py-3 md:p-4 lg:p-6 flex flex-col gap-4 items-center justify-between w-[170px] h-fit md:w-[180px] lg:w-[200px] md:h-[230px] rounded-[30px] md:rounded-md text-center text-white md:text-[20px] font-Plus_Jakarta_Sans font-bold shadow-custom">
              <div className="flex flex-col gap-3 items-center">
                <span>
                  <WalletIcon className="md:text-[60px] text-[40px]" />
                </span>
                <p className="leading-[20px] md:text-[18px] text-[16px] font-jakarta">
                  Conoce wallets y{"\n"}
                  <span className="text-[18px] md:text-[23px] block ">
                    crea una
                  </span>{" "}
                </p>
              </div>
              <a
                href=""
                className="text-[#18A5FF] md:text-[20px] hover:underline font-sen"
              >
                {" "}
                Crea una wallet{" "}
              </a>
            </span>
          </div>

          <div className="absolute right-[-90px] rotate-[-20deg] top-0 z-10 w-fit">
            <img
              src={Bg_logo2_right}
              alt="Half_logo_purple"
              className="w-[10vw] h-[300px]"
            />
          </div>
        </div>
      </div>

      <div
        className="items-center justify-center p-4 absolute bottom-[730px] right-0 bg-white cursor-pointer md:flex hidden z-10"
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
