import React, { useState } from "react";
import classes from "./Feed.module.scss";
import Input from "../../../components/UI/Input";
import { Avatar, Button } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import TagChip from "../../../components/UI/TagChip";
import Comment from "./Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import AddComment from "./AddComment";
const Feed = ({ img, title, text }) => {
  const [commentIsClicked, setCommentIsClicked] = useState(false);

  const commentClickHandler = () => {
    setCommentIsClicked((prev) => !prev);
  };

  return (
    <div className={classes.FeedContainer}>
      <header>
        <div className={classes.AvatarContainer}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              backgroundColor: "#00bf8e",
              color: "#000",
              width: 56,
              height: 56,
            }}
          />
        </div>
        <div className={classes.TitleContainer}>
          <h4>{title ? title : "Title of the feed"}</h4>
          <span>10 minutes ago</span>
        </div>
        <div className={classes.AvatarContainer}>
          <Button sx={{ width: 60, height: 60 }}>
            <LinearScaleIcon />
          </Button>
        </div>
      </header>
      <section className={classes.TextContainer}>
        {text
          ? text
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur cumque delectus dolorem et eveniet impedit ipsam itaque molestiae nam nihil nobis, nostrum quia quis recusandae reprehenderit sunt, velit?"}
      </section>
      <img src={img} className={classes.FeedImage} alt={""} />
      <section className={classes.TagContainer}>
        <TagChip label={"한정 이벤트"} />
        <TagChip label={"스키"} />
        <TagChip label={"동계스포츠"} />
        <TagChip label={"시즌방"} />
      </section>
      <section className={classes.BottomNavContainer}>
        <div className={classes.NavBottonContainer}>
          <Button
            sx={{
              color: "#6c63ff",
              width: "100%",
              height: "100%",
            }}
            onClick={commentClickHandler}
          >
            <CommentOutlinedIcon />
            <span className={classes.NavSpan}>댓글</span>
          </Button>
        </div>
        <div className={classes.NavBottonContainer}>
          <Button
            sx={{
              color: "#f75842",
              width: "100%",
              height: "100%",
            }}
          >
            <FavoriteBorderOutlinedIcon />
            <span className={classes.NavSpan}>좋아요</span>
          </Button>
        </div>
        <div className={classes.NavBottonContainer}>
          <Button
            sx={{
              color: "#6c63ff",
              width: "100%",
              height: "100%",
            }}
          >
            <ShareOutlinedIcon />
            <span className={classes.NavSpan}>공유</span>
          </Button>
        </div>
      </section>
      {commentIsClicked && (
        <section className={classes.CommentContainer}>
          <Comment />
          <AddComment />
        </section>
      )}
    </div>
  );
};

export default Feed;
