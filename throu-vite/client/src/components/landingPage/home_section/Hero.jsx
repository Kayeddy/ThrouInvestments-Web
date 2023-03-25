import React from "react";
import { CustomButton } from "../index";

const Hero = () => {
  const handleExplore = () => {};

  return (
    <div className="landingPage__bg w-full h-screen pt-[15vh] lg:pt-[10vh] object-contain overflow-hidden">
      <div className="flex flex-wrap flex-col gap-[30px] xl:gap-0 lg:w-full h-full text-[#062147] justify-center lg:justify-start items-start lg:mt-[7%] px-[6%] lg:pt-0 lg:relative">
        <h1 className="font-[200px] text-[3.6vh] text-left lg:text-[2.8vw] leading-[40px] lg:leading-[calc(100%+15px)] lg:w-[70%] lg:mb-[2%]">
          Invierte en propiedad raíz a través de la tecnología blockchain
        </h1>

        <div className="flex flex-1 flex-col lg:flex-none items-center justify-between lg:justify-center w-full gap-[2rem] lg:ml-[4%] lg:absolute top-[100px] left-[calc(10%-455px/2+26.5px)]">
          <h3 className="lg:w-[40%] xl:w-[30%] w-[70vw] text-[17px] lg:text-[20px] lg:leading-[25px] leading-[20px] font-[Plus_Jakarta_Sans]">
            Vive el futuro de la inversión inmobiliaria con THROU, maximiza tu
            portafolio y obtén mejores rendimientos.
          </h3>
          <div className="flex lg:flex-row flex-col gap-4 lg:gap-12 items-center justify-end lg:justify-start lg:items-center h-full lg:h-fit pb-16">
            <CustomButton
              styles="bg-transparent border-2 border-[#062147] px-16 py-4 flex items-center justify-center w-48 h-16 text-[#062147] hidden lg:block hover:text-white hover:bg-[#062147]"
              title="Explorar"
              handleClick={handleExplore}
            />
            <CustomButton
              styles="px-16 py-4 flex items-center justify-center w-48 h-16 text-white bg-[#062147] lg:hidden"
              title="Invertir"
              handleClick={handleExplore}
            />
            <a
              href=""
              className="text-white lg:text-[#062147] font-normal text-[18px] hover:text-[#18A5FF] hover:underline"
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
