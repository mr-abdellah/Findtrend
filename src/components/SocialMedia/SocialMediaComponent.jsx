import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SocialMediaComponent.css";

const SocialMediaComponent = ({ img, title, rotate, zIndex }) => {
  return (
    <div
      className="SocialMediaComponent"
      style={{ transform: `rotate(${rotate})`, zIndex: `${zIndex}` }}
    >
      <img src={img} alt="" />
      <p>{title}</p>
      <CloseIcon />
    </div>
  );
};

export default SocialMediaComponent;
