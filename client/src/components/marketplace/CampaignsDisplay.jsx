import React, { useState, useRef, useEffect } from "react";
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
  Exterior_5,
  Exterior_6,
  Exterior_7,
  Exterior_8,
  Exterior_9,
  Exterior_10,
  Exterior_11,
  Exterior_12,
  Exterior_13,
  Exterior_14,
  Exterior_15,
  Exterior_16,
  Exterior_17,
  Exterior_18,
  Exterior_19,
  Exterior_20,
  Exterior_21,
  Exterior_22,
  Exterior_23,
  Exterior_24,
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      media: {
        interiorPictures: [Interior_1, Interior_2, Interior_3, Interior_4],
        exteriorPictures: [
          Exterior_3,
          Exterior_1,
          Exterior_2,
          Exterior_4,
          Exterior_5,
          Exterior_6,
          Exterior_7,
          Exterior_8,
          Exterior_9,
          Exterior_10,
          Exterior_11,
          Exterior_12,
          Exterior_13,
          Exterior_14,
          Exterior_15,
          Exterior_16,
          Exterior_17,
          Exterior_18,
          Exterior_19,
          Exterior_20,
          Exterior_21,
          Exterior_22,
          Exterior_23,
          Exterior_24,
        ],
      },
      status: "En recaudo",
      amountCollected: 10000,
      goal: 20000,
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/marketplace/${campaign.name}`, { state: campaign });
    console.log(campaigns);
  };

  //Function that scrolls to the left inside the div element whenever the user clicks on the left arrow button
  const scrollCarousel = (direction) => {
    const element = document.getElementById("carousel-container");
    if (direction === "left") {
      element.scrollTo({
        left: element.scrollLeft - 280,
        behavior: "smooth",
      });
    } else {
      element.scrollTo({
        left: element.scrollLeft + 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-[110px] h-fit w-full md:w-[90%] xl:max-w-[1500px] mx-auto p-4">
      <h1 className="font-sen font-semibold text-[25px] md:text-[40px] dark:text-white text-[#062147] text-left">
        Tendencias
      </h1>

      <div className="h-fit w-full flex items-start justify-start relative mt-[20px]">
        <div
          id="carousel-container"
          className="overflow-x-auto sm:customCarouselScroll md:carousel flex flex-row w-max h-fit gap-4 md:gap-0 rounded-sm overflow-y-hidden transition-all duration-200 ease-in-out"
        >
          <CampaignTendencyDisplayCard ProjectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777731086-8G94TEZ8V1JYLACAUE5D/courtyard+LR.jpg?format=1000w" />
          <CampaignTendencyDisplayCard ProjectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777839218-O1KWMXOY36S9DKVGF38N/BBQ+area+LR.jpg" />
          <CampaignTendencyDisplayCard ProjectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
          <CampaignTendencyDisplayCard ProjectImage="https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777731086-8G94TEZ8V1JYLACAUE5D/courtyard+LR.jpg?format=1000w" />

          <CampaignTendencyDisplayCard
            ProjectImage="https://i2.au.reastatic.net/800x600/d434bc97c3cfe3e0ca5b21191667303ca94f0b856052ab661ac08add95cbe890/main.jpg"
            additionalStyle="transform hover:scale-100 transition-transform duration-500 origin-right"
          />
        </div>
        <div
          className="hidden md:flex absolute left-[20px] top-[170px] bottom-0 p-1/2 z-10 bg-[#01070E80] backdrop-blur-sm rounded-md cursor-pointer w-fit h-fit group hover:scale-[1.2] transition-all duration-75 ease-in-out"
          onClick={() => scrollCarousel("left")}
        >
          <LeftArrow className="text-white text-[30px]" />
        </div>
        <div
          className="hidden md:flex absolute right-[20px] top-[170px] bottom-0 p-1/2 z-10 bg-[#01070E80] backdrop-blur-sm rounded-md cursor-pointer w-fit h-fit group hover:scale-[1.2] transition-all duration-75 ease-in-out"
          onClick={() => scrollCarousel("right")}
        >
          <RightArrow className="text-white text-[30px] cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-12 items-center justify-center mt-20 md:mt-[100px] w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-sen font-semibold text-[25px] md:text-[40px] dark:text-white text-[#062147] text-left ">
            Otros proyectos
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

        <div className="flex flex-col gap-6 w-full h-fit container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 container w-full mx-auto h-fit">
            <CampaignDisplayCard
              handleClick={() => handleNavigate(testProjects[0])}
              projectImage={Exterior_3}
              projectName="Shoji"
              testAmountCollected={testProjects[0].amountCollected}
              testObjectiveAmount={testProjects[0].goal}
              testDescription={testProjects[0].description}
              testStatus={testProjects[0].status}
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
