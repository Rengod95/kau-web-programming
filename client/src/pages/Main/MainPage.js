import React from "react";
import NoticeCarousel from "./Carousel/NoticeCarousel";
import classes from "./MainPage.module.scss";
import PresentationContainer from "./ServicePresentation/PresentationContainer";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className={classes.Container}>
      <section className={classes.top}>
        <NoticeCarousel></NoticeCarousel>
      </section>
      <section className={classes.middle}>
        <PresentationContainer />
      </section>
      <section className={classes.bottom}></section>
      <section className={classes.Footer}>
        <Footer />
      </section>
    </div>
  );
};

export default MainPage;
