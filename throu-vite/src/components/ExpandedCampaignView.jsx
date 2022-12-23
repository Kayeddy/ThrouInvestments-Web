import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { CustomButton } from "../components";
import { tagType } from "../assets";
import { throu } from "../assets";

const ExpandedCampaignView = ({ campaign, closeOverlay }) => {
  const [currentCampaignImage, setCurrentCampaignImage] = useState(
    campaign.image[0]
  );

  const mainVariants = {
    open: {
      opacity: 1,
      tansition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-5vh" },
  };

  const infoVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.5 } },
    closed: { opacity: 0, x: "10%" },
  };

  const leftScrollImage = (current) => {
    const imageArr = campaign.image;
    if (campaign.image.indexOf(current) != 0) {
      setCurrentCampaignImage(imageArr[imageArr.indexOf(current) - 1]);
    } else {
      setCurrentCampaignImage(imageArr[imageArr.length - 1]);
    }
    console.log(imageArr.indexOf(current));
  };

  const rightScrollImage = (current) => {
    const imageArr = campaign.image;
    if (campaign.image.indexOf(current) != imageArr.length - 1) {
      setCurrentCampaignImage(imageArr[imageArr.indexOf(current) + 1]);
    } else if (campaign.image.indexOf(current) == imageArr.length - 1) {
      setCurrentCampaignImage(campaign.image[0]);
    }
    console.log(imageArr.indexOf(current));
  };

  return (
    <motion.div
      className="flex flex-wrap flex-col lg:flex-row bg-[#1c1c24] w-[80%] min-h-[600px] p-4 rounded-[25px] shadow-md md:items-center md:mt-[10%] relative mb-[20px]"
      variants={mainVariants}
    >
      <motion.div className="flex flex-col justify-center h-full lg:w-[60%]">
        <motion.img
          className="w-full h-auto object-cover rounded-[20px] duration-500"
          src={currentCampaignImage}
          alt={`images for: ${campaign.title}`}
          variants={imageVariants}
        />
        <motion.div className="justify-center items-center mt-[15px] w-full gap-2 flex">
          <motion.span
            className="rounded-full p-2 bg-black/20 text-white cursor-pointer w-fit"
            onClick={() => {
              leftScrollImage(currentCampaignImage);
            }}
          >
            <BsChevronCompactLeft />
          </motion.span>

          <motion.span
            className="rounded-full p-2 bg-black/20 text-white cursor-pointer w-fit"
            onClick={() => {
              rightScrollImage(currentCampaignImage);
            }}
          >
            <BsChevronCompactRight />
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col flex-wrap justify-center items-center md:w-[40%] h-full mt-[25px]"
        variants={infoVariants}
      >
        <motion.h3
          className={`font-epilogue font-semibold text-[24px] text-white leading-26px text-center`}
        >
          {campaign.title}
        </motion.h3>
        <motion.div className="flex flex-row items-center my-[18px]">
          <motion.img
            src={tagType}
            alt="campaign type"
            className="w-[17px] h-[17px] object-contain"
          />
          <motion.p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Categoría
          </motion.p>
        </motion.div>
        <motion.div className="flex justify-between flex-wrap mt-[15px] gap-10">
          <motion.div className="flex flex-col">
            <motion.h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              Recaudado: {campaign.amountCollected}
            </motion.h4>
            <motion.p
              className={`mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] `}
            >
              de {campaign.target}
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col">
            <motion.h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              30
            </motion.h4>
            <motion.p
              className={`mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] `}
            >
              Días restantes
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-wrap p-5">
          <motion.p
            className={`mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] `}
          >
            {campaign.description}
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center mt-[20px] gap-[12px]">
          <motion.div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <motion.img
              src={throu}
              alt="profile image"
              className="w-1/2 h-1/2 object-contain"
            />
          </motion.div>
          <motion.p
            className={`flex-1 font-epilogue font-normal text-[12px] text-[#808191] `}
          >
            Publicado por:{" "}
            <motion.span className="text-[#b2b3bd]">
              {campaign.owner}
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-11 mt-6">
          <CustomButton
            type="button"
            title="Volver"
            styles="min-h-[42px]  bg-[#8c6dfd]"
            handleClick={closeOverlay}
          />
          <CustomButton
            type="button"
            title="Invertir"
            styles="min-h-[42px] bg-[#18b2de] "
            handleClick={() => {}}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedCampaignView;
