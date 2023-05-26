import React from "react";

import { Throu_sm_dark } from "../../../assets";

const Movements = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      <h2 className=" text-[30px] mt-[30px] font-bold dark:text-white text-black">
        Movimientos
      </h2>
      <div className="flex flex-row items-center justify-between w-full gap-12 mt-[20px] ">
        <div className="flex flex-row items-center gap-6 w-full">
          <div className="flex flex-row items-center justify-start gap-2 flex-wrap">
            <img src={Throu_sm_dark} alt="Throu_icon" className="w-10 h-10" />
            <p className="md:text-[18px] text-[14px] text-[#1FB406] font-semibold">
              Title of the notification
            </p>
            <p className="md:text-[18px] text-[16px] text-black dark:text-white flex flex-wrap break-all">
              Notification text
            </p>
            <p className="md:text-[18px] text-[16px] text-black font-semibold dark:text-white flex flex-wrap break-all">
              Property name
            </p>
          </div>
        </div>

        <p className="text-black dark:text-white w-[100px] text-[18px]">
          {" "}
          June 21{" "}
        </p>
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <p className="text-[20px] md:text-[16px] text-[#18A5FF] cursor-pointer hover:underline">
          {" "}
          Cargar más{" "}
        </p>
      </div>
    </div>
  );
};

export default Movements;
