/* eslint-disable */
import React from "react";
import "./Hero.css";
import heroImg from "../../assets/img-hero.png";
import SocialMediaComponent from "../../components/SocialMedia/SocialMediaComponent";
// imgs
import TwitterImg from "../../assets/twitter.png";
import PinterestImg from "../../assets/pinterest.png";
import FacebookImg from "../../assets/facebook.png";
import DribbleImg from "../../assets/dribble.png";
//

const Hero = () => {
  return (
    <section className="Hero">
      <h1 className="">Minimize your tabs.</h1>
      <h2>Find the trends!</h2>
      <p>
        Don't let your computer memories consumes all of those browser tabs.
        Findtrend let you gathers all of your favorite website into one place.
      </p>
      <div className="Hero__btn">
        <a href="#">Get Started 🔥</a>
        <img src={heroImg} alt="" />
      </div>

      <div className="social__media">
        <SocialMediaComponent
          title="Cryptopunk - Search"
          img={TwitterImg}
          rotate="-4deg"
          zIndex='412'
          />
        <SocialMediaComponent
          title="Cryptopunk - Search"
          img={PinterestImg}
          rotate="2deg"
          zIndex='3'
          />
        <SocialMediaComponent
          title="Cryptopunk - Search"
          img={FacebookImg}
          rotate="-2deg"
          zIndex='2'
          />
        <SocialMediaComponent
          title="Cryptopunk - Search"
          img={DribbleImg}
          rotate="4deg"
          zIndex='1'
          />
      </div>
    </section>
  );
};

export default Hero;
