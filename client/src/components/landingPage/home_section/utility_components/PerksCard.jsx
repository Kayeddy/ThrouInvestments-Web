import React, { useState, useRef, useEffect } from "react";

const PerksCard = ({ icon, title, description, hoverIcon, imgStyle }) => {
  const [currentIcon, setCurrentIcon] = useState(icon);
  const defaultIcon = useRef(icon);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cardTapped, setCardTapped] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseOver = () => {
    if (!isTouchDevice) {
      setCurrentIcon(hoverIcon);
    }
  };

  const handleMouseOut = () => {
    if (!isTouchDevice) {
      setCurrentIcon(defaultIcon.current);
    }
  };

  const handleTap = () => {
    if (isTouchDevice) {
      setCardTapped(!cardTapped);
      currentIcon == hoverIcon
        ? setCurrentIcon(defaultIcon.current)
        : setCurrentIcon(hoverIcon);
      currentIcon == defaultIcon.current
        ? setCurrentIcon(hoverIcon)
        : setCurrentIcon(defaultIcon.current);
    }
  };

  return (
    <div
      className={`${cardTapped ? "h-[320px] bg-[#062147]" : "h-[200px]"} ${
        !isTouchDevice && "nonTouchDevice hover:bg-[#062147]"
      }  md:min-h-[300px] md:min-w-[300px] md:w-[25vw] md:p-6 p-3 sm:w-[250px] md:h-[320px]  w-[180px] flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg md:shadow-none bg-[#F7FAFF] group transition ease-in-out delay-50 z-10`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleTap}
    >
      <img
        src={currentIcon}
        alt={title}
        className={`${
          currentIcon !== defaultIcon.current &&
          `group-hover:w-[45px] group-hover:h-[50px]`
        } ${isTouchDevice && cardTapped ? imgStyle : "w-[50px] h-[50px]"}`}
      />

      {/** Desktop dynamic content */}
      <div className="hidden md:flex items-center justify-between flex-col gap-6 px-2 text-center group h-full">
        <h3 className="font-semibold text-[20px] sm:text-[25px] leading-[1em] lg:leading-[1.5em] flex-wrap lg:group-hover:text-[#1486d4] text-[#062147]">
          {title}
        </h3>
        <p className="text-[15px] sm:text-base font-normal leading-[1em] lg:group-hover:text-white text-[#01070E] font-jakarta">
          {description}
        </p>

        <p className="text-[#1486d4] hover:underline hover:text-[17px] cursor-pointer ">
          Explorar
        </p>
      </div>

      {/** Mobile dynamic content */}

      <div className="flex md:hidden items-center justify-between flex-col gap-6 md:px-2 text-center h-fit">
        <h3
          className={`font-semibold text-[20px] sm:text-[25px] leading-[1em] lg:leading-[1.5em] flex-wrap ${
            cardTapped ? "text-[#1486d4]" : "text-[#062147]"
          }`}
        >
          {title}
        </h3>

        {cardTapped && (
          <p
            className={`text-[15px] sm:text-base font-normal leading-[1em] font-jakarta ${
              cardTapped ? "text-white" : "text-[#01070E]"
            }`}
          >
            {description}
          </p>
        )}

        <p className="text-[#1486d4] hover:underline hover:text-[17px] cursor-pointer ">
          Explorar
        </p>
      </div>
    </div>
  );
};

export default PerksCard;
