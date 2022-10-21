import React from "react";
import CompanyComponent from "./../../components/CompanyComponent/CompanyComponent";
import "./About.css";

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

  const ImagesArray = Object.entries(images);

  return (
    <div className="About">
      <h1>
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load,{" "}
        <span>an application that can fulfill your daily browsing needs.</span>
      </h1>

      <h2>Findtrend make +1000 Startup grow</h2>

      <div className="companies">
        {ImagesArray.map((item, index) => {
          //   console.log(item);
          return <CompanyComponent key={index} img={item[1]} />;
        })}
      </div>
    </div>
  );
};

export default About;
