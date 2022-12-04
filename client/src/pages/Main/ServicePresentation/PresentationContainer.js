import React from "react";
import classes from "./PresentationContainer.module.scss";
import DetailCard from "./DetailCard";

const PresentationContainer = () => {
  return (
    <div className={classes.container}>
      <h1>서비스 소개</h1>
      <div className={classes.ContainerLayout}>
        <div className={classes.DetailCardContainer}>
          <DetailCard />
        </div>
        <div className={classes.DetailCardContainer}>
          <DetailCard />
        </div>
        <div className={classes.DetailCardContainer}>
          <DetailCard />
        </div>
        <div className={classes.DetailCardContainer}>
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default PresentationContainer;
