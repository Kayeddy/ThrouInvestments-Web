import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

import {
  InfoBox,
  CustomButton,
  CampaignUserDisplaycard,
  DropdownInput,
} from "../";
import ProjectChart from "../utilityComponents/ProjectChart";

const Portfolio = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleProjectDetails = () => {
    setShowProjectDetails(!showProjectDetails);
  };

  return (
    <>
      {!showProjectDetails ? (
        <div>
          <h2 className="mt-[30px] text-[30px] font-bold dark:text-white text-black">
            Portafolio
          </h2>
          <div className="flex flex-col md:gap-0 gap-12 md:flex-row justify-between w-full mt-[20px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mx-auto md:mx-0">
              <InfoBox title="Total proyectos" value={"0"} moreWidth="yes" />
              <InfoBox title="Total tokens" value={"0"} moreWidth="yes" />
              <InfoBox title="Total USDT" value={"0k"} moreWidth="yes" />
              <InfoBox title="Rentabilidad" value={"0%"} moreWidth="yes" />
            </div>
            <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
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

          <div className="w-fit carousel gap-[30px] mt-[50px]">
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />
            <CampaignUserDisplaycard projectImage="https://bucket-api.domain.com.au/v1/bucket/image/16316394_1_1_230207_061618-w2000-h1333" />

            <div className="carousel-item flex flex-col gap-4 items-center justify-center w-full md:w-[300px] min-h-full text-center bg-[#062147] dark:opacity-100 opacity-80 rounded-xl shadow-[0px_0px_10px_rgba(24,165,255,0.15)]">
              <span className="material-symbols-outlined text-white text-[120px]">
                explore
              </span>
              <h1 className="text-[35px] leading-[30px] mt-[30px] font-semibold text-white">
                Conoce más proyectos
              </h1>
              <a href="" className="text-[#17a5ff] font-normal">
                ver más
              </a>
            </div>
          </div>

          <div class="relative overflow-x-auto w-full mt-[50px] font-jakarta">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-[15px] text-black dark:text-white uppercase dark:bg-gray-70 font-jakarta-bold">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nombre proyecto
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Valor token (USD)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tus tokens
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Precio promedio
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Pérdida/Ganancia
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b group hover:bg-[#17a5ff] hover:bg-opacity-50">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#01070E] whitespace-nowrap dark:text-white"
                  >
                    Dakota Green
                  </th>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $1.513
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    23
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $1.513
                  </td>
                  <td class="px-6 py-4 text-[#1FB406] dark:text-white group-hover:font-bold">
                    +6.82%
                  </td>
                  <td
                    class="px-6 py-4 text-[#18A5FF] dark:text-white group-hover:font-bold group-hover:underline cursor-pointer"
                    onClick={handleProjectDetails}
                  >
                    Detalles
                  </td>
                </tr>
                <tr class="border-b group hover:bg-[#17a5ff] hover:bg-opacity-50 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:font-bold"
                  >
                    Leffler Route
                  </th>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $23.733
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    143
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $ 16.513
                  </td>
                  <td class="px-6 py-4 text-[#1FB406] dark:text-white group-hover:font-bold">
                    +56.91%
                  </td>
                  <td class="px-6 py-4 text-[#18A5FF] dark:text-white group-hover:font-bold group-hover:underline cursor-pointer">
                    Detalles
                  </td>
                </tr>
                <tr class="group border-b hover:bg-[#17a5ff] hover:bg-opacity-50">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:font-bold"
                  >
                    Ziemann Mission
                  </th>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $493
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    82
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $ 604
                  </td>
                  <td class="px-6 py-4 text-[#1FB406] dark:text-white group-hover:font-bold">
                    +3.82%
                  </td>
                  <td class="px-6 py-4 text-[#18A5FF] dark:text-white group-hover:font-bold group-hover:underline cursor-pointer">
                    Detalles
                  </td>
                </tr>

                <tr class="group border-b hover:bg-[#17a5ff] hover:bg-opacity-50">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:font-bold"
                  >
                    Wilbert Square
                  </th>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $32.658
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    24
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white group-hover:font-bold">
                    $ 1.360
                  </td>
                  <td class="px-6 py-4 text-[#1FB406] dark:text-white group-hover:font-bold">
                    +7.27%
                  </td>
                  <td class="px-6 py-4 text-[#18A5FF] dark:text-white group-hover:font-bold group-hover:underline cursor-pointer">
                    Detalles
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:font-bold"
                  >
                    Total proyectos <b> 4 </b>
                  </th>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white ">
                    {""}
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white ">
                    Total tokens <b> 272 </b>
                  </td>
                  <td class="px-6 py-4 text-[#01070E] dark:text-white ">
                    {""}
                  </td>
                  <td class="px-6 py-4 text-[#1FB406] dark:text-white ">
                    Ganancia total <b> +74,82% </b>
                  </td>
                  <td class="px-6 py-4 text-[#18A5FF] dark:text-white">{""}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full flex flex-col items-start justify-start gap-8 mt-[30px]">
            {/* Desktop header */}
            <div className="w-full hidden md:flex flex-row items-center justify-start gap-4">
              <span
                className="material-symbols-outlined text-slate-400 items-center justify-start cursor-pointer text-[40px]"
                onClick={handleProjectDetails}
              >
                chevron_left
              </span>
              <div className="flex flex-row items-center">
                <h2 className="text-[30px] font-bold dark:text-white text-black whitespace-nowrap">
                  Dakota Green
                </h2>
                <span className="material-symbols-outlined text-black items-center justify-start cursor-pointer text-[30px]">
                  keyboard_arrow_down
                </span>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center translate-x-5">
                <p className="text-[25px] font-sen text-[#B5B5B5]">
                  Tokens 23 =
                </p>
                <p className="text-[25px] font-sen text-[#B5B5B5]">
                  $35.700,14 USDT
                </p>
                <p className="text-[20px] font-sen text-[#1FB406]">
                  ▲ 15% Últimos 6 meses
                </p>
              </div>
            </div>
            {/* Mobile header */}
            <div className="w-full flex md:hidden flex-col items-start justify-start gap-10">
              <div className="flex flex-row gap-4 items-center justify-start">
                <span
                  className="material-symbols-outlined text-slate-400 bg-white rounded-lg items-center justify-start cursor-pointer text-[40px]"
                  onClick={handleProjectDetails}
                >
                  chevron_left
                </span>
                <div className="flex flex-row items-center">
                  <h2 className="text-[25px] font-bold font-sen dark:text-white text-black whitespace-nowrap">
                    Dakota Green
                  </h2>
                  <span className="material-symbols-outlined text-black items-center justify-start cursor-pointer text-[40px]">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>

              <div className="bg-black bg-opacity-50 py-1.5 px-4 rounded-lg">
                <DropdownInput
                  options={["Valorización", "ROI"]}
                  style="text-white text-[20px] font-jakarta"
                  arrowStyle="text-white"
                  switchTab={() => {}}
                />
              </div>

              <div className="flex flex-row gap-4 items-center justify-center">
                <p className="text-[20px] font-sen text-[#B5B5B5]">
                  Tokens 23 =
                </p>
                <p className="text-[17px] font-sen text-[#B5B5B5]">
                  $35.700,14 USDT
                </p>
                <p className="text-[17px] font-sen text-[#1FB406]">
                  ▲ 15% Últimos 6 meses
                </p>
              </div>
            </div>

            <div className="container md:mt-5">
              <ProjectChart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
