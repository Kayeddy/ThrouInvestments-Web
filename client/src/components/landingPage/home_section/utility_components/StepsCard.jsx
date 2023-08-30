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
  handleReferenceClick,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center p-4 md:py-6 md:p-2 gap-4 w-full max-w-[300px] h-[220px] lg:min-w-[220px] xl:min-w-[240px] lg:h-[240px] md:w-[20vw] md:min-w-[150px] md:max-w-[200px] md:h-[220px] rounded-[10px] bg-white ${style}`}
    >
      <img src={image} alt={title} className={iconStyle} />
      <div>{title}</div>
      <p className="font-normal leading-[15px] text-[17px] text-center text-[#062147]">
        {description}
      </p>

      <p
        onClick={handleReferenceClick}
        className={`text-normal font-jakarta text-[20px] leading-[10px] ${goToColor} hover:underline cursor-pointer hover:font-semibold transition ease transform duration-300`}
      >
        {goTo}
      </p>
    </div>
  );
};

export default StepsCard;
