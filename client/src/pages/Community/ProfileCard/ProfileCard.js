import React from "react";
import classes from "./ProfileCard.module.scss";
import { Avatar } from "@mui/material";
import AuthButton from "../../../components/UI/AuthButton";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state.Auth.user);

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
        <h3>{user.name ? user.name : "비로그인"}</h3>
        <h4>{user.major ? user.major : "소프트웨어과"}</h4>
        <span>한 줄 소개를 작성해 주세요!</span>
      </div>
      <div className={classes.ButtonContainer}>
        <AuthButton size={{ width: 100, height: 50 }}>프로필 보기</AuthButton>
        <AuthButton>수정하기</AuthButton>
      </div>
    </div>
  );
};

export default ProfileCard;
