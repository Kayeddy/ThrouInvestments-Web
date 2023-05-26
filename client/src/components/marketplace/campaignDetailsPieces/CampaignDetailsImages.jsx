import React from "react";

import CampaignImageContainer from "../CampaignImageContainer";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";

const CampaignDetailsImages = ({ campaign }) => {
  return (
    <div>
      <div className="carousel flex flex-row flex-wrap items-center justify-center md:justify-start gap-4">
        <div className="flex items-center justify-center w-full mb-[30px] md:mb-0 md:w-[158px] md:h-[158px]">
          <div className="flex w-full flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg p-2">
            <span className="text-[15px] text-white flex items-center justify-center">
              <DownArrow />
            </span>
            <p className="text-white text-[18px]"> Interior </p>
          </div>
        </div>
        <CampaignImageContainer campaignImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777731086-8G94TEZ8V1JYLACAUE5D/courtyard+LR.jpg?format=1000w" />
        <CampaignImageContainer campaignImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777839218-O1KWMXOY36S9DKVGF38N/BBQ+area+LR.jpg" />
        <CampaignImageContainer campaignImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
        <CampaignImageContainer campaignImage="https://i2.au.reastatic.net/800x600/d434bc97c3cfe3e0ca5b21191667303ca94f0b856052ab661ac08add95cbe890/main.jpg" />
        <CampaignImageContainer campaignImage="https://c1.wallpaperflare.com/preview/127/559/636/single-family-house-property-modern-suburban.jpg" />
        <CampaignImageContainer campaignImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777636042-3POM26I0YJXZ4VCVXL9K/street+view+2k.jpg" />
      </div>
    </div>
  );
};

export default CampaignDetailsImages;
