import SocialMediaComponent from "../../components/SocialMedia/SocialMediaComponent";
import "./FeatureSection.css";
import FindtrendImage from "../../assets/logo.png";
import FeatureImg from "../../assets/img-feature.png";
import FeatureImg1 from "../../assets/img-feature1.png";

const FeatureSection = () => {
  return (
    <div className="FeatureSection">
      <h1>Open new tabs is sh*t </h1>
      <div className="FeatureSection__illustration__container">
        <img src={FeatureImg} alt="" />
        <div className="FeatureSection__illustration">
          <SocialMediaComponent
            img={FindtrendImage}
            title="Findtrend - Elon Musk"
          />
        </div>
        <img src={FeatureImg1} alt="" />
      </div>
      <p>
        A solution for your browser tabs and don't make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  );
};

export default FeatureSection;
