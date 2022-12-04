import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";
import Box from "@mui/material/Box";
import { Button, Input, TextField } from "@mui/material";
import AuthButton from "../../components/UI/AuthButton";
const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterLayout}>
        <div className={classes.FooterCard}>
          <div className={classes.Card}>
            <div>
              <span>저희의 소식을 구독 해 주세요!</span>
            </div>
            <TextField
              variant={"outlined"}
              sx={{
                ...textFieldStyle,
                width: "100%",
                display: "flex",
                marginBottom: "none",
              }}
              label={"example@example.com"}
            ></TextField>
            <AuthButton size={{ width: "100%" }}>Subscribe</AuthButton>
          </div>
        </div>
        <div className={classes.TableContainer}>
          <table>
            <thead>
              <tr>
                <th>RESOURCES</th>
                <th>PRICING</th>
                <th>COMPANY</th>
                <th>SOCIAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application</td>
                <td>Season</td>
                <td>Overview</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>Documentation</td>
                <td>Events</td>
                <td>About Us</td>
                <td>Instagram</td>
              </tr>
              <tr>
                <td>API</td>
                <td>Policy</td>
                <td>Github</td>
                <td>Notion</td>
              </tr>
              <tr>
                <td>FAQ</td>
                <td>Management</td>
                <td>Members</td>
                <td>Twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.Foot}>
        <span>Copyright ©2022 Kau-web, All Rights Reserved.</span>
      </div>
    </footer>
  );
};

const textFieldStyle = {
  mb: "1.5rem",
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: "2px solid #6c63ff",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiOutlinedLabel-root.Mui-focused": {
    color: "rgb(0,176,131)",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#00bf8e",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)" }, // 라벨 관리
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "2px solid #424890",
      borderRadius: "8px",
      bgcolor: "#2e3267",
    },
    "& > input": {
      zIndex: 3, //배경 색 설정시 텍스트가 가려지는 문제 해결
      color: "#fff",
    },
  },
};
export default Footer;
