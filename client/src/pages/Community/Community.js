import React from "react";
import classes from "./Community.module.scss";
import CommunityTab from "./Tab/CommunityTab";
import Feed from "./Feed/Feed";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./Tab/SearchBar";
import AdCard from "./AdCard/AdCard";
import WeatherCard from "./AdCard/WeatherCard";
import AddFeed from "./AddFeedForm/AddFeed";

import logo2 from "../../assets/logo2.svg";
const Community = () => {
  return (
    <div className={classes.CommunityContainer}>
      <div className={classes.ContainerLayout}>
        <section className={classes.Header}>
          <div className={classes.HeaderLeft}></div>
          <div className={classes.TabContainer}>
            <CommunityTab></CommunityTab>
          </div>
          <div className={classes.HeaderRight}>
            <SearchBar />
          </div>
        </section>
        <div className={classes.MiddleContainer}>
          <div className={classes.LeftSide}>
            <ProfileCard />
          </div>
          <div className={classes.Center}>
            <Feed></Feed>
            <Feed img={logo2}></Feed>
            <Feed></Feed>
            <Feed></Feed>
            <Feed></Feed>
            <Feed></Feed>
          </div>
          <div className={classes.RightSide}>
            <AdCard></AdCard>
            <AddFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
