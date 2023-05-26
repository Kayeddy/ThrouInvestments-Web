import React from "react";
import { motion } from "framer-motion";

const Overlay = ({ children, styles }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0.0)" },
  };
  return (
    <motion.div
      className={`overlay ${styles}`}
      variants={variants}
      initial={"closed"}
      exit={"closed"}
      animate={"open"}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
