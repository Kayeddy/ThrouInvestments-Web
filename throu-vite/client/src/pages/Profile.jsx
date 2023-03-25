import React, { useState } from "react";

import {
  Footer,
  InfoBox,
  CustomButton,
  CampaignUserDisplaycard,
} from "../components/marketplace";
import { BsPlus as PlusIcon } from "react-icons/bs";
import { Bg_logo1_left, Bg_logo2_right, Bg_logo1, Bg_logo2 } from "../assets";
import { userProfileOptions } from "../constants";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState("Mis proyectos");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex w-full h-fit dark:bg-[#01070E] bg-white relative">
      <img
        src={Bg_logo1_left}
        alt=""
        className="z-0 fixed top-[-300px] left-0 w-[350px] rotate-12 brightness-200 blur-md"
      />
      <img
        src={Bg_logo2}
        alt=""
        className="z-0 fixed bottom-[-400px] left-0 w-[350px] brightness-200 blur-md"
      />
      <img
        src={Bg_logo1}
        alt=""
        className="z-0 fixed bottom-[-400px] right-0 w-[350px] brightness-200 blur-md"
      />
      <img
        src={Bg_logo2_right}
        alt=""
        className="z-0 fixed top-[-300px] right-0 w-[350px] brightness-200 blur-md"
      />

      <div className="marketplaceOverlay z-10 flex w-full">
        <div className="flex-1 flex flex-col mx-auto w-full max-w-[1500px] p-4">
          <div className="flex w-full md:h-[434px] h-[400px] relative">
            <img
              src="https://wallpaperaccess.com/full/38582.jpg"
              alt=""
              className="brightness-60 object-cover w-full md:h-[434px] h-[400px]"
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
              <div className="flex flex-col items-center justify-center mt-[50px]">
                <img
                  src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                  className="rounded-full h-[130px] w-[130px] object-cover"
                />
                <div className="flex flex-col items-center justify-center gap-1 bg-[#01070E80] md:w-[533px] w-[90%] md:h-[184px] h-fit mt-[30px] rounded-lg text-white p-3">
                  <h2 className="md:text-[25px] text-[20px] font-bold">
                    Edward Junior Bowie
                  </h2>
                  <p className="md:text-[20px] text-[15px]">
                    sheddagame@gmail.com
                  </p>
                  <p className="text-slate-300 text-[13px] mt-[20px]">
                    Balance
                  </p>
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <span className="flex items-center justify-center p-[0.5px] text-[15px] border-[1.5px] mt-1">
                      <PlusIcon />
                    </span>
                    <h2 className="md:text-[30px] text-[20px] font-bold mr-2">
                      $ 0.00
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="h-[0.1px] bg-[#B5B5B5] mb-6" />
            <div className="carousel flex flex-row gap-16 md:justify-center lg:justify-start">
              {userProfileOptions.map((item) => (
                <p
                  className={`font-epilogue font-semibold text-[16px] leading-[22px] dark:text-white text-black p-3 cursor-pointer transition ease-in-out duration-200  ${
                    currentTab === item
                      ? "text-[#18A5FF] border-b-[1px] border-[#18A5FF] hover:text-[#18A5FF] hover:opacity-100"
                      : "hover:text-[#18A5FF] hover:opacity-60"
                  }`}
                  onClick={() => handleTabChange(item)}
                  key={item}
                >
                  {typeof item === "function" ? item(27) : item}
                </p>
              ))}
            </div>
          </div>

          <h2 className="mt-[30px] text-[30px] font-bold dark:text-white text-black">
            Portafolio
          </h2>
          <div className="flex flex-col md:gap-0 gap-12 md:flex-row justify-between w-full mt-[20px]">
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
              <InfoBox title="Total proyectos" value={"0"} moreWidth="yes" />
              <InfoBox title="Total tokens" value={"0"} moreWidth="yes" />
              <InfoBox title="Total USDT" value={"0k"} moreWidth="yes" />
              <InfoBox title="Rentabilidad" value={"0%"} moreWidth="yes" />
            </div>
            <div className="flex flex-row gap-6 items-center justify-center">
              <CustomButton
                title="Filtrar"
                handleClick=""
                styles="h-fit w-[170px] p-2 border-1 dark:text-white text-[#062147] border-2 dark:border-[#B5B5B5] border-[#062147] rounded-none flex flex-row items-center justify-center gap-2 "
              />

              <CustomButton
                title="Ordenar"
                handleClick=""
                styles="h-fit w-[170px] p-2 border-1 dark:text-white text-[#062147] border-2 dark:border-[#B5B5B5] border-[#062147] rounded-none flex flex-row items-center justify-center gap-2 "
              />
            </div>
          </div>

          <div className="w-full carousel flex flex-row justify-between mt-[50px]">
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
