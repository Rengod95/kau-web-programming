import React from "react";
import classes from "./Gallery.module.scss";
import CalendarCard from "../Main/Calendar/CalendarCard";
const Gallery = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Layout}>
        <h2>Gallery</h2>
        <div className={classes.ImageContainer}>
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
