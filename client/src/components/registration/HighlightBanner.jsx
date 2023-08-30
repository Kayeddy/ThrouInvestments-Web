import React, { useEffect } from "react";
import { motion } from "framer-motion";

const bannerVariants = {
  hidden: { x: "100vw" }, // initial state is off the screen to the right
  visible: {
    x: 0, // animate in to x: 0 (full view)
    transition: { duration: 0.5 }, // adjust duration as needed
  },
  exit: {
    x: "100vw", // animate out off the screen to the left
    transition: { ease: "easeInOut", duration: 0.3 }, // adjust duration as needed
  },
};

const timerVariants = {
  start: { scaleX: 1 }, // initially the bar will take 100% of the width
  end: { scaleX: 0, transition: { duration: 5, ease: "linear" } }, // it will shrink to 0% of the width in 5 seconds (or your desired time)
};

const HighlightBanner = ({ message, showBanner }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      showBanner(false);
    }, 5000); // 5000 milliseconds (or your desired time)

    return () => clearTimeout(timer);
  }, [showBanner]);

  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute z-50 right-0 top-[200px] md:top-2 w-50 h-50 bg-[#D73C1D] flex flex-col gap-2"
    >
      <div className="flex flex-row items-center justify-center gap-2 p-4">
        <span
          className="material-symbols-outlined text-white cursor-pointer text-[15px]"
          onClick={() => showBanner(false)}
        >
          notifications_active
        </span>

        <p className="text-white text-sm">{message}</p>

        <span
          className="material-symbols-outlined text-white cursor-pointer text-[20px] md:text-[15px] ml-5"
          onClick={() => showBanner(false)}
        >
          cancel
        </span>
      </div>

      <motion.div
        variants={timerVariants}
        initial="start"
        animate="end"
        className="w-full bg-white h-1"
      />
    </motion.div>
  );
};

export default HighlightBanner;
