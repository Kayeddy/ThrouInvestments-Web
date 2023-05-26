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
    <div className="w-full md:h-[170px] h-[450px] flex flex-col gap-12 justify-center bg-[#062147] md:absolute bottom-0 py-[40px] md:py-0 z-10 px-[6%] ">
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <img
          src={Throu_l_footer}
          alt="Throu icon"
          className="h-[3em] md:h-[2.6em] w-[250px] md:w-[200px]"
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

      <div className="flex md:flex-row flex-col md:justify-between items-center w-full">
        <div className="flex md:flex-row flex-col items-center justify-start gap-6 w-full">
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
          <p className="font normal text-white mt-4 md:mt-0 text-center">
            © 2023 Throu Investment. All Rights Reserved.{" "}
          </p>
        </div>
      </div>

      <div className="md:hidden flex flex-row gap-6 items-center justify-center">
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