import React from "react";
import { CustomButton } from "../index";

const Hero = () => {
  const handleExplore = () => {};

  return (
    <div className="landingPage__bg w-full h-screen pt-[15vh] md:pt-[10vh] object-contain overflow-hidden">
      <div className="flex flex-wrap flex-col gap-[30px] xl:gap-0 md:w-full h-full text-[#062147] justify-center md:justify-start items-start md:mt-[7%] px-[6%] md:pt-0 md:relative">
        <h1 className="font-normal text-[30px] md:text-[40px] lg:text-[45px]  text-left leading-[40px] md:leading-[calc(100%+15px)] md:w-[65%] md:mb-[2%]">
          Invierte en propiedad raíz a través de la tecnología blockchain
        </h1>

        <div className="flex flex-1 flex-col md:flex-none items-start justify-between md:justify-center w-full gap-[2rem]">
          <h3 className="md:w-[40%] xl:w-[30%] w-[70vw] text-[18px] md:text-[20px] md:leading-[25px] leading-[20px] font-[400px] font-jakarta">
            Vive el futuro de la inversión inmobiliaria con THROU, maximiza tu
            portafolio y obtén mejores rendimientos.
          </h3>
          <div className="flex w-full md:flex-row flex-col gap-4 md:gap-12 items-center justify-end md:justify-start md:items-center h-full md:h-fit pb-16">
            <CustomButton
              styles="border-2 border-[#062147] px-12 py-[10px] flex items-center justify-center text-white hidden md:block hover:text-white bg-[#062147] hover:bg-[#18A5FF] hover:border-[#18A5FF] text-[18px]"
              title="Explorar"
              handleClick={handleExplore}
            />
            <CustomButton
              styles="px-16 py-4 flex items-center justify-center w-full h-16 text-white bg-[#062147] md:hidden text-[24px]"
              title="Invertir"
              handleClick={handleExplore}
            />
            <a
              href=""
              className="text-[#062147] text-[20px] md:text-[18px] md:border-2 border-transparent hover:underline hover:text-[#18A5FF] md:font-semibold"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
