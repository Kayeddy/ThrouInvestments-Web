import React, { useState } from "react";
import { MdOutlineDocumentScanner as DocumentIcon } from "react-icons/md";
const CampaignDetailsDocs = () => {
  return (
    <div className="mt-[60px] flex items-center justify-center">
      <div className="mt-[20px] flex flex-row justify-center items-center p-2 bg-[#1c1c24] rounded-[10px] w-fit gap-6">
        <span className="flex items-center justify-center text-slate-200">
          <DocumentIcon className="h-[50px] w-[50px]" />
        </span>
        <div className="flex flex-col p-2 items-center justify-center">
          <h4 className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]">
            Document title
          </h4>
          <p className="font-epilogue font-semibold text-center leading-[22px] text-[#808191]">
            Document description
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsDocs;
