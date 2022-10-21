import SocialMediaComponent from "../../components/SocialMedia/SocialMediaComponent";
import "./FeatureSection.css";
import FindtrendImage from "../../assets/logo.png";
import FeatureImg from "../../assets/img-feature.png";
import FeatureImg1 from "../../assets/img-feature1.png";
import FeatureImg2 from "../../assets/img-feature2.png";
import { useState, useEffect } from "react";

const FeatureSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="FeatureSection">
      <h1>Open new tabs is sh*t </h1>
      <div className="FeatureSection__illustration__container">
        <div className="featureimg__container1">
          <img src={width > 768 ? FeatureImg2 : FeatureImg} alt="" />
        </div>
        <div className="FeatureSection__illustration">
          <SocialMediaComponent
            img={FindtrendImage}
            title="Findtrend - Elon Musk"
          />
        </div>
        <div className="featureimg__container2">
          <img src={FeatureImg1} alt="" />
        </div>
      </div>
      <p>
        A solution for your browser tabs and don't make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  );
};

export default FeatureSection;
