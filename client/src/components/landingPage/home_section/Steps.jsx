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
import { useNavigate } from "react-router-dom";

const Steps = ({ showRegistrationModal }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-fit md:min-h-screen items-center justify-start md:pl-[7%] overflow-hidden mt-12 md:mt-0">
      <div className="w-full h-full flex-col md:flex hidden items-start justify-start">
        <div className="flex flex-col gap-2 justify-start items-start w-full h-fit md:pl-[10%] relative">
          <p className="text-left text-[#062147] font-bold leading-[50px] text-[40px]">
            Estaremos en cada
          </p>
          <p className="text-left font-bold leading-[74px] text-[60px] text-[#17a5ff]">
            <span className="opacity-30">Paso</span> a paso
          </p>
          <p className="text-left text-[#062147] font-bold leading-[50px] text-[40px]">
            para ti
          </p>
        </div>

        <div className="w-full h-fit ml-[5%] mt-[-15%] mb-[30px] lg:mb-0">
          <img src={StepsLine} alt="" />
        </div>

        <div className="relative w-full flex max-w-[90%] font-jakarta pr-10">
          <div className="absolute left-0 lg:top-[30px]">
            <StepsCard
              image={AccountStep}
              iconStyle="h-[50px] w-[43px]"
              title={
                <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#062147]">
                  Únete al camino de la{" "}
                  <span className="text-[17px] lg:text-[20px] font-bold block">
                    inversión
                  </span>
                </h2>
              }
              description="¡Accede a oportunidades únicas con Throu! "
              style="shadow-blue-custom"
              goTo="Regístrate"
              goToColor="text-[#B5B5B5]"
              handleReferenceClick={() => showRegistrationModal(true)}
            />
          </div>

          <div className="absolute left-[24vw] lg:left-[23.5vw] lg:top-[-4vw] md:top-[-60px]">
            <StepsCard
              image={ChooseStep}
              iconStyle="h-[50px] w-[48px]"
              title={
                <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#062147]">
                  Escoje entre{" "}
                  <span className="md:text-[17px] lg:text-[20px] font-bold block">
                    nuestros proyectos
                  </span>
                </h2>
              }
              description="¡Construye tu portafolio inmobiliario!"
              style="shadow-gray-custom"
              goTo="Explorar"
              goToColor="text-[#062147]"
              handleReferenceClick={() => navigate("/marketplace")}
            />
          </div>

          <div className="absolute left-[47vw] xl:left-[48vw] lg:top-[-8vw] xl:top-[-9vw] md:top-[-14vw]">
            <StepsCard
              image={BuyStep}
              iconStyle="h-[50px] w-[50px]"
              title={
                <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#18A5FF]">
                  Compra los tokens{" "}
                  <span className="md:text-[17px] lg:text-[20px] font-bold block">
                    que desees
                  </span>
                </h2>
              }
              description="Repite el proceso y aumenta tu patrimonio"
              style="shadow-blue-custom"
              goTo="Comprar tokens"
              goToColor="text-[#18A5FF]"
              handleReferenceClick={() => navigate("/marketplace")}
            />
          </div>

          <div className="absolute left-[70.5vw] xl:left-[71vw] lg:top-[-14vw] md:top-[-21vw]">
            <StepsCard
              image={ProfitStep}
              iconStyle="h-[50px] w-[45px]"
              title={
                <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#8C06B1]">
                  Recibe utilidad y{" "}
                  <span className="md:text-[17px] lg:text-[20px] font-bold block">
                    crece tu cartera
                  </span>
                </h2>
              }
              description="Repite el proceso y aumenta tu patrimonio"
              style="shadow-purple-custom"
              goTo=" Más información "
              goToColor="text-[#8C06B1]"
              handleReferenceClick={() => navigate("/aprende")}
            />
          </div>
        </div>
      </div>

      {/** Mobile Steps display */}
      <div className="w-full md:hidden flex flex-col items-start gap-10 md:mb-0">
        <div className="flex flex-col justify-start items-start w-full h-fit pl-[7%]">
          <p className="text-left text-[#062147] font-bold leading-[1.5em] text-[2em]">
            Estaremos en cada
          </p>
          <p className="text-left font-bold leading-[1.5em] text-[3em] text-[#17a5ff]">
            Paso <span className="opacity-30">a paso</span>
          </p>
          <p className="text-left text-[#062147] font-bold leading-[1.5em] text-[2em]">
            para ti
          </p>
        </div>

        <div className="flex carousel w-full h-fit relative py-8 pb-16 md:pb-0 z-10 overflow-x-auto">
          <div className="carousel-item flex flex-col justify-start items-center gap-8 pl-1 w-full">
            <div className="flex flex-col justify-center items-center">
              <StepsCard
                image={AccountStep}
                iconStyle="h-[38px] w-[30px]"
                title={
                  <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#062147]">
                    Únete al camino de la{" "}
                    <span className="text-[17px] lg:text-[20px] font-bold block">
                      inversión
                    </span>
                  </h2>
                }
                description="¡Accede a oportunidades únicas con Throu!"
                style="shadow-blue-custom"
                goTo="Regístrate"
                goToColor="text-[#B5B5B5]"
              />
            </div>
          </div>
          <div className="carousel-item w-full flex flex-col justify-start items-center gap-4">
            <div className="flex justify-center w-[85%]">
              <StepsCard
                image={ChooseStep}
                iconStyle="h-[35px] w-[32px]"
                title={
                  <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#062147]">
                    Escoje entre{" "}
                    <span className="md:text-[17px] lg:text-[20px] font-bold block">
                      nuestros proyectos
                    </span>
                  </h2>
                }
                description="¡Construye tu portafolio inmobiliario!"
                style="shadow-gray-custom"
                goTo="Explorar"
                goToColor="text-[#062147]"
              />
            </div>
          </div>

          <div className="carousel-item w-full flex flex-col justify-start items-center gap-4">
            <div className="flex justify-center w-[85%]">
              <StepsCard
                image={BuyStep}
                iconStyle="h-[35px] w-[33px]"
                title={
                  <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#18A5FF]">
                    Compra los tokens{" "}
                    <span className="md:text-[17px] lg:text-[20px] font-bold block">
                      que desees
                    </span>
                  </h2>
                }
                description="Repite el proceso y aumenta tu patrimonio"
                style="shadow-blue-custom"
                goTo="Comprar tokens"
                goToColor="text-[#18A5FF]"
              />
            </div>
          </div>

          <div className="carousel-item w-full flex flex-col justify-start items-start">
            <div className="flex justify-center items-start w-[85%] ml-8">
              <StepsCard
                image={ProfitStep}
                iconStyle="h-[35px] w-[33px]"
                title={
                  <h2 className="font-semibold font-jakarta leading-[20px] md:text-[14px] lg:text-[17px] text-center text-[#8C06B1]">
                    Recibe utilidad y{" "}
                    <span className="md:text-[17px] lg:text-[20px] font-bold block">
                      crece tu cartera
                    </span>
                  </h2>
                }
                description="Repite el proceso y aumenta tu patrimonio"
                style="shadow-purple-custom"
                goTo=" Más información "
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
