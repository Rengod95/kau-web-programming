import React from "react";
import AuthButton from "../../../components/UI/AuthButton";
import { Box, Paper } from "@mui/material";
import classes from "./Slide.module.scss";
import logo1 from "../../../assets/logo1.svg";
import logo2 from "../../../assets/logo2.svg";

const Slide = () => {
  return (
    <div className={classes.HeaderLayout}>
      <div className={classes.Card}>
        <h1>XX 동아리 웹에 오신것을 환영합니다.</h1>
        <h2>동아리와 관련된 다양한 웹 서비스 지원을 목표로 합니다.</h2>
        <div className={classes.CardButtonContainer}>
          <AuthButton disabled={false} size={{ width: 250, height: 70 }}>
            Get Started
          </AuthButton>
          <AuthButton disabled={false}>Details</AuthButton>
        </div>
      </div>
      <Box
        elevation={3}
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          opacity: 0.8,
          display: "flex",
          justifyContent: "flex-end",
        }}
        sx={{
          minWidth: 450,
          minHeight: 400,
          maxWidth: 450,
          padding: 5,
          boxShadow: 0,
          borderRadius: 2,
          display: "grid",
        }}
      />
    </div>
  );
};

export default Slide;
