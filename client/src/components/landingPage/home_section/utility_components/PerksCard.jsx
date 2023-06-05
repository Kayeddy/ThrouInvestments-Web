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
      }  delay-50 group z-10 flex w-[180px] flex-col items-center justify-center gap-2 rounded-lg bg-[#F7FAFF] p-3 shadow-lg transition ease-in-out sm:w-[250px] md:h-[300px] md:min-h-[300px] md:w-[25vw] md:min-w-[300px] md:p-3 md:shadow-none xl:h-[320px]`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleTap}
    >
      <img
        src={currentIcon}
        alt={title}
        className={`${
          currentIcon !== defaultIcon.current &&
          `group-hover:h-[50px] group-hover:w-[50px]`
        } ${isTouchDevice && cardTapped ? imgStyle : "h-[45px] w-[50px]"}`}
      />

      {/** Desktop dynamic content */}
      <div className="group hidden h-fit flex-col items-center justify-around gap-4 px-2 text-center md:flex">
        <h3 className="flex-wrap font-semibold leading-[1em] text-[#062147] sm:text-[25px] md:text-[22px] lg:leading-[1.5em] lg:group-hover:text-[#1486d4] xl:text-[25px]">
          {title}
        </h3>
        <p className="font-jakarta text-[15px] font-normal leading-[1em] text-[#01070E] sm:text-base lg:group-hover:text-white">
          {description}
        </p>

        <p className="cursor-pointer text-[#1486d4] hover:text-[17px] hover:underline ">
          Explorar
        </p>
      </div>

      {/** Mobile dynamic content */}

      <div className="flex h-fit flex-col items-center justify-between gap-6 text-center md:hidden md:px-2">
        <h3
          className={`flex-wrap text-[20px] font-semibold leading-[1em] sm:text-[25px] lg:leading-[1.5em] ${
            cardTapped ? "text-[#1486d4]" : "text-[#062147]"
          }`}
        >
          {title}
        </h3>

        {cardTapped && (
          <p
            className={`font-jakarta text-[15px] font-normal leading-[1em] sm:text-base ${
              cardTapped ? "text-[#01070E]" : "text-[#01070E]"
            }`}
          >
            {description}
          </p>
        )}

        <p className="cursor-pointer text-[#1486d4] hover:text-[17px] hover:underline ">
          Explorar
        </p>
      </div>
    </div>
  );
};

export default PerksCard;
