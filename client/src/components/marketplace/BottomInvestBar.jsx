import React from "react";
import { CustomButton } from "../marketplace";

const BottomInvestBar = ({ campaign }) => {
  return (
    <div className="fixed bottom-[55px] left-0 right-0 flex md:hidden px-4 py-2 z-20">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <CustomButton
          type="button"
          title={`Invertir en este proyecto`}
          styles="w-full bg-[#17a5ff] py-4 text-white"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default BottomInvestBar;
