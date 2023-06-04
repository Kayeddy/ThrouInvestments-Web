import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlLocationPin as LocationIcon } from "react-icons/sl";

import { Favorites_icon, tagType, throu } from "../../assets";
import { CustomButton } from "../marketplace";
import { calculateBarPercentage } from "../../utils";

const CampaignDisplayCard = ({
  projectURI,
  projectPrice,
  projectSales,
  projectImage,
  projectName,
  handleClick,
}) => {
  return (
    <div className="md:max-w-[500px] w-full h-fit dark:bg-[#01070E] dark:bg-opacity-20 bg-[#F7FAFF] rounded-sm">
      <div className="flex flex-col flex-wrap relative">
        <img
          src={projectImage}
          alt="campaign image"
          className="w-full h-[200px] object-cover rounded-sm duration-500"
        />

        <div className="absolute top-0 flex flex-row justify-between items-center w-full p-3 font-jakarta">
          <div className="p-2 rounded-md h-[30px] text-white bg-[#76DBDB] flex items-center justify-center">
            <p className="text-[12px]"> Turismo </p>
          </div>
          <div className="bg-[#01070E80] backdrop-blur-sm p-1 rounded-md flex items-center">
            <span className="material-symbols-outlined text-white">
              Bookmark
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-start justify-center w-full gap-4 px-3 dark:text-white text-[#062147] font-bold md:font-normal">
        <h3 className="text-[25px] md:text-[20px] font-bold">
          {" "}
          {projectName ? projectName : "Nombre"}{" "}
        </h3>

        <div className="w-full flex flex-col gap-1 ">
          <p className="text-[#18A5FF]">#% completado </p>
          <div className="w-full dark:bg-white bg-[#B5B5B5] rounded-[10px]">
            <div
              className="h-[10px] bg-[#18A5FF] rounded-[10px]"
              style={{
                width: `${calculateBarPercentage(0.5, 0.1)}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-3 md:gap-4 w-full">
          {[
            { name: "Supply", amount: "80k" },
            { name: "Min", amount: "$822" },
            { name: "Total", amount: "$1.2M" },
            { name: "APY", amount: "10%" },
          ].map((item, index) => (
            <div className="max-w-[60px] w-[30%] h-[50px] py-2 dark:bg-[#01070E] bg-[#F7FAFF] backdrop-blur-lg rounded-lg shadow-[0px_0px_10px_rgba(24,165,255,0.2)] flex flex-col items-center justify-center">
              <h3 className="text-[15px] font-[600px]"> {item.amount} </h3>
              <p className="text-[12px]"> {item.name} </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full dark:text-white text-[#01070E] px-3 font-[400px] md:font-normal">
        <p className="leading-[20px] text-[14px] mt-4 w-[90%] font-jakarta">
          Purus egestas id aenean non accumsan fames in eu
        </p>
        <p className="leading-[20px] text-[14px] mt-4 flex flex-row justify-center items-center gap-1 font-jakarta text-[#01070E]">
          <span className="material-symbols-outlined text-[#01070E]">
            location_on
          </span>
          007 Eloisa Extensions
        </p>
      </div>

      <div className="w-full p-3">
        <CustomButton
          title="Invertir"
          handleClick={handleClick}
          styles="bg-[#18A5FF] px-[50px] py-[10px] flex items-center justify-center w-full md:h-[60px] h-[50px] rounded-none hover:bg-transparent text-white hover:text-[#18A5FF] hover:border-[3px] hover:border-[#18A5FF]"
        />
      </div>
    </div>
  );
};

export default CampaignDisplayCard;
