import React from "react";
import { SlLocationPin as LocationIcon } from "react-icons/sl";
import { AiOutlinePlus as PlusIcon } from "react-icons/ai";

import { CustomButton } from "../../index";
import { calculateBarPercentage } from "../../../../utils";

const ProjectCard = ({ project }) => {
  const handleInvestButton = () => {};

  return (
    <div className="flex flex-col shadow-lg lg:max-h-fit lg:w-[500px] mx-h-[500px] w-[80%] bg-white carousel-item border-6 mx-4 card-box rounded-md">
      {project ? (
        <>
          <img
            src={project.image}
            alt=""
            className="lg:w-[500px] lg:h-[400px] w-full h-[50%] rounded-t-md"
          />

          <div className="flex flex-col flex-wrap p-4 gap-2">
            <h1 className="text-[25px] leading-[30px] font-normal text-[#062147]">
              {project.name}
            </h1>
            <p className="font-normal leading-[20px] text-[18px] mt-4">
              {project.description}
            </p>
            <p className="font-normal leading-[20px] text-[18px] mt-4 flex flex-row justify-start">
              <span className="inline">
                <LocationIcon />
              </span>
              {project.location}
            </p>

            <div className="relative w-full h-[5px] mt-2 pl-1">
              <div className="w-full flex items-center justify-start">
                <p className="font-epilogue font-medium text-[16px] leading-[30px] text-center text-[#808191] animate-pulse">
                  {calculateBarPercentage(0.5, 0.1) + "%"} para completar
                </p>
              </div>
              <div
                className="absolute h-full bg-[#18A5FF] rounded-[10px] mt-2"
                style={{
                  width: `${calculateBarPercentage(0.5, 0.1)}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>

            <div className="flex w-full mt-12">
              <CustomButton
                title="Invertir"
                handleClick={handleInvestButton}
                styles="bg-[#062147] px-[50px] py-[10px] flex items-center justify-center w-full h-[40px]"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-16 items-center justify-center w-full h-full text-center bg-[#062147] rounded-md">
          <span className="p-4 border-2 border-[#17a5ff] rounded-lg w-[100px] h-[100px] flex justify-center items-center text-[#17a5ff]">
            <PlusIcon className="h-[100px] w-[100px]" />
          </span>
          <h1 className="text-[35px] leading-[30px] font-semibold text-[#17a5ff]">
            Conoce todos nuestros proyectos
          </h1>
          <a href="" className="text-slate-400 font-normal">
            Ir a Marketplace
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
