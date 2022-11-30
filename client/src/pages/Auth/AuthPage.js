import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterForm from "./middle/RegisterForm";
import classes from "./AuthPage.module.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import LoginForm from "./middle/LoginForm";
import ManuForm from "./middle/ManuForm";

const theme = createTheme({
  palette: {
    background: {
      primary: "#6c63ff",
      hover: "#00bf8e",
    },
    text: {
      color: "#fff",
    },
    button: {
      bgcolor: "background.primary",
      width: 100,
      height: 50,
      fontSize: 14,
      fontWeight: "bold",
      color: "text.color",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className={classes.authMainContainer}>
        <Routes>
          <Route path={"/signIn"} element={<LoginForm />}></Route>
          <Route path={"/signUp"} element={<RegisterForm />}></Route>
          <Route path={"*"} element={<ManuForm />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default AuthPage;
