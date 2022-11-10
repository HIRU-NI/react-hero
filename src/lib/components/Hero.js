import React from "react";

import "./styles/hero.css";

const Hero = ({
  title = "Always make room for beauty in your life",
  description = "At Prauge we are passionate about making people feel good while looking their best. Attending advanced education allows us to keep up with the latest trends and provide each guest with a unique & customizable result. For your convenience, Schedule your reservation today!",
  image = require("../assets/about-background.png"),
}) => {
  const blendImage = require("../assets/heroImage-background-blend.png")
  return (
    <div className="hero_main">
      <div
        className="hero_background"
        style={{
          backgroundImage:
           [ `url(${image})`, `url(${blendImage})`],
            
        }}
      >
        <div className="hero_text">
          <h4 className="hero_title">{title}</h4>
          <p className="hero_subtitle">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
