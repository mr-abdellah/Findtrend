import React from "react";
import CompanyComponent from "./../../components/CompanyComponent/CompanyComponent";
import "./About.css";
//
import tweet1 from "../../assets/tweets/tweet 1.png";
import tweet2 from "../../assets/tweets/tweet 2.png";
import tweet3 from "../../assets/tweets/tweet 3.png";
//

const About = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../../assets/companies", false, /\.(png)$/)
  );

  const images2 = importAll(
    require.context("../../assets/platforms", false, /\.(png)$/)
  );

  const startUpImages = Object.entries(images);

  const platformsImg2 = Object.entries(images2);

  return (
    <div className="About">
      <h1>
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load,{" "}
        <span>an application that can fulfill your daily browsing needs.</span>
      </h1>

      <h2>Findtrend make +1000 Startup grow</h2>

      <div className="companies">
        {startUpImages.map((item, index) => {
          //   console.log(item);
          return <CompanyComponent key={index} img={item[1]} />;
        })}
      </div>

      <h3>All platform connect to Findtrend</h3>

      <div className="platforms">
        {platformsImg2.map((item, index) => (
          <img key={index} src={item[1]} alt="" />
        ))}
      </div>

      <div className="tweets">
        <img src={tweet1} alt="" />
        <img src={tweet2} alt="" />
        <img src={tweet3} alt="" />
        <button>View More Trend</button>
      </div>
    </div>
  );
};

export default About;
