import React from "react";
import "./ServiceDemoCard.scss";

const ServiceDemoCard = ({ data }) => {
  return (
    <div className="servicedemo">
      <img src={data.imgUrl} alt={data.name} />
      <div className="info">
        <span>{data.name}</span>
        <span>{data?.company || data?.category}</span>
        {data.link && (
          <a href={data.link} target="blank">
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceDemoCard;
