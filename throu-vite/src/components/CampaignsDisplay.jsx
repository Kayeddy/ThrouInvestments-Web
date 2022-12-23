import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CampaignDisplayCard, ExpandedCampaignView } from "../components";
import { Overlay } from "../components";

const CampaignsDisplay = ({ title, campaigns }) => {
  const [renderOverlay, setRenderOverlay] = useState(false);
  const selectedCampaign = useRef({});

  const openModal = (campaign) => {
    selectedCampaign.current = campaign;
    setRenderOverlay(true);
    console.log(selectedCampaign);
  };

  const closeModal = () => {
    setRenderOverlay(false);
  };

  let campaignModal = () => {
    return false;
  };

  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div
        className={`flex flex-wrap mt-[20px] gap-[26px] ${
          renderOverlay && "overflow-y-hidden"
        }`}
      >
        {campaigns.length == 0 && (
          <p className="font-epilogue font-semibold text-[14px] leaading-[30px] text-[#8181a3]">
            No hay proyectos disponibles para mostrar
          </p>
        )}

        {campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <CampaignDisplayCard
              key={campaign.title}
              {...campaign}
              handleClick={() => openModal(campaign)}
            />
          ))}
      </div>

      {renderOverlay && (
        <Overlay>
          <ExpandedCampaignView
            campaign={selectedCampaign.current}
            closeOverlay={closeModal}
          />
        </Overlay>
      )}
    </div>
  );
};

export default CampaignsDisplay;
