import React from "react";

const CustomButton = ({ type, title, handleClick, styles }) => {
  return (
    <button
      type={type}
      className={`${styles} font-epilogue text-[1em] leading-[30px] text-center px-12 font-bold`}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.01 }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
