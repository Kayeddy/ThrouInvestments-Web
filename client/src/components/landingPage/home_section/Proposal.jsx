import React from "react";
import { contributors } from "../../../constants";

const Proposal = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center px-[7%] md:px-[6%] overflow-hidden">
      <div className="flex w-full h-full flex-col items-start justify-around lg:items-center gap-4">
        <div className="flex flex-col items-start w-full justify-start gap-4">
          <p className="font-normal text-[#B5B5B5] lg:leading-[36px] md:text-[25px] xl:text-[30px] leading-[20px] text-[1.5rem]">
            Confían en nosotros
          </p>

          <div className="carousel flex items-center justify-between gap-[150px] w-full h-[fit]">
            {contributors.map((item) => (
              <div
                className="carousel-item flex flex-row items-start justify-between w-[150px] lg:w-fit"
                key={item.name}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${item.styles}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 text-[#062147]">
          <h1 className="md:text-[50px] xl:text-[60px] text-[30px] lg:leading-[84px] leading-[30px] font-bold">
            Sé parte de la evolución
          </h1>
          <p className="font-normal lg:text-[18px] text-[15px] lg:leading-[25.2px] leading-[18px] text-center lg:w-[60%] font-jakarta">
            Experimenta la
            <span className="font-semibold">
              {" "}
              transparencia y la seguridad{" "}
            </span>
            de la tecnología blockchain mientras maximiza el rendimiento de sus
            inversiones inmobiliarias.
          </p>
        </div>

        <div className="flex flex-col flex-wrap w-full items-center justify-center text-center gap-10 text-[#062147]">
          <div className="flex flex-col w-full items-center justify-center text-center gap-10 text-[#062147]">
            <h1 className="lg:text-[40px] lg:leading-[50px] text-[20px] leading-[20px] text-center font-bold">
              Estamos aquí para
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-0 w-full text-[#062147]">
            <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:pr-3 md:px-2 px-3 flex flex-col items-center justify-between">
              <h3 className="font-bold text-[25px] leading-[36px]">Promover</h3>
              <p className="font-normal text-[16px] leading-[24px] font-jakarta">
                Inversiones de bajo riego y alta rentabilidad.
              </p>
              <a
                href=""
                className="font-normal text-[18px] text-[#18A5FF] md:text-[#062147] "
              >
                Conocer más
              </a>
              <div className="md:hidden border-b-2 w-[100px] mt-[10%] border-[#062147]"></div>
            </div>

            <div className="hidden md:block border-b-2 h-[150px] w-[2px] bg-[#062147]" />

            <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:px-3 md:px-2 px-3  lg:py-0 flex flex-col items-center justify-between text-center">
              <h3 className="font-bold text-[25px] leading-[36px]">Crear</h3>
              <p className="font-normal text-[16px] leading-[24px] font-jakarta">
                Los tokens según el valor del proyecto.
              </p>
              <a
                href=""
                className="font-normal text-[18px]  text-[#18A5FF] md:text-[#062147] "
              >
                Conocer más
              </a>
              <div className="md:hidden border-b-2 w-[100px] mt-[10%] border-[#062147]"></div>
            </div>

            <div className="hidden md:block border-b-2 h-[150px] w-[2px] bg-[#062147]" />

            <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:px-3 md:px-2 px-3 lg:py-0 flex flex-col items-center justify-between text-center">
              <h3 className="font-bold text-[25px] leading-[36px]">Vincular</h3>
              <p className="font-normal text-[16px] leading-[24px] font-jakarta">
                Legalmente los tokens a la propiedad.
              </p>
              <a
                href=""
                className="font-normal text-[18px] text-[#18A5FF] md:text-[#062147] "
              >
                Conocer más
              </a>
              <div className="md:hidden border-b-2 w-[100px] mt-[10%] border-[#062147]"></div>
            </div>

            <div className="hidden md:block border-b-2 h-[150px] w-[2px] bg-[#062147]" />

            <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:px-3 md:px-2 px-3 lg:py-0 flex flex-col items-center justify-between">
              <h3 className="font-bold text-[25px] leading-[36px]">
                Administrar
              </h3>
              <p className="font-normal text-[16px] leading-[24px] font-jakarta">
                {" "}
                La ejecución del proyecto y su rendimiento.
              </p>{" "}
              <a
                href=""
                className="font-normal text-[18px]  text-[#18A5FF] md:text-[#062147] "
              >
                Conocer más
              </a>
              <div className="md:hidden border-b-2 w-[100px] mt-[10%] border-[#062147]"></div>
            </div>

            <div className="hidden md:block border-b-2 h-[150px] w-[2px] bg-[#062147]" />

            <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:px-3 md:px-2 px-3 lg:py-0 flex flex-col items-center justify-between">
              <h3 className="font-bold text-[25px] leading-[36px]">
                Distribuir
              </h3>
              <p className="font-normal text-[16px] leading-[24px] font-jakarta">
                La rentabilidad con contratos inteligentes.
              </p>
              <a
                href=""
                className="font-normal text-[18px] text-[#18A5FF] md:text-[#062147] "
              >
                Conocer más
              </a>
              <div className="md:hidden border-b-2 w-[100px] mt-[10%] border-[#062147]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
