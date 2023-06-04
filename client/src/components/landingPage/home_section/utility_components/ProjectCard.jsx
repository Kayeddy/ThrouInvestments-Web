import React from "react";
import { SlLocationPin as LocationIcon } from "react-icons/sl";
import { AiOutlinePlus as PlusIcon } from "react-icons/ai";

import { CustomButton } from "../../index";
import { calculateBarPercentage } from "../../../../utils";
import InfoBox from "./InfoBox";

const ProjectCard = ({ project }) => {
  const handleInvestButton = () => {};

  return (
    <div className="flex flex-col shadow-sm w-full md:w-fit md:max-w-[400px] xl:max-w-[500px]  md:max-h-fit max-h-[500px] bg-[#F7FAFF] carousel-item border-6 mx-4 card-box rounded-md">
      {project ? (
        <>
          <div className="relative md:w-fit h-fit w-full font-jakarta">
            <img
              src={project.image}
              alt=""
              className="md:h-[300px]  xl:h-[400px] w-full h-[200px] rounded-t-md object-cover min-h-[200px]"
            />
            <span className="absolute top-2 left-2 rounded-lg p-2 bg-[#76DBDB] text-white font-light">
              Co-living
            </span>
            <span className="absolute top-2 right-2 rounded-lg p-2 bg-[#130D1A66] bg-opacity-50 text-white font-light">
              <span className="font-semibold">25</span> Días restantes
            </span>
          </div>

          <div className="flex flex-col flex-wrap p-4 gap-2">
            <h1 className="text-[24px] xl:text-[25px] leading-[30px] font-semibold font-sen text-[#062147]">
              {project.name}
            </h1>
            <div className="flex flex-col w-full h-fit items-start mt-2">
              <p className="font-jakarta font-medium text-[16px] text-center text-[#18A5FF] animate-pulse">
                {calculateBarPercentage(0.5, 0.1) + "%"} Completo
              </p>
              <div className="relative w-full h-2 bg-slate-300 rounded-[10px]">
                <div
                  className="absolute h-full bg-[#18A5FF] rounded-[10px]"
                  style={{
                    width: `${calculateBarPercentage(0.5, 0.1)}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-3">
              <InfoBox title="Supply" value={"0k"} />
              <InfoBox title="Min" value={"$0"} />
              <InfoBox title="Total" value={"$0"} />
              <InfoBox title="APY" value={"0%"} />
            </div>

            <p className="font-normal font-jakarta leading-[20px] text-[17px] xl:text-[18px] mt-4 text-[#01070E]">
              {project.description}
            </p>
            <p className="font-normal font-jakarta leading-[20px] text-[17px] xl:text-[18px] mt-4 flex flex-row justify-start text-[#01070E]">
              <span className="inline">
                <LocationIcon />
              </span>
              {project.location}
            </p>

            <div className="relative w-full h-[5px] mt-2 pl-1">
              <div className="w-full flex items-center justify-start"></div>
            </div>

            <div className="flex w-full">
              <CustomButton
                title="Invertir"
                handleClick={handleInvestButton}
                styles="bg-[#062147] px-[50px] py-2.5 text-[21px] flex items-center justify-center w-full text-white hover:bg-[#18A5FF]"
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
