import React from "react";
import {
  Throu_l_footer,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  DiscordIcon,
} from "../../assets";

const FooterNav = () => {
  return (
    <div className="w-full lg:h-[170px] h-fit px-[40px] flex flex-col gap-12 justify-center bg-[#062147] lg:absolute bottom-0 py-[40px] lg:py-0 z-10 pb-[100px] md:pb-0">
      <div className="flex lg:flex-row flex-col items-center justify-between w-full">
        <img
          src={Throu_l_footer}
          alt="Throu icon"
          className="h-[2.5em] w-[200px]"
        />
        <div className="lg:flex hidden flex-row gap-16 items-center justify-center">
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
              className="h-[20px] w-[10px]"
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

      <div className="flex lg:flex-row flex-col lg:justify-between items-center w-full">
        <div className="flex lg:flex-row flex-col items-center justify-start gap-6 w-full">
          {[
            "Proyectos",
            "Nosotros",
            "Aprender",
            "Términos del servicio",
            "Privacidad",
          ].map((item) => (
            <a
              href=""
              className="text-[15px] text-white font-normal leading-[15px] hover:underline hover:text-[#18A5FF]"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p className="font normal text-white mt-4 lg:mt-0 text-center">
            © 2023 Throu Investment. All Rights Reserved.{" "}
          </p>
        </div>
      </div>

      <div className="lg:hidden flex flex-row gap-6 items-center justify-center">
        <a href="">
          <img
            src={InstagramIcon}
            alt="Instagram account icon"
            className="h-[15px] w-[15px]"
          />
        </a>
        <a href="">
          <img
            src={TwitterIcon}
            alt="Twitter account icon"
            className="h-[15px] w-[15px]"
          />
        </a>

        <a href="">
          <img
            src={FacebookIcon}
            alt="Facebook account icon"
            className="h-[15px] w-[15px]"
          />
        </a>

        <a href="">
          <img
            src={DiscordIcon}
            alt="Facebook account icon"
            className="h-[15px] w-[15px]"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterNav;
