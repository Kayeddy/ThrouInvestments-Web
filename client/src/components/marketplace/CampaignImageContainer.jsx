import React from "react";

const CampaignImageContainer = ({ campaignImage }) => {
  return (
    <div className="w-fit h-fit">
      <img
        src={campaignImage}
        alt="campaign image"
        className="w-[158px] h-[158px] object-cover duration-500"
      />
    </div>
  );
};

export default CampaignImageContainer;
