import React from "react";
import { HiOutlineQuestionMarkCircle as InterrogationIcon } from "react-icons/hi";

const info = () => {
  return (
    <div
      className="items-center justify-center p-4 fixed bottom-[20vh] right-[57px] bg-[#062147] lg:flex hidden z-10 hover:bg-[#18A5FF]
    hover:cursor-pointer group hover:p-2 transition ease transform duration-300"
    >
      <span className="text-white text-[25px] flex flex-row items-center justify-center gap-4">
        <span className="material-symbols-outlined text-white">
          contact_support
        </span>
        <p className="hidden group-hover:block text-[16px]">Ayuda y soporte </p>
      </span>
    </div>
  );
};

export default info;
