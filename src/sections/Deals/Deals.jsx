import React from "react";
import "./Deals.css";
import Switch from "../../assets/switch.png";
import DealComponent from "../../components/DealComponent/DealComponent";

const Deals = () => {
  return (
    <div className="Deals">
      <h1>Get your best deal</h1>
      <div className="switcher">
        <p>Monthly</p>
        <img src={Switch} alt="" />
        <p>Yearly</p>
      </div>
      <div className="deals__components">
        <DealComponent
          title="Personal"
          description="Special first packet for all"
          price="8"
          page="5"
          groupPage="10"
          groupSaved="5"
          background="#FAFAFA"
          textColor="#000"
          btnColor="#000"
          btnBackground="#A8FF35"
        />
        <DealComponent
          title="Regular"
          description="Recommended for personal pro"
          price="20"
          page="15"
          groupPage="10"
          groupSaved="15"
          background="#A8FF35"
          textColor="#000"
          btnColor="#fff"
          btnBackground="#000000"
        />
        <DealComponent
          title="Personal"
          description="Special first packet for all"
          price="48"
          page="Unlimited"
          groupPage="Unlimited"
          groupSaved="30"
          background="#FAFAFA"
          textColor="#000"
          btnColor="#000"
          btnBackground="#A8FF35"
        />
      </div>
    </div>
  );
};

export default Deals;
