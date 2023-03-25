import React from "react";
import CampaignImageContainer from "../CampaignImageContainer";

const CampaignDetailsImages = ({ campaign }) => {
  return (
    <div>
      <div
        className={`flex flex-wrap mt-[20px] gap-[26px]"
        }`}
      >
        {/* campaign.image.length == 0 && (
          <p className="font-epilogue font-semibold text-[14px] leaading-[30px] text-[#8181a3]">
            No hay imagenes disponibles para mostrar
          </p>
        ) */}
        Imagenes del proyecto
        {/* campaign.image.length > 0 &&
          campaign.image.map((image) => (
            <CampaignImageContainer campaignImage={image} />
          ))*/}
      </div>
    </div>
  );
};

export default CampaignDetailsImages;
