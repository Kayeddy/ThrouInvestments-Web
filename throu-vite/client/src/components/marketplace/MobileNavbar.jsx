import React, { useState } from "react";
import { mobileNavLinks } from "../../constants";

const MobileNavbar = () => {
  const [active, setActive] = useState("dashboard");
  const Icon = ({
    styles,
    name,
    imgUrl,
    isActive,
    disabled,
    handleClick,
    imageStyle,
  }) => (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${styles} ${
        isActive && isActive === name && "bg-[#18A5FF]"
      }  ${!disabled && "cursor-pointer"}`}
      onClick={() => handleClick()}
    >
      {!isActive ? (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`${imageStyle ? imageStyle : "w-[20px] h-[20px]"}`}
        />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-[20px] h-[20px] ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  );

  return (
    <div className="flex flex-row justify-between items-center rounded-[20px] w-[90vw] py-1 px-5 shadow-lg bg-[#01070E80] backdrop-blur-[4px]">
      {mobileNavLinks.map((link) => (
        <Icon
          key={link.name}
          {...link}
          isActive={active}
          handleClick={() => {
            if (!link.disabled) {
              setActive(link.name);
              navigate(link.link);
            }
          }}
        />
      ))}
    </div>
  );
};

export default MobileNavbar;
