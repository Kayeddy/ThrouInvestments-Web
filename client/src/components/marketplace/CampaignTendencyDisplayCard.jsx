import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { SlLocationPin as LocationIcon } from "react-icons/sl";

import { calculateBarPercentage } from "../../utils";

const CampaignTendencyDisplayCard = ({
  projectURI,
  projectPrice,
  projectSales,
  handleClick,
  ProjectImage,
  additionalStyle,
}) => {
  return (
    <>
      {/** Desktop Display*/}

      <div
        className={`md:flex hidden h-[350px] w-[380px] hover:w-[700px] transition-all duration-500 overflow-visible flex-shrink-0`}
      >
        <div
          className={`flex flex-col flex-wrap relative min-w-full group ${
            additionalStyle
              ? additionalStyle
              : "transform transition-transform duration-500 hover:scale-100"
          }`}
        >
          <img
            src={ProjectImage}
            alt="campaign image"
            className={`w-full h-full object-cover group-hover:blur-[1px] ${additionalStyle}`}
          />
          <div className="absolute top-0 hidden md:flex flex-row justify-between items-center w-full p-4 font-jakartas">
            <div className="p-2 rounded-md h-[30px] text-white bg-[#76DBDB] flex items-center justify-center">
              <p className="text-[12px]"> Turismo </p>
            </div>
            <div className="bg-[#01070E80] backdrop-blur-sm p-1 rounded-md">
              <p className="text-[12px] text-white"> 24 dias restantes </p>
            </div>
          </div>

          <div className="absolute top-0 bottom-0 left-0 right-0 hidden group-hover:flex transition ease-in-out delay-300 duration-500 items-center justify-center">
            <a href="" className="text-white text-[17px]">
              Más info
            </a>
          </div>
          <div className="absolute min-w-full h-[90px] py-2 px-4 bottom-0 hidden items-center justify-between group-hover:flex bg-[#01070E80] backdrop-blur-[4px]">
            <div className="flex flex-col items-start justify-start">
              <p className="text-white">Nombre del proyecto</p>
              <span className="flex flex-row w-full gap-1 items-center justify-start">
                <LocationIcon className="text-[#18A5FF] text-[15px]" />
                <p className="text-white text-[12px] font-jjakarta">
                  Direccion del proyecto
                </p>
              </span>
            </div>
            <div className="w-[40%] flex flex-col justify-start items-start gap-1">
              <h3 className="text-white text-[17px]">59% para completar</h3>
              <div className="w-full bg-white rounded-[10px]">
                <div
                  className="h-[10px] bg-[#18A5FF] rounded-[10px]"
                  style={{
                    width: `${calculateBarPercentage(0.5, 0.1)}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
              <p className="text-slate-400 text-[12px]"> De: $1.450,700 </p>
            </div>
          </div>
        </div>
      </div>

      {/** Mobile Display*/}

      <div className="carousel-item md:hidden flex w-full h-[200px] rounded-sm">
        <div className="flex flex-col flex-wrap relative w-full">
          <img
            src={ProjectImage}
            alt="campaign image"
            className="w-full h-[250px] object-cover rounded-sm"
          />

          <div className="absolute flex w-full h-[67px] py-3 px-2 bottom-0 items-center justify-between gap-4 bg-[#01070E80] backdrop-blur-sm rounded-b-sm">
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-white font-bold font-jakarta text-[20px]">
                Pauline Field
              </p>
              <span className="flex flex-row w-full gap-1 items-center justify-start">
                <LocationIcon className="text-[#18A5FF] text-[12px]" />
                <p className="text-white text-[12px] font-jjakarta">
                  Direccion del proyecto
                </p>
              </span>
            </div>
            <div className="w-[40%] flex flex-col justify-start items-start gap-1">
              <h3 className="text-[#18A5FF] text-[14px] font-bold">
                59% completado
              </h3>
              <div className="w-full bg-white rounded-[10px]">
                <div
                  className="h-[10px] w-full bg-[#18A5FF] rounded-[10px]"
                  style={{
                    width: `${calculateBarPercentage(0.5, 0.1)}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
              <p className="text-slate-400 text-[12px]"> De: $1.450,700 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignTendencyDisplayCard;
