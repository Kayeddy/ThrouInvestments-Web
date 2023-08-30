import React from "react";
import {
  Throu_l_footer,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  DiscordIcon,
} from "../../assets";

const Footer = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center justify-start relative gap-12">
      <section className="w-full">
        <div className="w-full md:h-[170px] h-[630px] flex flex-col md:gap-8 gap-10 justify-center bg-[#062147] py-[60px] md:py-0 px-[6%]">
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
                "Proyectos",
                "Nosotros",
                "Aprender",
                "Términos del servicio",
                "Privacidad",
              ].map((item) => (
                <a
                  href=""
                  className="text-[20px] font-sen text-white font-normal leading-[15px] hover:underline hover:text-[#18A5FF]"
                  key={item}
                >
                  {item}
                </a>
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
    </div>
  );
};

export default Footer;
