import React from "react";
import classes from "./Comment.module.scss";
import { Avatar, Button } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

const Comment = ({ name, text }) => {
  return (
    <div className={classes.FeedComment}>
      <div className={classes.AvatarContainer}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            backgroundColor: "#f7c94b",
            color: "#000",
            width: 46,
            height: 46,
          }}
        />
      </div>
      <div className={classes.FeedTextContainer}>
        <h4>User Name</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet
          aspernatur aut blanditiis cum ducimus enim fuga hic id inventore,
          libero molestias natus nesciunt nobis officia recusandae temporibus
          vero voluptatibus.natus nesciunt nobis officia recusandae temporibus
          vero voluptatibus. vero voluptatibus. vero voluptatibus. vero
          voluptatibus. voluptatibus. voluptatibus. voluptatibus. voluptatibus.
        </span>
      </div>
      <div className={classes.AvatarContainer}>
        <Button sx={{ width: 20, height: 20 }}></Button>
      </div>
    </div>
  );
};

export default Comment;
