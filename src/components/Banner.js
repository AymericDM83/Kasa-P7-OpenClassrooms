import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;
