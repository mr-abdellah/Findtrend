import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SocialMediaComponent.css";
import { motion } from "framer-motion";

const SocialMediaComponent = ({ img, title, rotate, zIndex, duration }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: duration,
      }}
      className="SocialMediaComponent"
      style={{ transform: `rotate(${rotate})`, zIndex: `${zIndex}` }}
    >
      <img src={img} alt="" />
      <p>{title}</p>
      <CloseIcon />
    </motion.div>
  );
};

export default SocialMediaComponent;
