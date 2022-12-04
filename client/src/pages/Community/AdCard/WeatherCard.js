import React from "react";
import classes from "./WeatherCard.module.scss";
const WeatherCard = () => {
  return (
    <div className="widget">
      <div className="left-panel panel">
        <div className="date">Monday, 20 Aug 2022</div>
        <div className="city">Mumbai</div>
        <div className="temp">
          <img src="https://codefrog.tech/cp/wp/ts.png" alt="" width="60"></img>
        </div>
      </div>
      <div className="right-panel panel">
        <img src="https://codefrog.tech/cp/wp/mumbai.png" alt="" width="160" />
      </div>
    </div>
  );
};

export default WeatherCard;
