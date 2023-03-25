import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { HiOutlineQuestionMarkCircle as InterrogationIcon } from "react-icons/hi";

import { Bg_logo1_left, Bg_logo2_right, Bg_logo1, Bg_logo2 } from "../assets";

import {
  CustomButton,
  CampaignDetailsHeader,
  BottomInvestBar,
  DynamicContentTab,
  CampaignDisplayCard,
  MobileNavbar,
} from "../components/marketplace";
import Footer from "../components/marketplace/Footer";

const CampaignDetails = () => {
  const { state } = useLocation();
  const [toTopButton, setToTopButton] = useState(false);

  const handleScrollToTop = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setToTopButton(true) : setToTopButton(false);
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:mb-0 flex overflow-x-hidden dark:bg-[#01070E] bg-white relative w-full h-fit">
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
      <div className="flex justify-center items-center md:hidden mx-auto fixed bottom-2 z-20 w-full">
        <MobileNavbar />
      </div>
      <BottomInvestBar campaign={state} />
      <div className="flex absolute bottom-0 z-10 w-full h-fit">
        <Footer />
      </div>

      <div className="items-center justify-center p-4 fixed bottom-[50%] right-0 bg-[#062147] md:flex hidden z-10">
        <span className="text-white text-[25px]">
          <InterrogationIcon />
        </span>
      </div>
      <div className="marketplaceOverlay z-20 w-full flex">
        <div className="p-4 flex flex-col md:max-w-[1280px] lg:max-w-[1500px] md:px-[40px] mx-auto bg-transparent w-full h-fit md:mb-[400px] mb-[600px]">
          <CampaignDetailsHeader campaign={state} />

          <DynamicContentTab campaign={state} />
          <div className="flex flex-col w-full md:mt-[30px] mt-[60px]">
            <h2 className="font-semibold text-[25px] dark:text-white text-black">
              Proyectos similares
            </h2>
            <div className="carousel mt-[30px] grid grid-cols-[repeat(4,calc(100%))] gap-6 md:grid-cols-2 lg:grid-cols-4 container w-full mx-auto">
              <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" />
              <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg" />
              <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg" />

              <div className="flex flex-col gap-4 items-center justify-center w-full h-full text-center bg-[#062147] dark:opacity-100 opacity-80 rounded-md shadow-[0px_0px_10px_rgba(24,165,255,0.15)]">
                <span className="p-4 border-2 border-[#17a5ff] rounded-lg w-[100px] h-[100px] flex justify-center items-center text-[#17a5ff]">
                  Icon
                </span>
                <h1 className="text-[35px] leading-[30px] mt-[30px] font-semibold text-white">
                  ¿Conocer más proyectos?
                </h1>
                <a href="" className="text-[#17a5ff] font-normal">
                  ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
