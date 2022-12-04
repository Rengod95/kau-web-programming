import React from "react";
import classes from "./AdCard.module.scss";
const AdCard = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.CardLayout}>
        <div className={classes.TextContainer}>
          <h3 className={classes.AdTitle}>현재 접속자 수</h3>
          <span className={classes.AdDetail}>4,413명</span>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
