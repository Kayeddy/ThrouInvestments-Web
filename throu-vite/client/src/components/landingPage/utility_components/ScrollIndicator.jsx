import React from "react";
import { AiOutlineArrowDown as DownArrow } from "react-icons/ai";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center">
      <p className="text-[18px] leading-[20px] text-white font-normal">
        Scroll para conocer más
      </p>
      <span className="text-white font-semibold text-[20px] flex justify-center items-center">
        <DownArrow />
      </span>
    </div>
  );
};

export default ScrollIndicator;
