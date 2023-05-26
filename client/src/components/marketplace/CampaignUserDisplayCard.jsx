import React from "react";
import { Favorites_icon } from "../../assets";

const CampaignUserDisplayCard = ({ projectImage }) => {
  return (
    <div className="carousel-item flex flex-col md:max-w-[300px] items-center justify-center w-fit h-fit dark:bg-transparent bg-[#F7FAFF] backdrop-blur-md dark:bg-opacity-0 rounded-sm cursor-pointer">
      <div className="relative w-full">
        <img
          src={projectImage}
          alt="campaign image"
          className="w-full h-[350px] object-cover rounded-sm duration-500"
        />

        <div className="absolute top-0 flex flex-row justify-between items-center w-full p-4">
          <div className="p-2 rounded-md h-[30px] text-white bg-[#76DBDB] flex items-center justify-center">
            <p className="text-[12px]"> Turismo </p>
          </div>
          <div className="bg-[#01070E80] backdrop-blur-sm p-1 rounded-md flex items-center">
            <span className="material-symbols-outlined text-white">
              Bookmark
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 bg-transparent backdrop-blur-lg rounded-b-sm w-full">
          <div className="flex flex-col gap-1 w-full h-fit p-4 items-center justify-center bg-[#F7FAFF] opacity-80">
            <h2 className="md:text-[20px] text-[20px] font-bold text-[#062147] font-jakarta">
              Nombre del proyecto
            </h2>
            <span className="flex flex-row items-center justify-center w-full">
              <h2 className="md:text-[22px] text-[20px] font-bold text-[#062147]">
                23 tokens
              </h2>
              <p className="text-[15px] text-slate-300 ml-[10px] font-normal">
                {" "}
                = $34,000 USDT
              </p>
            </span>

            <h2 className="text-[#18A5FF] md:text-[23px] text-[20px] font-bold contrast-100">
              Eres socio (3%)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignUserDisplayCard;
