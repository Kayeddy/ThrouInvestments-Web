import React from "react";

import { Throu_sm, Throu_sm_dark } from "../../../assets";

const CampaignDetailsUpdates = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between w-full gap-12">
        <div className="flex flex-row items-center gap-6 w-full">
          <img
            src={Throu_sm_dark}
            alt="Throu_logo"
            className="w-[60px] h-[60px] md:block hidden"
          />

          <div className="flex flex-row items-center justify-start gap-2 flex-wrap">
            <p className="md:text-[18px] text-[14px] text-[#18A5FF] font-semibold">
              Title of the notification
            </p>
            <p className="md:text-[18px] text-[16px] text-black dark:text-white flex flex-wrap break-all">
              Notification text
            </p>
          </div>
        </div>

        <p className="text-black dark:text-white w-[100px] text-[18px]">
          {" "}
          June 21{" "}
        </p>
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <p className="text-[20px] md:text-[16px] text-[#18A5FF]">
          {" "}
          Cargar más{" "}
        </p>
      </div>
    </div>
  );
};

export default CampaignDetailsUpdates;
