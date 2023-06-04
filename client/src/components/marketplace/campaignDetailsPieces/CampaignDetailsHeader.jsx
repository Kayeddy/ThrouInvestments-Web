import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from "react-icons/md";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";

import { InfoBox, CustomButton, DropdownInput } from "../../marketplace";
import { calculateBarPercentage } from "../../../utils";
import { Favorites_icon } from "../../../assets";

const CampaignDetailsHeader = ({ campaign }) => {
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(0);
  const [imageCategory, setImageCategory] = useState("Exterior");
  const [displayImages, setDisplayImages] = useState([
    ...campaign.media.exteriorPictures,
  ]);

  const testProjectImages = [
    "https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777731086-8G94TEZ8V1JYLACAUE5D/courtyard+LR.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/542e3f91e4b00f1e0f262de2/1566777839218-O1KWMXOY36S9DKVGF38N/BBQ+area+LR.jpg",
    "https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333",
    "https://i2.au.reastatic.net/800x600/d434bc97c3cfe3e0ca5b21191667303ca94f0b856052ab661ac08add95cbe890/main.jpg",
  ];

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
      <div className="w-full flex flex-col md:flex-row mt-10 gap-[30px] px-8 ">
        <div className="flex-1 flex-col relative w-full">
          <div className="w-full flex flex-row mb-[30px] items-center justify-between md:justify-start">
            <div className="flex flex-row gap-2 items-center justify-start">
              <span
                className="text-[#B5B5B5] p-2 text-[30px] dark:bg-[#01070E] bg-transparent  rounded-lg flex items-center justify-center cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <LeftArrow />
              </span>
              <h2 className="md:text-[30px] text-[20px] font-bold dark:text-white text-black">
                {campaign.name}
              </h2>
            </div>

            <span className="w-fit h-fit md:hidden bg-[#01070E] opacity-50 p-2 rounded-lg">
              <span className="material-symbols-outlined text-white flex items-center justify-center">
                Bookmark
              </span>
            </span>
          </div>
          <div className="carousel w-full relative">
            <div
              className="hidden md:block absolute top-[40%] bottom-0 md:left-[20px] left-0 p-2 text-[30px] bg-[#01070E] text-[#B5B5B5] opacity-50 rounded-lg h-fit cursor-pointer select-none"
              onClick={handleLeftClick}
            >
              <LeftArrow />
            </div>
            <div
              className="hidden md:block absolute top-[40%] bottom-0 md:right-[20px] right-0 p-2 text-[30px] bg-[#01070E] text-[#B5B5B5] opacity-50 rounded-lg h-fit cursor-pointer select-none"
              onClick={handleRightClick}
            >
              <RightArrow />
            </div>
            <img
              src={displayImages[activeImage]}
              alt="imagen del proyecto"
              className="w-full md:h-[550px] h-[350px] object-cover carousel-item"
            />
          </div>

          <div className=" hidden md:flex flex-row items-center justify-start gap-4 w-full p-4 h-[100px] absolute bottom-0 left-0 right-0 bg-[#01070E80] opacity-100 backdrop-blur-[3px]">
            <div className="flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg p-2">
              <DropdownInput
                options={imageCategories}
                switchTab={(item) => {
                  setImageCategory(item);
                  item === "Exterior"
                    ? setDisplayImages(campaign.media.exteriorPictures)
                    : setDisplayImages(campaign.media.interiorPictures);
                }}
                style="hover:underline hover:text-[#18A5FF] text-white"
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

          <div className="flex-row gap-2 items-center justify-start w-fit p-2 h-fit absolute md:top-[100px] top-0 right-4 bg-[#01070E80] opacity-100 backdrop-blur-[3px] rounded-md text-white md:flex hidden">
            <span className="material-symbols-outlined text-white">
              Bookmark
            </span>
            <p className="font-jakarta"> Guardar proyecto </p>
          </div>
        </div>

        <div className=" flex md:hidden flex-row items-center justify-start gap-4 w-full p-4 h-[100px]  backdrop-blur-[3px]">
          <div className="flex flex-row gap-2 items-center justify-center bg-[#01070E80] rounded-lg p-2"></div>
          <div className="flex flex-row gap-2 w-full carousel">
            {testProjectImages.map((item) => (
              <img
                src={item}
                alt="Other campaign images"
                className="h-[60px] w-[60px]"
              />
            ))}
          </div>
        </div>

        <div className="w-full flex md:hidden flex-col justify-center items-start  gap-2 ">
          <p className="text-[20px] text-[#B5B5B5] font-jakarta"> Estado </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-end items-start w-full">
            <div className="flex flex-col md:justify-center justify-start items-start gap-4 w-full md:w-fit">
              <h2 className="md:text-[40px] text-[25px] font-bold text-[#18A5FF]">
                Estado
              </h2>
              <div className="w-full bg-[#B5B5B5] rounded-[10px]">
                <div
                  className="h-[10px] bg-[#18A5FF] rounded-[10px]"
                  style={{
                    width: `${calculateBarPercentage(0.5, 0.1)}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-end justify-center h-full text-[#B5B5B5]">
              <h2 className="md:text-[25px] text-[20px] font-jakarta font-bold">
                $825.577.645.87
              </h2>
              <p className="md:text-[20px] text-[15px] font-jakarta">
                de $1.450.700.480.78
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex md:hidden items-center justify-center w-full">
          <CustomButton
            title="Invertir"
            handleClick={handleClick}
            styles="bg-[#18A5FF] px-[50px] py-[10px] flex items-center justify-center w-full md:h-[60px] h-[50px] rounded-none hover:bg-transparent text-white hover:text-[#18A5FF] hover:border-[3px] hover:border-[#18A5FF]"
          />
        </div>

        <div className="md:flex grid grid-cols-2 md:w-[150px] md:mt-[35px] mt-[30px] w-full flex-wrap justify-center items-end md:justify-between gap-[10px]">
          <InfoBox title="Token" value={"0k"} />
          <InfoBox title="Total token" value={"$0"} />
          <InfoBox title="Valor proyecto" value={"$0"} />
          <InfoBox title="APY" value={"0%"} />
        </div>
      </div>

      {
        // Large displays investment information
      }
      <div className="w-fit hidden md:flex flex-col justify-center items-start mt-[30px] gap-2 md:px-8 h-fit">
        <p className="text-[20px] text-[#B5B5B5] font-jakarta"> Estado </p>
        <div className="flex flex-col md:flex-row gap-4 md:items-center items-start w-full">
          <div className="flex flex-col md:justify-center justify-start items-start gap-4 w-full md:w-fit">
            <h2 className="md:text-[40px] text-[25px] font-bold text-[#18A5FF]">
              Estado
            </h2>
          </div>

          <div className="flex flex-row gap-4 items-end justify-center h-full text-[#B5B5B5]">
            <h2 className="md:text-[25px] text-[22px] font-bold font-jakarta">
              $825.577.645.87
            </h2>
            <p className="md:text-[20px] text-[18px] font-jakarta">
              de $1.450.700.480.78
            </p>
          </div>
        </div>
        <div className="w-full bg-[#B5B5B5] rounded-[10px]">
          <div
            className="h-[10px] bg-[#18A5FF] rounded-[10px]"
            style={{
              width: `${calculateBarPercentage(0.5, 0.1)}%`,
              maxWidth: "100%",
            }}
          ></div>
        </div>
        <p className="text-[#18A5FF]">#% completado</p>
      </div>
    </div>
  );
};

export default CampaignDetailsHeader;
