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

import { FaEthereum as EthIcon } from "react-icons/fa";
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
    <div className="flex flex-1 flex-wrap mt-12 px-8">
      <div className="flex flex-col w-full">
        <div className="h-[0.1px] bg-[#B5B5B5] mb-6 md:block hidden" />
        <div className="carousel flex flex-row md:max-w-[50%] w-full justify-between gap-12 md:gap-6">
          {campaignDetails.map((item) => (
            <p
              className={`font-bold text-[20px] leading-[22px] font-jakarta dark:text-white text-black py-3 cursor-pointer transition ease-in-out duration-200  ${
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

      <div className="flex flex-row justify-between w-full mt-[30px] gap-12">
        <div className="md:max-w-[60%] w-full">
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
          <div className="flex flex-col px-[30px] py-4 dark:bg-[#01070E] dark:bg-opacity-5 bg-opacity-30 bg-[#F7FAFF] dark:text-white text-[#01070E] rounded-lg">
            <p className="font-epilogue font-bold text-[22px]  leading-[30px] text-center">
              Invierte en [nombre del proyecto]
            </p>
            <p className="font-epilogue font-normal text-[16px] leading-[30px] text-center mt-[10px] font-jakarta">
              ¿Cuánto quieres invertir?
            </p>

            <div className="mt-[10px] flex flex-col items-center justify-center gap-4">
              <div
                id="ETH-container"
                className="relative w-full flex flex-row items-center border-b-[1px]"
              >
                <p
                  id="ETH-text"
                  className="font-epilogue font-normal leading-[22px] text-[#808191] border-[#3a3a43] font-jakarta gap-2 flex flex-row items-center"
                >
                  <span className="inline">
                    <EthIcon />
                  </span>
                  ETH
                </p>
                <input
                  id="ETH-input"
                  type="number"
                  onFocus={(e) => highlightInvestmentText(e.target.id)}
                  onfocusout={clearInvestmentTextHighlight}
                  step="0.01"
                  className="w-full sm:px-[20px] font-bold outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] placeholder:text-[#4b5264]"
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
                  className="font-epilogue font-normal leading-[22px] text-[#808191] border-[#3a3a43] font-jakarta flex flex-row items-center gap-2"
                >
                  <span className="material-symbols-outlined  cursor-pointer">
                    attach_money
                  </span>
                  USD
                </p>
                <input
                  id="USD-input"
                  type="number"
                  onFocus={(e) => highlightInvestmentText(e.target.id)}
                  onfocusout={() => clearInvestmentTextHighlight()}
                  step="0.01"
                  className="w-full sm:px-[20px] font-bold outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] placeholder:text-[#4b5264]"
                  value={usdAmount}
                  onChange={(e) => setUsdAmount(e.target.value)}
                />
              </div>

              <div className="mt-[10px] p-2 dark:bg-[#13131a] bg-[#F7FAFF] bg-opacity-30 rounded-[10px] flex flex-row items-center justify-center gap-2">
                <p className="font-epilogue font-normal leading-[22px] text-[#808191] font-jakarta">
                  Adquieres un 0% del proyecto
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

      {currentTab === "Descripción" && (
        <div className="hidden md:flex flex-col items-start justify-center h-fit w-full mt-14">
          <span className="flex flex-row items-center gap-2">
            <span className="material-symbols-outlined text-[#01070E]">
              location_on
            </span>
            <p className="text-[#062147] text-[18px] font-Plus_Jakarta_Sans">
              9242 Mills Isle
            </p>
          </span>
          <img
            src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
            alt=""
            className="w-full h-[350px] grayscale object-cover mt-[30px]"
          />
        </div>
      )}
    </div>
  );
};

export default DynamicContentTab;
