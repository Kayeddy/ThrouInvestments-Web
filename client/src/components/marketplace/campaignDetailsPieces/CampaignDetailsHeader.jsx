import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from "react-icons/md";
import useUserStore from "../../../context/useUserStore";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";

import { InfoBox, CustomButton, DropdownInput } from "../../marketplace";
import { calculateBarPercentage } from "../../../utils";

const CampaignDetailsHeader = ({ campaign, showInvestmentModal }) => {
  const navigate = useNavigate();
  const { userProfile } = useUserStore();

  const [activeImage, setActiveImage] = useState(0);
  const [imageCategory, setImageCategory] = useState("Exterior");
  const [displayImages, setDisplayImages] = useState([
    ...campaign.media.exteriorPictures,
  ]);

  const imageCategories = ["Exterior", "Interior"];

  const handleClick = () => {};

  const handleLeftClick = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage > 0 ? prevActiveImage - 1 : displayImages.length - 1
    );
  };

  const handleRightClick = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage < displayImages.length - 1 ? prevActiveImage + 1 : 0
    );
  };

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row mt-10 gap-[30px] px-2 md:px-8">
        {/** Desktop & mobile render */}
        <div className="flex-1 flex-col relative w-full">
          <div className="w-full flex flex-row mb-[30px] items-center justify-between md:justify-start">
            <div className="flex flex-row gap-2 items-center justify-start">
              <span
                className="text-[#B5B5B5]s md:text-[30px] text-[40px] dark:bg-[#01070E] bg-transparent rounded-lg flex items-center justify-center cursor-pointer group hover:scale-[1.2] transition-all duration-75 ease-in-out"
                onClick={() => navigate(-1)}
              >
                <LeftArrow />
              </span>
              <h2 className="md:text-[30px] text-[25px] font-bold dark:text-white text-black">
                {campaign.name}
              </h2>
            </div>
            {userProfile && (
              <span className="w-fit h-fit md:hidden bg-[#01070E] opacity-50 p-2 rounded-lg text-white text-[25px]">
                <BookmarkIcon />
              </span>
            )}
          </div>
          <div className="carousel w-full relative">
            <div
              className="absolute top-[40%] bottom-0 md:left-[20px] left-[10px] p-2 text-[30px] bg-[#01070E] text-[#B5B5B5] bg-opacity-50 rounded-lg h-fit cursor-pointer select-none group hover:scale-[1.2] transition-all duration-75 ease-in-out"
              onClick={handleLeftClick}
            >
              <LeftArrow />
            </div>
            <div
              className="absolute top-[40%] bottom-0 md:right-[20px] right-[10px] p-2 text-[30px] bg-[#01070E] text-[#B5B5B5] bg-opacity-50 rounded-lg h-fit cursor-pointer select-none group hover:scale-[1.2] transition-all duration-75 ease-in-out"
              onClick={handleRightClick}
            >
              <RightArrow />
            </div>
            <img
              src={displayImages[activeImage]}
              alt="imagen del proyecto"
              className="w-full md:h-[550px] h-[211px] object-cover carousel-item"
            />
          </div>

          <div className="hidden md:flex flex-row items-center justify-start gap-4 w-full p-4 h-[100px] absolute bottom-0 left-0 right-0 bg-[#01070E80] opacity-100 backdrop-blur-[3px]">
            <div className="w-[158px] flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg py-1 px-10">
              <DropdownInput
                options={imageCategories}
                switchTab={(item) => {
                  setImageCategory(item);
                  if (item === "Exterior") {
                    setDisplayImages(campaign.media.exteriorPictures);
                    setActiveImage(0);
                  } else {
                    setDisplayImages(campaign.media.interiorPictures);
                    setActiveImage(0);
                  }
                }}
                style="text-white text-[20px] font-jakarta"
              />
            </div>
            <div className="flex flex-row gap-2 w-full carousel">
              {imageCategories === "Exterior"
                ? displayImages.map((item, index) => (
                    <img
                      src={item}
                      alt="exterior_images"
                      className={`h-[50px] w-[60px] object-fit cursor-pointer ${
                        index === activeImage
                          ? "h-[60px] w-[70px] cursor-default"
                          : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    />
                  ))
                : displayImages.map((item, index) => (
                    <img
                      src={item}
                      alt="interior_images"
                      className={`h-[50px] w-[60px] object-fit cursor-pointer ${
                        index === activeImage
                          ? "h-[60px] w-[70px] cursor-default"
                          : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    />
                  ))}
            </div>
          </div>

          {userProfile && (
            <div className="flex-row gap-2 items-center justify-start w-fit p-2 h-fit absolute md:top-[100px] top-0 right-4 bg-[#01070E80] opacity-100 backdrop-blur-[3px] rounded-md text-white md:flex hidden">
              <span className="material-symbols-outlined text-white">
                Bookmark
              </span>
              <p className="font-jakarta"> Guardar proyecto </p>
            </div>
          )}
        </div>

        {/** Mobile render */}
        <div className="flex md:hidden flex-row items-center justify-start gap-4 w-full h-fit backdrop-blur-[3px]">
          <div className="w-fit h-[60px] flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg p-[10px]">
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
          <div className="flex flex-row gap-2 w-full carousel">
            {imageCategories === "Exterior"
              ? displayImages.map((item, index) => (
                  <img
                    src={item}
                    alt="exterior_images"
                    className={`h-[60px] w-[60px] object-cover ${
                      index === activeImage ? "h-[70px] w-[70px]" : ""
                    }`}
                  />
                ))
              : displayImages.map((item, index) => (
                  <img
                    src={item}
                    alt="interior_images"
                    className={`h-[60px] w-[60px] object-cover ${
                      index === activeImage ? "h-[70px] w-[70px]" : ""
                    }`}
                  />
                ))}
          </div>
        </div>

        <div className="w-full flex md:hidden flex-col justify-center items-start  gap-2 ">
          <p className="text-[15px] md:text-[20px] text-[#B5B5B5] font-jakarta">
            {" "}
            Estado{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-end items-start w-full">
            <div className="flex flex-col md:justify-center justify-start items-start gap-4 w-full md:w-fit">
              <h2 className="md:text-[40px] text-[25px] font-bold text-[#18A5FF]">
                {campaign.status}
              </h2>
              <div className="w-full bg-[#B5B5B5] rounded-[10px]">
                <div
                  className="h-[10px] bg-[#18A5FF] rounded-[10px]"
                  style={{
                    width: `${calculateBarPercentage(
                      campaign.goal,
                      campaign.amountCollected
                    )}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-end justify-center h-full text-[#B5B5B5]">
              <h2 className="md:text-[25px] text-[20px] font-jakarta font-bold">
                ${campaign.amountCollected.toLocaleString()}
              </h2>
              <p className="md:text-[20px] text-[15px] font-jakarta">
                de ${campaign.goal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex md:hidden items-center justify-center w-full">
          <CustomButton
            title="Invertir"
            handleClick={() => showInvestmentModal(true)}
            styles="bg-[#18A5FF] px-[50px] py-[10px] flex items-center justify-center w-full h-[60px] rounded-none hover:bg-transparent text-white text-[20px] font-sen hover:text-[#18A5FF] hover:border-[3px] hover:border-[#18A5FF]"
          />
        </div>

        {/** Desktop & mobile render */}
        <div className="flex mx-auto w-fit max-w-[350px] md:w-[150px] md:mt-[35px] mt-[30px] flex-wrap justify-center items-center md:items-end md:justify-between gap-[10px]">
          <InfoBox title="Token" value={"0k"} />
          <InfoBox title="Total token" value={"$0"} />
          <InfoBox title="Valor proyecto" value={"$0"} />
          <InfoBox title="APY" value={"0%"} />
        </div>
      </div>

      {
        // Large displays investment information
      }
      <div className="w-[40%] hidden md:flex flex-col justify-center items-start mt-[30px] gap-2 md:px-8 h-fit">
        <p className="text-[20px] text-[#B5B5B5] font-jakarta"> Estado </p>
        <div className="flex flex-col gap-4 md:gap-0 items-start w-full">
          <div className="flex flex-col md:justify-center justify-start items-start gap-4 w-full md:w-fit">
            <h2 className="md:text-[40px] text-[25px] font-bold text-[#18A5FF]">
              {campaign.status}
            </h2>
          </div>

          <div className="flex flex-row gap-4 items-end justify-center h-full text-[#B5B5B5]">
            <h2 className="md:text-[25px] text-[22px] font-bold font-jakarta">
              ${campaign.amountCollected.toLocaleString()}
            </h2>
            <p className="md:text-[20px] text-[18px] font-jakarta">
              de ${campaign.goal.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="w-full bg-[#B5B5B5] rounded-[10px]">
          <div
            className="h-[10px] bg-[#18A5FF] rounded-[10px]"
            style={{
              width: `${calculateBarPercentage(
                campaign.goal,
                campaign.amountCollected
              )}%`,
              maxWidth: "100%",
            }}
          ></div>
        </div>
        <p className="text-[#18A5FF]">
          {calculateBarPercentage(campaign.goal, campaign.amountCollected)}%
          completado
        </p>
      </div>
    </div>
  );
};

export default CampaignDetailsHeader;
