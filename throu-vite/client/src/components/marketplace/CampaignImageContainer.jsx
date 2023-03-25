import React from "react";

const CampaignImageContainer = ({ campaignImage }) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-3">
      <img
        src={campaignImage}
        alt="campaign image"
        className="w-[158px] h-[158px] object-cover rounded-[15px] duration-500"
      />
    </div>
  );
};

export default CampaignImageContainer;
