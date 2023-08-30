import React from "react";
import { CustomButton } from "./index";
import { RxDoubleArrowUp as UpArrow } from "react-icons/rx";
import { AiOutlineUserAdd as UserIcon } from "react-icons/ai";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import {
  Bg_logo2_right,
  Throu_l_footer,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  DiscordIcon,
} from "../../assets";
import { useNavigate } from "react-router-dom";

const Footer = ({ showRegistrationModal }) => {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-full overflow-hidden">
      <main className="relative w-full h-full flex flex-col pb-8 md:pb-0 gap-8 md:gap-32 items-start justify-start bg-[#062147] px-[6%] pt-[30px] md:pt-[100px]">
        {/** Background logo */}
        <div className="h-full justify-end hidden lg:block absolute top-[100px] right-[-90px] z-0">
          <img
            src={Bg_logo2_right}
            alt="Half_logo_purple"
            className="w-[300px] h-[500px] rotate-[-20deg]"
          />
        </div>

        {/** Main section #1 */}
        <section className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-start gap-12 md:gap-[60px] relative h-full w-full">
            <div className="flex flex-col gap-2 items-start justify-center w-full md:w-[600px] h-full">
              <h2 className="text-white text-[28px] md:text-[35px] xl:text-[50px] font-semibold font-sen">
                <span className="md:text-[#18A5FF] text-white">Conoce</span> el
                universo de posibilidades de{" "}
                <span className="md:text-[#18A5FF] text-white">Throu</span>.
              </h2>
              <p className="md:w-[60%] lg:w-[75%] text-[17px] xl:text-[18px] leading-[22.68px] font-normal text-[#F7FAFF] font-jakarta">
                {" "}
                Vulputate at commodo mi cursus amet. Eget porta sed egestas
                sociis pellentesque pellentesque. Ultricies ac phasellus
                dapibus.
              </p>
            </div>
            <div className="flex flex-row w-fit items-center justify-center lg:gap-8 xl:gap-10 gap-4">
              <span className="bg-[#062147] px-1 py-3 md:p-4 lg:p-6 flex flex-col gap-4 items-center justify-between w-[160px] h-[170px] md:w-[180px] lg:w-[220px] xl:w-[230px] md:h-[230px] rounded-[30px] md:rounded-md text-center text-white text-[18px] md:text-[20px] font-jakarta font-bold shadow-custom">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <span className="md:text-[60px] text-[50px]">
                    <UserIcon />
                  </span>
                  <p className="leading-[20px] md:text-[18px] text-[16px] font-jakarta">
                    Conoce Throu y
                    <span className="text-[18px] md:text-[23px] block">
                      crea una cuenta
                    </span>{" "}
                  </p>
                </div>
                <p
                  onClick={() => showRegistrationModal(true)}
                  className="text-[#18A5FF] text-[18px] md:text-[20px] hover:underline font-sen cursor-pointer transition ease transform duration-300"
                >
                  Registrarme
                </p>
              </span>
              <span className="bg-[#062147] px-1 py-3 md:p-4 lg:p-6 flex flex-col gap-4 items-center justify-between w-[160px] h-[170px] md:w-[180px] lg:w-[220px] xl:w-[230px] md:h-[230px] rounded-[30px] md:rounded-md text-center text-white md:text-[20px] font-jakarta font-bold shadow-custom">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <span>
                    <WalletIcon className="md:text-[60px] text-[45px]" />
                  </span>
                  <p className="leading-[20px] md:text-[18px] text-[16px] font-jakarta">
                    Conoce wallets y{"\n"}
                    <span className="text-[18px] md:text-[23px] block">
                      crea una
                    </span>{" "}
                  </p>
                </div>
                <p className="text-[#18A5FF]  text-[18px] md:text-[20px] hover:underline font-sen cursor-pointer transition ease transform duration-300">
                  Crea una wallet
                </p>
              </span>
            </div>
          </div>
        </section>

        {/** Main section #2 */}
        <section className="w-full mt-6 md:mt-0">
          <div className="w-full md:h-[170px] h-[450px] flex flex-col md:gap-8 gap-10 justify-center bg-[#062147] py-[40px] md:py-0">
            <div className="flex md:flex-row flex-col items-center justify-between w-full">
              <img
                src={Throu_l_footer}
                alt="Throu icon"
                className="w-[250px] h-[60px] md:w-[200px] md:h-[45px]"
              />

              <div className="md:flex hidden flex-row gap-16 items-center justify-center">
                <a href="">
                  <img
                    src={InstagramIcon}
                    alt="Instagram account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>
                <a href="">
                  <img
                    src={TwitterIcon}
                    alt="Twitter account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>

                <a href="">
                  <img
                    src={FacebookIcon}
                    alt="Facebook account icon"
                    className="h-[20px] w-[13px]"
                  />
                </a>

                <a href="">
                  <img
                    src={DiscordIcon}
                    alt="Facebook account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col md:justify-between items-center justify-center gap-10 w-full">
              <div className="flex md:flex-row flex-col items-center justify-between md:justify-start md:gap-6 gap-8 w-full">
                {[
                  {
                    name: "Proyectos",
                    handleClick: () => navigate("/marketplace"),
                  },
                  {
                    name: "Nosotros",
                    handleClick: () => navigate("/nosotros"),
                  },
                  {
                    name: "Aprender",
                    handleClick: () => navigate("/aprende"),
                  },
                  {
                    name: "Términos del servicio",
                    handleClick: () => {},
                  },
                  {
                    name: "Privacidad",
                    handleClick: () => {},
                  },
                ].map((item) => (
                  <p
                    onClick={item.handleClick}
                    className="text-[20px] font-sen text-white font-normal leading-[15px] hover:underline hover:text-[#18A5FF] cursor-pointer"
                    key={item.name}
                  >
                    {item.name}
                  </p>
                ))}
              </div>

              <div className="md:hidden w-full flex flex-row gap-8 items-center justify-between">
                <a href="">
                  <img
                    src={InstagramIcon}
                    alt="Instagram account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>
                <a href="">
                  <img
                    src={TwitterIcon}
                    alt="Twitter account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>

                <a href="">
                  <img
                    src={FacebookIcon}
                    alt="Facebook account icon"
                    className="h-[18px] w-[15px]"
                  />
                </a>

                <a href="">
                  <img
                    src={DiscordIcon}
                    alt="Facebook account icon"
                    className="h-[20px] w-[20px]"
                  />
                </a>
              </div>

              <p className="font-jakarta text-[14px] text-white text-center w-[180px] md:w-fit">
                © 2023 Throu Investment. All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </section>

        {/** Scroll to top button */}
        <div
          className="items-center justify-center p-4 absolute top-0 right-0 bg-white cursor-pointer md:flex hidden z-10"
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
      </main>
    </div>
  );
};

export default Footer;
