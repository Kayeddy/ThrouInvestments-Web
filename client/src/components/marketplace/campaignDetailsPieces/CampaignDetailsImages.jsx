import React, { useState } from "react";

import CampaignImageContainer from "../CampaignImageContainer";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";
import DropdownInput from "../DropdownInput";

const CampaignDetailsImages = ({ campaign }) => {
  const [imageCategory, setImageCategory] = useState("Exterior");
  const [displayImages, setDisplayImages] = useState([
    ...campaign.media.exteriorPictures,
  ]);

  const imageCategories = ["Exterior", "Interior"];

  return (
    <div className="md:w-[90%]">
      {/** Desktop render */}
      <div
        className={`hidden md:grid carousel w-${
          displayImages.length > 20 ? "full" : "fit"
        } h-[378px] grid-rows-3 grid-flow-col gap-4 overflow-x-auto scroll-smooth`}
      >
        <div className="carousel-item flex items-center justify-center w-full mb-[30px] md:mb-0 md:w-[150px] md:h-[100px]">
          <div className="w-[150px] flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg py-1 px-10">
            <DropdownInput
              options={imageCategories}
              switchTab={(item) => {
                setImageCategory(item);
                item === "Exterior"
                  ? setDisplayImages(campaign.media.exteriorPictures)
                  : setDisplayImages(campaign.media.interiorPictures);
              }}
              style="text-white text-[20px] font-jakarta"
            />
          </div>
        </div>
        {imageCategories === "Exterior"
          ? displayImages.map((item, index) => (
              <CampaignImageContainer campaignImage={item} key={index} />
            ))
          : displayImages.map((item, index) => (
              <CampaignImageContainer campaignImage={item} key={index} />
            ))}
      </div>

      {/** Mobile render */}
      <div className="md:hidden flex flex-col items-center justify-start w-full">
        <div className="carousel-item flex items-center justify-center w-full mb-[30px] md:mb-0 md:w-[150px] md:h-[100px]">
          <div className="w-[158px] flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg py-1 px-10">
            <DropdownInput
              options={imageCategories}
              switchTab={(item) => {
                setImageCategory(item);
                item === "Exterior"
                  ? setDisplayImages(campaign.media.exteriorPictures)
                  : setDisplayImages(campaign.media.interiorPictures);
              }}
              style="text-white text-[20px] font-jakarta"
            />
          </div>
        </div>

        <div className="carousel w-full h-fit grid grid-rows-3 grid-flow-col gap-6 overflow-x-auto">
          {imageCategories === "Exterior"
            ? displayImages.map((item, index) => (
                <CampaignImageContainer campaignImage={item} key={index} />
              ))
            : displayImages.map((item, index) => (
                <CampaignImageContainer campaignImage={item} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsImages;
