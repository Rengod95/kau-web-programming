import React from "react";
import classes from "./NoticeCarousel.module.scss";
import { createTheme, Fab, Paper, ThemeProvider } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const NoticeCarousel = () => {
  const settings = {
    width: 100,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    infinite: true,
  };

  return (
    <div className={classes.slideContainerWrapper}>
      <div className={classes.slideContainer}>
        <Slider {...settings}>
          <div>
            <Slide />
          </div>
          <div>
            <Slide />
          </div>
          <div>
            <Slide />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NoticeCarousel;
