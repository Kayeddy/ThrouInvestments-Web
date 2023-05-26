import React from "react";

const StepsCard = ({
  image,
  title,
  titleColor,
  description,
  style,
  goTo,
  goToColor,
  iconStyle,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center p-2 gap-4 min-w-full w-full h-[220px] lg:min-w-[230px] lg:h-[240px] md:w-[20vw] md:min-w-[150px] md:max-w-[200px] md:h-[220px] rounded-[10px] bg-white ${style}`}
    >
      <img src={image} alt={title} className={iconStyle} />
      <div>{title}</div>
      <p className="font-normal leading-[15px] text-[15px] text-center text-[#062147]">
        {description}
      </p>

      <a
        href=""
        className={`text-normal text-[15px] leading-[10px] ${goToColor} hover:underline`}
      >
        {goTo}
      </a>
    </div>
  );
};

export default StepsCard;
