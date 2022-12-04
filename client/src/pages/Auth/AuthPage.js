import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterForm from "./forms/RegisterForm";
import classes from "./AuthPage.module.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import LoginForm from "./forms/LoginForm";
import ManuForm from "./forms/ManuForm";
import AuthButton from "../../components/UI/AuthButton";
import SideCard from "./side/SideCard";

const AuthPage = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("어스 이펙트");
    console.log(user);
    if (user) navigate("/main");
  }, []);

  return (
    <div className={classes.authPageContainer}>
      <div className={classes.authContainer}>
        <Routes>
          <Route path={"/signIn"} element={<LoginForm />}></Route>
          <Route path={"/signUp"} element={<RegisterForm />}></Route>
        </Routes>
        <SideCard />
      </div>
    </div>
  );
};

export default AuthPage;
