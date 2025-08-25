import React from "react";
import classess from "./banner.module.css";

const Banner = (props) => {
  const { bgImage,title, description, button, search, breadcom } = props;
  return (
    <div
      className={`${classess.bannersbg} mb-0 md:mb-7`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})`,
      }}
    >
      <div className="custom-container flex flex-col justify-center sm:h-[320px] h-[230px] items-center">
        {title && (
          <h1 className="responsiveheading2 text-white text-center">{title}</h1>
        )}
        {description && (
          <p className="responsive-text text-white text-center">
            {description}
          </p>
        )}
        {button && <div className="mt-6">{button}</div>}
      </div>
    </div>
  );
};

export default Banner;
