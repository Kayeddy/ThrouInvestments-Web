import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from "react-icons/md";

import {
  CampaignDisplayCard,
  CampaignTendencyDisplayCard,
  ExpandedCampaignView,
  Overlay,
  CustomButton,
} from "../marketplace";

import {
  Exterior_1,
  Exterior_2,
  Exterior_3,
  Exterior_4,
  Interior_1,
  Interior_2,
  Interior_3,
  Interior_4,
  Filter_icon,
  OrderFilter_icon,
} from "../../assets";

const CampaignsDisplay = ({ title, campaigns, loading }) => {
  const [renderOverlay, setRenderOverlay] = useState(false);
  const selectedCampaign = useRef({});

  const testProjects = [
    {
      name: "Shoji",
      media: {
        interiorPictures: [Interior_1, Interior_2, Interior_3, Interior_4],
        exteriorPictures: [Exterior_3, Exterior_1, Exterior_2, Exterior_4],
      },
    },
  ];

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
    navigate(`/marketplace/proyecto de prueba`, { state: campaign });
    console.log(campaigns);
  };

  //Function that scrolls to the left inside the div element whenever the user clicks on the left arrow button
  const scrollCarousel = (direction) => {
    const element = document.getElementById("carousel-container");
    if (direction === "left") {
      element.scroll({
        left: -200,
      });
    } else {
      element.scroll({
        left: 200,
      });
    }
  };

  return (
    <div className="mt-[110px] h-fit max-w-[1500px] mx-auto">
      <h1 className="font-sen font-semibold text-[40px] dark:text-white text-[#062147] text-left">
        Tendencias
      </h1>

      <div className={`mt-[20px] flex items-center justify-start`}>
        {!loading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#8181a3] animate-pulse">
            Cargando proyectos...
          </p>
        )}
        {/* 
  
          {!loading &&
                    campaigns.length > 0 &&
                    campaigns.map((campaign) => (
                      <CampaignTendencyDisplayCard
                        key={campaign.projectURI.title}
                        {...campaign}
                        handleClick={() => openModal(campaign)}
                      />
                    ))}
  
        */}
        <div className="h-fit w-full flex relative">
          <div
            id="carousel-container"
            className="carousel w-fit h-fit flex gap-4 md:gap-0 rounded-sm overflow-x:scroll"
          >
            <CampaignTendencyDisplayCard ProjectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777731086-8G94TEZ8V1JYLACAUE5D/courtyard+LR.jpg?format=1000w" />
            <CampaignTendencyDisplayCard ProjectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777839218-O1KWMXOY36S9DKVGF38N/BBQ+area+LR.jpg" />
            <CampaignTendencyDisplayCard ProjectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignTendencyDisplayCard ProjectImage="https://i2.au.reastatic.net/800x600/d434bc97c3cfe3e0ca5b21191667303ca94f0b856052ab661ac08add95cbe890/main.jpg" />
          </div>
          <div
            className="hidden md:flex absolute left-[20px] top-[170px] bottom-0 p-1/2 z-10 bg-[#01070E80] backdrop-blur-sm rounded-md cursor-pointer w-fit h-fit"
            onClick={() => scrollCarousel("left")}
          >
            <LeftArrow className="text-white text-[30px]" />
          </div>
          <div
            className="hidden md:flex absolute right-[20px] top-[170px] bottom-0 p-1/2 z-10 bg-[#01070E80] backdrop-blur-sm rounded-md cursor-pointer w-fit h-fit"
            onClick={() => scrollCarousel("right")}
          >
            <RightArrow className="text-white text-[30px] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center md:mb-[400px] mt-[100px] mb-[550px] w-full container">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-sen font-semibold text-[40px] dark:text-white text-[#062147] text-left ">
            Proyectos cerca de ti
          </h1>
          <div className="hidden flex-row gap-6 items-center justify-end w-fit md:flex">
            <button className="py-3 px-8 border-2 border-[#062147] bg-transparent">
              <div className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-[#062147]">
                  filter_alt
                </span>
                <p className="text-[#062147] font-semibold text-[18px]">
                  {" "}
                  Filtrar{" "}
                </p>
              </div>
            </button>

            <button className="py-3 px-6 border-2 border-[#062147] bg-transparent">
              <div className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-[#062147]">
                  sort
                </span>
                <p className="text-[#062147] font-semibold text-[18px]">
                  {" "}
                  Ordenar{" "}
                </p>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full h-fit container mx-auto ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 container w-full mx-auto h-fit">
            <CampaignDisplayCard
              handleClick={() => handleNavigate(testProjects[0])}
              projectImage={Exterior_3}
              projectName="Shoji"
            />
            <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" />
            <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg" />
            <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg" />

            <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/127/559/636/single-family-house-property-modern-suburban.jpg" />
            <CampaignDisplayCard projectImage="https://static.photocdn.pt/images/articles/2021/01/07/the_importance_of_quality_real_estate_photos.webp" />
            <CampaignDisplayCard projectImage="https://freerangestock.com/sample/12770/real-estate.jpg" />
            <CampaignDisplayCard projectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777636042-3POM26I0YJXZ4VCVXL9K/street+view+2k.jpg" />
          </div>
        </div>
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
