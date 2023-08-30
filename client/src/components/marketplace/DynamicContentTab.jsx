import React, { useState } from "react";

import { campaignDetails } from "../../constants";
import useUserStore from "../../context/useUserStore";

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
import { AiFillDollarCircle as CurrencyIcon } from "react-icons/ai";

const InvestmentInput = ({ symbol, icon: Icon, amount, setAmount }) => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div
      className={`relative w-full flex flex-row items-center border-b-[1px] ${
        highlighted ? "border-[#18A5FF]" : "border-[#B5B5B5]"
      }`}
    >
      <p
        className={`font-epilogue font-normal leading-[22px] text-[${
          highlighted ? "#7D8087" : "#B5B5B5"
        }] border-[#3a3a43] font-jakarta gap-2 flex flex-row items-center`}
      >
        <span className="inline">{Icon && <Icon />}</span>
        {symbol}
      </p>
      <input
        type="number"
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
        step="0.01"
        className={`w-full sm:px-[10px] font-bold outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[${
          highlighted ? "#7D8087" : "#B5B5B5"
        }] text-[18px] leading-[30px] placeholder:text-[#4b5264]`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

const DynamicContentTab = ({ campaign, userInvesting }) => {
  const [currentTab, setCurrentTab] = useState("Descripción");
  const [ethAmount, setEthAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");

  const { userProfile } = useUserStore();

  const getTabComponents = () => ({
    Descripción: CampaignDetailsBody,
    Galería: CampaignDetailsImages,
    Documentos: CampaignDetailsDocs,
    Actualizaciones: CampaignDetailsUpdates,
    FAQS: CampaignDetailsFaqs,
  });
  const TAB_COMPONENTS = getTabComponents();
  const CurrentTabComponent = TAB_COMPONENTS[currentTab];

  return (
    <div className="flex flex-1 flex-wrap mt-12 px-4 md:px-8 relative">
      <div className="flex flex-col w-full">
        <div className="h-[0.1px] bg-[#B5B5B5] mb-6 md:block hidden" />
        <div className="md:carousel flex flex-row md:max-w-[50%] w-full justify-between gap-[40px] pb-2 md:pb-0 md:gap-[40px] customCarouselScroll overflow-x-auto">
          {campaignDetails.map((item) => (
            <p
              className={`text-[20px] leading-[22px] font-jakarta dark:text-white py-3 cursor-pointer transition ease-in-out duration-200  ${
                currentTab === item
                  ? "text-[#18A5FF] border-b-[1px] border-[#18A5FF] hover:text-[#18A5FF] hover:opacity-100 font-bold"
                  : "hover:text-[#18A5FF] hover:opacity-60 text-black"
              }`}
              onClick={() => setCurrentTab(item)}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between w-full mt-[30px] gap-12">
        <div className="md:max-w-[60%] w-full">
          <CurrentTabComponent campaign={campaign} />
        </div>

        {userProfile && (
          <div className="hidden md:block">
            <div className="flex flex-col px-[30px] py-4 dark:bg-[#01070E] dark:bg-opacity-5 bg-opacity-30 bg-[#F7FAFF] dark:text-white text-[#01070E] rounded-lg">
              <p className="font-epilogue font-bold text-[22px]  leading-[30px] text-center">
                Invierte en [nombre del proyecto]
              </p>
              <p className="font-epilogue font-normal text-[16px] leading-[30px] text-center mt-[10px] font-jakarta">
                ¿Cuánto quieres invertir?
              </p>

              <div className="mt-[10px] flex flex-col items-center justify-center gap-4">
                <InvestmentInput
                  symbol="Tokens"
                  icon={EthIcon}
                  amount={ethAmount}
                  setAmount={setEthAmount}
                />

                <InvestmentInput
                  symbol="USDT"
                  icon={CurrencyIcon}
                  amount={usdAmount}
                  setAmount={setUsdAmount}
                />

                <div className="mt-[10px] p-2 dark:bg-[#13131a] bg-[#F7FAFF] bg-opacity-30 rounded-[10px] flex flex-row items-center justify-center gap-2">
                  <p className="font-epilogue font-normal leading-[22px] text-[#808191] font-jakarta">
                    Adquieres un 0% del proyecto
                  </p>
                </div>

                <CustomButton
                  type="button"
                  title="Invertir"
                  styles="bg-[#18A5FF] px-[50px] py-[10px] flex items-center justify-center w-full h-[50px] rounded-none hover:bg-transparent text-white hover:text-[#18A5FF] hover:border-[3px] hover:border-[#18A5FF]"
                  handleClick={() => userInvesting(true)}
                />
              </div>
            </div>
          </div>
        )}
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
