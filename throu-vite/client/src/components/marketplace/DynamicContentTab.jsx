import React, { useState } from "react";

import { campaignDetails } from "../../constants";

import {
  CampaignDetailsBody,
  CampaignDetailsDocs,
  CampaignDetailsFaqs,
  CampaignDetailsImages,
  CampaignDetailsUpdates,
  DropdownInput,
  CustomButton,
} from "../marketplace";

import { AiOutlineStar as StarIcon } from "react-icons/ai";
import { RiShareForwardBoxFill as ShareIcon } from "react-icons/ri";

const DynamicContentTab = ({ campaign }) => {
  const [currentTab, setCurrentTab] = useState("Descripción");
  const [ethAmount, setEthAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const highlightInvestmentText = (focusedField) => {
    if (focusedField === "ETH-input") {
      document.getElementById("ETH-text").style.color = "#7D8087";
      document.getElementById("ETH-container").style.borderBottom =
        "1px solid #18A5FF";
    } else {
      document.getElementById("ETH-text").style.color = "#B5B5B5";
      document.getElementById("ETH-container").style.borderBottom =
        "1px solid #B5B5B5";
    }

    if (focusedField === "USD-input") {
      document.getElementById("USD-text").style.color = "#7D8087";
      document.getElementById("USD-container").style.borderBottom =
        "1px solid #18A5FF";
    } else {
      document.getElementById("USD-text").style.color = "#B5B5B5";
      document.getElementById("USD-container").style.borderBottom =
        "1px solid #B5B5B5";
    }
  };

  const clearInvestmentTextHighlight = () => {
    document.getElementById("ETH-input").blur();
    document.getElementById("USD-input").blur();
  };

  return (
    <div className="flex flex-1 flex-wrap mt-12">
      <div className="flex flex-col w-full">
        <div className="h-[0.1px] bg-[#B5B5B5] mb-6 md:block hidden" />
        <div className=" carousel flex flex-row md:gap-16 gap-12 md:justify-center lg:justify-start">
          {campaignDetails.map((item) => (
            <p
              className={`font-epilogue font-semibold md:text-[16px] text-[20px] leading-[22px] dark:text-white text-black p-3 cursor-pointer transition ease-in-out duration-200  ${
                currentTab === item
                  ? "text-[#18A5FF] border-b-[1px] border-[#18A5FF] hover:text-[#18A5FF] hover:opacity-100"
                  : "hover:text-[#18A5FF] hover:opacity-60"
              }`}
              onClick={() => handleTabChange(item)}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* 

        <div className="sticky top-[20px] flex items-center justify-between p-3 flex-wrap flex-1 flex-row dark:bg-[#1c1c24] bg-white rounded-md w-full md:hidden">
                <DropdownInput options={campaignDetails} switchTab={handleTabChange} />
                <div className="flex flex-wrap flex-row justify-center items-center gap-4">
                  <span className="text-center flex justify-center items-center text-white cursor-pointer">
                    <StarIcon className="w-[22px] h-[22px]" />
                  </span>
                  <span className="text-center flex justify-center items-center text-white cursor-pointer">
                    <ShareIcon className="w-[20px] h-[20px]" />
                  </span>
                </div>
              </div>

    */}

      <div className="flex flex-row justify-between w-full mt-[30px]">
        <div className="md:max-w-[50%]">
          {currentTab === "Descripción" && (
            <CampaignDetailsBody campaign={campaign} />
          )}
          {currentTab === "Galería" && (
            <CampaignDetailsImages campaign={campaign} />
          )}
          {currentTab === "Documentos" && (
            <CampaignDetailsDocs campaign={campaign} />
          )}
          {currentTab === "Actualizaciones" && (
            <CampaignDetailsUpdates campaign={campaign} />
          )}
          {currentTab === "FAQS" && <CampaignDetailsFaqs campaign={campaign} />}
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col p-4 dark:bg-[#01070E] bg-[#F7FAFF] dark:text-white text-[#01070E] rounded-lg">
            <p className="font-epilogue font-bold text-[22px]  leading-[30px] text-center">
              Invierte en [nombre del proyecto]
            </p>
            <p className="font-epilogue font-normal text-[16px] leading-[30px] text-center mt-[10px]">
              ¿Cuánto quieres invertir?
            </p>

            <div className="mt-[10px] flex flex-col items-center justify-center gap-4">
              <div
                id="ETH-container"
                className="relative w-full flex flex-row items-center border-b-[1px]"
              >
                <p
                  id="ETH-text"
                  className="font-epilogue font-normal leading-[22px] text-[#808191] border-[#3a3a43]"
                >
                  ETH
                </p>
                <input
                  id="ETH-input"
                  type="number"
                  onFocus={(e) => highlightInvestmentText(e.target.id)}
                  onfocusout={clearInvestmentTextHighlight}
                  step="0.01"
                  className="w-full sm:px-[20px] font-bold outline-none focus:border-b-[#18A5FF] bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] placeholder:text-[#4b5264]"
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                />
              </div>

              <div
                id="USD-container"
                className="relative w-full flex flex-row items-center border-b-[1px]"
              >
                <p
                  id="USD-text"
                  className="font-epilogue font-normal leading-[22px] text-[#808191] border-[#3a3a43]"
                >
                  ETH
                </p>
                <input
                  id="USD-input"
                  type="number"
                  onFocus={(e) => highlightInvestmentText(e.target.id)}
                  onfocusout={() => clearInvestmentTextHighlight()}
                  step="0.01"
                  className="w-full sm:px-[20px] font-bold outline-none focus:border-b-[#18A5FF] bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] placeholder:text-[#4b5264]"
                  value={usdAmount}
                  onChange={(e) => setUsdAmount(e.target.value)}
                />
              </div>

              <div className="mt-[10px] p-2 dark:bg-[#13131a] bg-[#F7FAFF] rounded-[10px] flex flex-row items-center justify-center gap-2">
                <p className="font-epilogue font-normal leading-[22px] text-[#808191]">
                  % minteado: 0%
                </p>
              </div>

              <CustomButton
                type="button"
                title="Invertir"
                styles="bg-[#18A5FF] px-[50px] py-[10px] flex items-center justify-center w-full h-[50px] rounded-none hover:bg-transparent text-white hover:text-[#18A5FF] hover:border-[3px] hover:border-[#18A5FF]"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentTab;
