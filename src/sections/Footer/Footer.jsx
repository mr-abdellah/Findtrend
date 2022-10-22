import React from "react";
import "./Footer.css";
import logo from "../../assets/logoBW.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="" />
        <h3>Findtrend</h3>
      </div>

      <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
    </footer>
  );
};

export default Footer;
