import React from "react";
import classes from "./NoticeCarousel.module.scss";
import { Fab, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NoticeCarousel = () => {
  const settings = {
    width: 100,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoPlay: true,
  };

  return (
    <div className={classes.CarouselContainer}>
      <div></div>
      <div className={classes.slideContainerWrapper}>
        <div className={classes.slideContainer}>
          <Slider {...settings}>
            <div>
              <Paper
                elevation={3}
                sx={{
                  minWidth: 900,
                  minHeight: 400,
                  padding: 5,
                  bgcolor: "#424890",
                  boxShadow: 0,
                  borderRadius: 3,
                }}
              ></Paper>
            </div>
            <div>
              <Paper
                elevation={3}
                sx={{
                  minWidth: 900,
                  minHeight: 400,
                  padding: 5,
                  boxShadow: 0,
                  bgcolor: "#424890",
                  borderRadius: 3,
                }}
              ></Paper>
            </div>
            <div>
              <Paper
                elevation={3}
                sx={{
                  minWidth: 900,
                  minHeight: 400,
                  padding: 5,
                  boxShadow: 0,
                  bgcolor: "#424890",
                  borderRadius: 3,
                }}
              ></Paper>
            </div>
            <div>
              <Paper
                elevation={3}
                sx={{
                  minWidth: 900,
                  minHeight: 400,
                  padding: 5,
                  boxShadow: 0,
                  bgcolor: "transparent",
                  borderRadius: 3,
                }}
              >
                <div></div>
              </Paper>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NoticeCarousel;
