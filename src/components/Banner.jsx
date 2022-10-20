import React from "react";

const Banner = ({ location }) => {
  return (
    // Differentiate components className depending on the page location with props
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;
