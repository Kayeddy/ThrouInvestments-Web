import React from "react";
import { CampaignDisplayCard } from "../";

const Saved = ({ amount }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className=" text-[30px] mt-[30px] font-bold dark:text-white text-black">
        Proyectos guardados ({amount})
      </h2>
      <div className="mt-[30px] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" />
        <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg" />
        <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg" />

        <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" />
        <CampaignDisplayCard projectImage="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg" />
        <CampaignDisplayCard projectImage="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg" />

        <div className="flex flex-col gap-4 items-center justify-center w-full md:w-[300px] h-full min-h-[400px] text-center bg-[#062147] dark:opacity-100 opacity-80 rounded-xl shadow-[0px_0px_10px_rgba(24,165,255,0.15)]">
          <span className="p-4 border-2 border-[#17a5ff] rounded-lg w-[100px] h-[100px] flex justify-center items-center text-[#17a5ff]">
            Icon
          </span>
          <h1 className="text-[35px] leading-[30px] mt-[30px] font-semibold text-white">
            Conoce más proyectos
          </h1>
          <a href="" className="text-[#17a5ff] font-normal">
            ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Saved;
