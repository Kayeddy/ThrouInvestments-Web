import React, { useState, useRef } from "react";
import { IconContext } from "react-icons/lib";

const PerksCard = ({ icon, title, description, hoverIcon, imgStyle }) => {
  const [currentIcon, setCurrentIcon] = useState(icon);
  const defaultIcon = useRef(icon);
  return (
    <div
      className="lg:min-h-[300px] lg:py-4 lg:w-[30vw] h-[30vh] w-[40vw] lg:px-2 flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg lg:shadow-none bg-[#F7FAFF] lg:bg-transparent text-[#062147] lg:hover:bg-[#062147] group transition ease-in-out delay-50"
      onMouseOver={() => setCurrentIcon(hoverIcon)}
      onMouseOut={() => setCurrentIcon(defaultIcon.current)}
    >
      <img
        src={currentIcon}
        alt={title}
        className={`${
          currentIcon != defaultIcon.current
            ? `group-hover:${imgStyle}`
            : "w-[40px] h-[40px]"
        }`}
      />

      <div className="flex items-center justify-center flex-col gap-6 px-2 lg:px-[5vw] text-center group">
        <h3 className="font-semibold leading-[1em] lg:leading-[1.5em] text-[4.2vw] sm:text-[1.5em] lg:text-[2vw] flex-wrap lg:group-hover:text-[#1486d4]">
          {title}
        </h3>
        <p className="text-[3.1vw] sm:text-[1.1em] font-normal leading-[1em] lg:group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PerksCard;
