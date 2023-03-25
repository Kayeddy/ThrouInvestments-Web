import React from "react";
import {
  StepsLine_1,
  StepsLine_2,
  StepsLine_3,
  StepsLine_4,
  StepsLine_Joiner,
  StepsLine,
  Steps_LineCards,
  AccountStep,
  ChooseStep,
  BuyStep,
  ProfitStep,
  BoxArrow,
} from "../../../assets";

import { StepsCard } from "./utility_components";

const Steps = () => {
  return (
    <div className="flex flex-col w-full h-fit lg:h-[800px] items-center mt-[150px] justify-start lg:pl-[20px] overflow-hidden">
      <div className="w-full h-full flex-col lg:flex hidden">
        <div className="flex flex-col justify-start items-start w-full h-fit pl-[10%] relative">
          <p className="text-left text-[#062147] font-bold leading-[50px] text-[40px]">
            Estaremos en cada
          </p>
          <p className="text-left font-bold leading-[74px] text-[60px] text-[#17a5ff]">
            Paso <span className="opacity-30">a paso</span>
          </p>
          <p className="text-left text-[#062147] font-bold leading-[50px] text-[40px]">
            para ti
          </p>
        </div>

        <div className="w-full h-fit ml-[5%] mt-[-15%] lg:mb-[2%]">
          <img src={StepsLine} alt="" />
        </div>

        <div className="relative w-[calc(100%-200px)] h-fit flex flex-wrap object-contain max-w-[90%]">
          <p className="font-normal leading-[20px] lg:absolute top-[10px] left-[calc((100%-90%)+10px)] xl:left-[calc((100%-95%)+10px)]">
            {" "}
            📍Estas aquí{" "}
          </p>

          <div className="absolute left-[calc((100%-90%)+10px)] xl:left-[calc((100%-95%)+10px)] top-[calc(100%+40px)]">
            <StepsCard
              image={AccountStep}
              title="Únete al camino de la inversión"
              description="¡Accede a oportunidades únicas con Throu! "
              style="shadow-blue-200/60"
              goTo="Regístrate"
              goToColor="text-[#B5B5B5]"
              titleColor="text-[#062147]"
            />
          </div>

          <div className="absolute xl:left-[calc(100%-65%)] left-[calc((100%-65%)+40px)] top-[calc(100%-70px)]">
            <StepsCard
              image={ChooseStep}
              title="Escoje entre nuestros proyectos"
              description="¡Construye tu portafolio inmobiliario!"
              style=""
              goTo="Explorar"
              titleColor="text-[#062147]"
              goToColor="text-[#062147]"
            />
          </div>

          <div className="absolute xl:left-[calc(100%-37%)] left-[calc((100%-37%)+40px)]  top-[calc(100%-140px+10px)]">
            <StepsCard
              image={BuyStep}
              title="Compra los tokens que desees"
              description="Repite el proceso y aumenta tu patrimonio"
              style="shadow-blue-200/60"
              goTo="Comprar tokens"
              titleColor="text-[#18A5FF]"
              goToColor="text-[#18A5FF]"
            />
          </div>

          <div className="absolute xl:left-[calc(100%-10%)] left-[calc((100%-10%)+45px)] top-[calc(100%-220px+50px-1vh)]">
            <StepsCard
              image={ProfitStep}
              title="Recibe utilidad y crece tu cartera"
              description="Repite el proceso y aumenta tu patrimonio"
              style="shadow-purple-200/50"
              goTo=" Más información "
              titleColor="text-[#8C06B1]"
              goToColor="text-[#8C06B1]"
            />
          </div>
        </div>
      </div>

      {/** Mobile Steps display */}
      <div className="w-full h-[800px] lg:hidden flex flex-col items-start gap-10">
        <div className="flex flex-col justify-start items-start w-full h-fit pl-[5%]">
          <p className="text-left text-[#062147] font-bold leading-[1.5em] text-[2em]">
            Estaremos en cada
          </p>
          <p className="text-left font-bold leading-[2em] text-[3em] text-[#17a5ff]">
            Paso <span className="opacity-30">a paso</span>
          </p>
          <p className="text-left text-[#062147] font-bold leading-[1.5em] text-[2em]">
            para ti
          </p>
        </div>

        <div className="flex carousel w-full h-fit relative py-8 z-10">
          <div className="carousel-item w-[200px] flex flex-col justify-start items-center gap-8">
            <div className="flex pl-[20px] mt-10 flex-col gap-2">
              <p className="font-normal leading-[20px]"> 📍Estas aquí </p>
              <img src={BoxArrow} alt="" className="h-fit w-[150px]" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <StepsCard
                image={AccountStep}
                title="Únete al camino de la inversión"
                description="¡Accede a oportunidades únicas con Throu!"
                style="shadow-blue-200/60"
                goTo="Regístrate"
                goToColor="text-[#B5B5B5]"
                titleColor="text-[#062147]"
              />
            </div>
          </div>
          <div className="carousel-item w-[300px] flex flex-col justify-start items-center gap-4">
            <div className="flex justify-center w-full mt-[25%]">
              <StepsCard
                image={ChooseStep}
                title="Escoje entre nuestros proyectos"
                description="¡Construye tu portafolio inmobiliario!"
                style=""
                goTo="Explorar"
                titleColor="text-[#062147]"
                goToColor="text-[#062147]"
              />
            </div>
          </div>

          <div className="carousel-item w-[200px] flex flex-col justify-start items-center gap-4">
            <div className="flex justify-center w-full mt-[15%]">
              <StepsCard
                image={BuyStep}
                title="Compra los tokens que desees"
                description="Repite el proceso y aumenta tu patrimonio"
                style="shadow-blue-200/60"
                goTo="Comprar tokens"
                titleColor="text-[#18A5FF]"
                goToColor="text-[#18A5FF]"
              />
            </div>
          </div>

          <div className="carousel-item w-[300px] flex flex-col justify-start items-start">
            <div className="flex justify-center items-start w-full -translate-y-6">
              <StepsCard
                image={ProfitStep}
                title="Recibe utilidad y crece tu cartera"
                description="Repite el proceso y aumenta tu patrimonio"
                style="shadow-purple-200/50"
                goTo=" Más información "
                titleColor="text-[#8C06B1]"
                goToColor="text-[#8C06B1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
