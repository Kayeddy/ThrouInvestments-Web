import React from "react";

const StepsCard = ({
  image,
  title,
  titleColor,
  description,
  style,
  goTo,
  goToColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-2 gap-4 w-[200px] h-[250px] shadow-xl rounded-xl bg-white ${style}`}
    >
      <img src={image} alt={title} className="h-[38px] w-[33px]" />
      <h2
        className={`font-semibold leading-[20px] text-[18px] text-center ${titleColor} `}
      >
        {title}
      </h2>
      <p className="font-normal leading-[15px] text-[15px] text-center text-[#062147]">
        {description}
      </p>

      <a
        href=""
        className={`text-normal text-[15px] leading-[10px] mt-6 ${goToColor}`}
      >
        {goTo}
      </a>
    </div>
  );
};

export default StepsCard;
