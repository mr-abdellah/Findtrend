import React from "react";
import "./CompanyComponent.css";

const CompanyComponent = ({ img }) => {
  return (
    <div className="CompanyComponent">
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CompanyComponent;
