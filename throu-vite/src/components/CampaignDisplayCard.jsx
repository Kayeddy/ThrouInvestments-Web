import React, { useState } from "react";
import { motion } from "framer-motion";

import { tagType } from "../assets";
import { throu } from "../assets";

const CampaignDisplayCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  return (
    <motion.div
      className="sm:w-[288px] w-full rounded-3xl bg-[#1c1c24] hover:cursor-pointer backdrop-blur-[4px]"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex flex-col flex-wrap">
        <img
          src={image[0]}
          alt="campaign image"
          className="w-full h-[158px] object-cover rounded-[15px] duration-500"
        />
      </div>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img
            src={tagType}
            alt="campaign type"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Categoría
          </p>
        </div>
        <div className="block">
          <h3
            className={`font-epilogue font-semibold text-[16px] text-white text-left leading-26px truncate`}
          >
            {title}
          </h3>
          <p
            className={`mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate`}
          >
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              Recaudado: {amountCollected}
            </h4>
            <p
              className={`mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] truncate`}
            >
              de {target}
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              30
            </h4>
            <p
              className={`mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] truncate`}
            >
              Días restantes
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={throu}
              alt="profile image"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p
            className={`flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate`}
          >
            Publicado por: <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignDisplayCard;
