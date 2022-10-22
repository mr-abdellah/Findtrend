import React from "react";
import "./DealComponent.css";
import check from "../../assets/check.png";

const DealComponent = ({
  title,
  description,
  price,
  page,
  groupPage,
  groupSaved,
  background,
  textColor,
  btnColor,
  btnBackground,
}) => {
  return (
    <div
      className="deal__component"
      style={{ background: `${background}`, color: `${textColor}` }}
    >
      <div>
        {" "}
        <h3>{title}</h3>
        <p className="deal__component__description">{description}</p>
        <hr
          style={(background = "#A8FF35" && { borderTop: "1px solid black" })}
        />
        <p className="deal__component__price">
          <span>${price}</span> /Month
        </p>
        <p>
          <img src={check} alt="" />
          {page === "Unlimited" ? page : `Up to ${page}`} page each group
        </p>
        <p>
          <img src={check} alt="" />
          {groupPage === "Unlimited" ? groupPage : `Up to ${groupPage}`} group page
        </p>
        <p>
          <img src={check} alt="" />
          {groupSaved} Days group page saved
        </p>
      </div>
      <button
        style={{ backgroundColor: `${btnBackground}`, color: `${btnColor}` }}
      >
        Start Free Trial
      </button>
    </div>
  );
};

export default DealComponent;
