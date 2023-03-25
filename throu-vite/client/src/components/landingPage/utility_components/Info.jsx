import React from "react";
import { HiOutlineQuestionMarkCircle as InterrogationIcon } from "react-icons/hi";

const info = () => {
  return (
    <div className="items-center justify-center p-4 fixed bottom-[20vh] right-[8%] bg-[#062147] lg:flex hidden z-10">
      <span className="text-white text-[25px]">
        <InterrogationIcon />
      </span>
    </div>
  );
};

export default info;
