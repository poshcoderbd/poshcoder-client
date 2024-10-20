import React from "react";
import Marquee from "react-fast-marquee";

const Slidetext = () => {
  return (
    <div className="slideText">
      <Marquee className="opacity-2">
        Creative Design <span className="color-red"> & </span>Development Agency
        <span className="color-red mr-6r">.</span>{" "}
      </Marquee>
    </div>
  );
};

export default Slidetext;
