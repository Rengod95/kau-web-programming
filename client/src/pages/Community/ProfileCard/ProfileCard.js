import React from "react";
import classes from "./ProfileCard.module.scss";
import { Avatar } from "@mui/material";
import AuthButton from "../../../components/UI/AuthButton";

const ProfileCard = () => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.ImgContainer}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            backgroundColor: "#f7c94b",
            color: "#000",
            width: 106,
            height: 106,
          }}
        />
      </div>
      <div className={classes.DetailContainer}>
        <h3>유저 이름</h3>
        <h4>유저 학과</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consectetur dolor dolore doloremque,
        </span>
      </div>
      <div className={classes.ButtonContainer}>
        <AuthButton size={{ width: 100, height: 50 }}>프로필 보기</AuthButton>
        <AuthButton>수정하기</AuthButton>
      </div>
    </div>
  );
};

export default ProfileCard;
