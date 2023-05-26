import React from "react";

const InfoBox = ({ title, value, moreWidth }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md ${
        moreWidth ? "w-[160px]" : "md:w-[150px] w-[135px]"
      } md:h-[100px] h-[110px] shadow-[0px_0px_10px_rgba(24,165,255,0.2)] p-4 dark:bg-[#01070E] bg-white bg-opacity-30 text-[#062147] dark:text-white`}
    >
      <h4 className="font-epilogue font-bold text-[30px]  px-3 w-full text-center truncate rounded-t-md">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[13px] px-3 w-full text-center rounded-b-md font-jakarta ">
        {title}
      </p>
    </div>
  );
};

export default InfoBox;
