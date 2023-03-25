import { style } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Theme_dark_icon,
  Theme_dark_icon2,
  Theme_light_icon,
  Throu_sm_dark,
} from "../../assets";
import { navlinks } from "../../constants";
import { handleThemeChange } from "../../utils";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const changeTheme = handleThemeChange();

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
      class={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${styles} ${
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
        <img src={imgUrl} alt="fund_logo" className={`w-[20px] h-[20px]`} />
      )}
    </div>
  );

  const navigate = useNavigate();

  return (
    <div className="md:flex justify-between items-center flex-col sticky top-5 h-[75vh] hidden">
      <Link to="/">
        <Icon
          styles="w-[62px] h-[62px] dark:bg-[#01070E80] bg-[#F7FAFF80]"
          imageStyle="w-[50px] h-[50px]"
          imgUrl={Throu_sm_dark}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center rounded-[20px] w-[70px] py-4 mt-12 shadow-lg dark:bg-[#01070E80] bg-[#F7FAFF80]">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
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
        <Icon
          styles="bg-transparent shadow-secondary"
          imgUrl={Theme_light_icon}
          handleClick={() => {
            changeTheme.toggleTheme("dark");
          }}
        />
        <Icon
          styles="dark:hidden bg-transparent shadow-secondary "
          imgUrl={Theme_dark_icon2}
          handleClick={() => {
            changeTheme.toggleTheme("dark");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
