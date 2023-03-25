import React, { useState } from "react";
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import { GiReceiveMoney as InvestIcon } from "react-icons/gi";

import { throu, tagType } from "../../../assets";
import { CustomButton } from "../../marketplace";

const CampaignDetailsBody = ({ campaign }) => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-around">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-[30px] font-bold dark:text-white text-[#01070E]">
            Nombre del proyecto
          </h2>
          <div className="flex md:hidden flex-row items-center justify-center gap-3">
            <span className="rounded-full text-white px-2 bg-[#76DBDB] flex items-center justify-center">
              <p className="text-[13px]">Categoría</p>
            </span>
            <span className="rounded-full text-white px-2 bg-[#B576DB] flex items-center justify-center">
              <p className="text-[13px]">Tipo de retorno</p>
            </span>
          </div>
          <p className="max-w-[80%] dark:text-[#F7FAFF] md:text-[18px] text-[14px] text-[#01070E] font-light">
            Eget scelerisque imperdiet vulputate dignissim. Tempus netus
            maecenas sollicitudin imperdiet. Malesuada eu sit pharetra turpis
            pharetra sed varius morbi. Lacus elit lectus ut blandit. Elit cursus
            metus sagittis est phasellus lectus cursus. Ac tincidunt egestas sed
            volutpat non sollicitudin amet egestas neque. Egestas purus faucibus
            augue at sem amet aliquam. Ut aliquam elementum non eros libero
            vitae blandit ac. Et et vitae enim nisl. Quis praesent montes amet
            risus malesuada.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-start gap-3 w-full">
            <p className="text-[17px] text-[black] dark:text-white hidden md:block">
              {" "}
              Categoría:{" "}
            </p>
            <span className="rounded-full text-white px-2 py-1 bg-[#76DBDB] hidden md:flex items-center justify-center">
              <p className="text-[13px]">Categoría</p>
            </span>
            <div className="md:hidden flex flex-row gap-4 items-center justify-start text-[#01070E] w-full">
              <span>Location icon</span>
              <p className="dark:text-white text-black">Location</p>
            </div>
            <div className="md:hidden flex items-center justify-center w-full">
              <img
                src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
                alt=""
                className="w-full h-[250px] grayscale object-cover mt-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsBody;
