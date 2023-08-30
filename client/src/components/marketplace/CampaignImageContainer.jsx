import React from "react";

const CampaignImageContainer = ({ campaignImage }) => {
  return (
    <div className="w-[170px] h-[170px] md:w-[150px] md:h-[100px] carousel-item">
      <img
        src={campaignImage}
        alt="campaign image"
        className="w-full h-full object-fit duration-500"
      />
    </div>
  );
};

export default CampaignImageContainer;
