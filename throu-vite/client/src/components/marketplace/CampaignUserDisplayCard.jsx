import React from "react";
import { Favorites_icon } from "../../assets";

const CampaignUserDisplayCard = ({ projectImage }) => {
  return (
    <div className="md:max-w-[500px] w-fit h-fit dark:bg-transparent bg-[#F7FAFF] dark:bg-opacity-0  rounded-sm cursor-pointer">
      <div className="flex flex-col flex-wrap relative">
        <div className="flex relative w-fit">
          <img
            src={projectImage}
            alt="campaign image"
            className="w-[330px] h-[200px] object-cover rounded-sm duration-500"
          />

          <div className="absolute top-0 flex flex-row justify-between items-center w-full p-4">
            <div className="p-2 rounded-full h-[30px] text-white bg-[#76DBDB] flex items-center justify-center">
              <p className="text-[12px]"> Turismo </p>
            </div>
            <div className="bg-[#01070E80] backdrop-blur-sm p-1 rounded-md">
              <img
                src={Favorites_icon}
                alt="Save to favorites"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-[90%] p-4">
        <h2 className="md:text-[20px] text-[20px] font-bold">
          {" "}
          Nombre del proyecto{" "}
        </h2>
        <span className="flex flex-row items-center justify-center w-full">
          <h2 className="md:text-[20px] text-[20px] font-bold">
            {" "}
            Cantidad de tokens{" "}
          </h2>
          <p className="text-[15px] text-slate-300">
            {" "}
            cantidad convertida de tokens
          </p>
        </span>

        <h2 className="text-[#18A5FF] md:text-[23px] text-[20px]">
          {" "}
          Socio (3%)
        </h2>
      </div>
    </div>
  );
};

export default CampaignUserDisplayCard;
