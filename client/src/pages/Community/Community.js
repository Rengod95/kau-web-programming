import React from "react";
import classes from "./Community.module.scss";
import CommunityTab from "./Tab/CommunityTab";
import Feed from "./Feed/Feed";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./Tab/SearchBar";
import AdCard from "./AdCard/AdCard";
import AddFeed from "./AddFeedForm/AddFeed";
import feed_img_1 from "../../assets/feed-img-1.png";
import feed_img_2 from "../../assets/feed-img-2.png";
import feed_img_3 from "../../assets/feed-img-3.png";
import feed_img_4 from "../../assets/feed-img-4.png";
import feed_img_5 from "../../assets/feed-img-5.png";

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
            {feeds.map((feed) => {
              return (
                <Feed title={feed.title} text={feed.text} img={feed.img} />
              );
            })}
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

const post1 = {
  title: "시즌 오픈",
  text:
    "12월 2일부터 평창 휘닉스파크 시즌 오픈했습니다!" +
    "시즌방도 오픈했으니 참고하기 바랍니다.",
  img: feed_img_1,
};

const post2 = {
  title: "샵투어 갈사람??",
  text:
    "이번에 샵투어 가려고 하는데 같이 갈 사람 있을까요?" +
    "같이 시즌때 사용할 장비랑 입을 옷 장만해요~",
  img: feed_img_2,
};

const post3 = {
  title: "시즌권 구매 공지",
  text:
    "22/23시즌 연합 시즌권 나왔습니다." +
    "시즌권 정가 : 290,000원" +
    "삼성/하나/농협 결제 시 15 % 할인가 : 246,500원" +
    "스마일 카드로 결제 시 20% 할인가 : 232,000원" +
    "판매 기간 : ~ 10월 31일 입니다.",
  img: feed_img_3,
};

const post4 = {
  title: "2학기 회비 공지",
  text:
    "!2학기 보잉에 오신 걸 환영합니다!" +
    "더욱 재미있고, 다양한 활동을 위해 보잉에서는 회비 2만원을 받고 있어요." +
    "00은행 1234567890 (홍길동) 으로 입금해주시면 됩니다." +
    "감사합니다 :)",
  img: feed_img_4,
};

const post5 = {
  title: "점심에 학관 앞에서 보드타요~",
  text:
    "오늘 점심에 시간이 비어서 보드타려고 하는데 같이 탈 사람 있을까요?" +
    "잘 타지는 못하는데 같이 시간 때워요!",
  img: feed_img_5,
};

const feeds = [post1, post2, post3, post4, post5];

export default Community;
