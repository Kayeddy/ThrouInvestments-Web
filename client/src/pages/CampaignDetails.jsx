import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";

import { HiOutlineQuestionMarkCircle as InterrogationIcon } from "react-icons/hi";

import { Bg_logo1_left, Bg_logo2_right, Bg_logo1, Bg_logo2 } from "../assets";
import Main from "../components/payment/Main";

const CampaignDetailsHeader = React.lazy(() =>
  import(
    "../components/marketplace/campaignDetailsPieces/CampaignDetailsHeader"
  )
);
import {
  CustomButton,
  BottomInvestBar,
  DynamicContentTab,
  CampaignDisplayCard,
  MobileNavbar,
  Navbar,
  Overlay,
} from "../components/marketplace";
import Footer from "../components/marketplace/Footer";

const CampaignDetails = () => {
  const { state } = useLocation();
  const [toTopButton, setToTopButton] = useState(false);
  const [userInvesting, setUserInvesting] = useState(false);

  const handleScrollToTop = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setToTopButton(true) : setToTopButton(false);
    });
  };

  const userIsInvesting = (state) => {
    setUserInvesting(state);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex overflow-x-hidden dark:bg-[#01070E] font-sen bg-white relative w-full h-fit">
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
      {userInvesting && (
        <Overlay>
          <Main showInvestmentModal={userIsInvesting} />
        </Overlay>
      )}
      {!userInvesting && (
        <div className="flex justify-center items-center md:hidden mx-auto fixed bottom-2 z-10 w-full">
          <MobileNavbar />
        </div>
      )}
      <div className="fixed top-0 z-10 w-full h-fit">
        <Navbar />
      </div>
      <div className="flex absolute bottom-0 z-10 w-full h-fit"></div>
      <div className="items-center justify-center p-4 fixed bottom-[50%] right-0 bg-[#062147] hover:bg-[#18A5FF] md:flex hidden z-10 hover:cursor-pointer group hover:p-2">
        <span className="text-white text-[25px] flex flex-row items-center justify-center gap-4">
          <span className="material-symbols-outlined text-white">
            contact_support
          </span>
          <p className="hidden group-hover:block text-[16px]">
            Ayuda y soporte{" "}
          </p>
        </span>
      </div>

      <main className="marketplaceOverlay z-20 w-full flex flex-col gap-24">
        <div className="py-4 px-2 md:px-8 flex flex-col w-full h-fit md:max-w-[1280px] xl:max-w-[1600px] mx-auto bg-transparent mt-[50px]">
          <Suspense fallback={<div>Cargando imagenes...</div>}>
            <CampaignDetailsHeader
              campaign={state}
              showInvestmentModal={userIsInvesting}
            />
          </Suspense>

          <DynamicContentTab campaign={state} userInvesting={userIsInvesting} />
          <div className="flex flex-col w-full mt-[80px] md:px-8 px-2">
            <h2 className="font-bold font-sen text-[25px] md:text-[40px] dark:text-white text-black ">
              Proyectos similares
            </h2>
            <div className="carousel mt-[30px] grid grid-cols-[repeat(4,calc(100%))] gap-6 md:grid-cols-2 lg:grid-cols-4 container w-full mx-auto md:mx-0">
              <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" />
              <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg" />
              <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg" />

              <div className="flex flex-col gap-4 items-center justify-center w-full h-full text-center bg-[#062147] dark:opacity-100 opacity-80 rounded-md shadow-[0px_0px_10px_rgba(24,165,255,0.15)]">
                <span className="material-symbols-outlined text-white text-[120px]">
                  explore
                </span>
                <h1 className="text-[35px] leading-[30px] mt-[30px] font-semibold text-white px-2">
                  ¿Conocer más proyectos?
                </h1>
                <a
                  href="/marketplace"
                  className="text-[#17a5ff] font-sen cursor-pointer hover:underline hover:font-bold transition-all duration-200 ease-in-out"
                >
                  ver más
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default CampaignDetails;
