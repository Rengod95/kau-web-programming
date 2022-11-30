import React from "react";
import NoticeCarousel from "./top/NoticeCarousel";
import classes from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classes.Container}>
      <section className={classes.top}>
        <NoticeCarousel></NoticeCarousel>
      </section>
      <section className={classes.middle}> </section>
      <section className={classes.bottom}></section>
    </div>
  );
};

export default MainPage;
