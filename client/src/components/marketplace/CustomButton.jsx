import React from "react";
import { motion } from "framer-motion";

const CustomButton = ({ type, title, handleClick, styles, optionalIcon }) => {
  return (
    <motion.button
      type={type}
      className={`${styles} font-epilogue font-semibold text-[18px] leading-[26px] px-4`}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.01 }}
    >
      {optionalIcon && (
        <img src={optionalIcon} alt={title} className="w-[15px] h-[15px]" />
      )}
      {title}
    </motion.button>
  );
};

export default CustomButton;
