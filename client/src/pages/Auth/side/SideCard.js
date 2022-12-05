import React, { useEffect, useState } from "react";
import classes from "./SideCard.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/UI/AuthButton";

const SIGNUP = "/auth/signUp";
const SIGNIN = "/auth/signIn";
const SideCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const goSignUpHandler = () => {
    navigate("/auth/signUp");
  };
  const goSignInHandler = () => {
    navigate("/auth/signIn");
  };

  useEffect(() => {
    if (location.pathname === SIGNUP) {
      setTitle("로그인");

      setDescription(
        "이미 계정이 있으신가요?   아래 버튼을 통해 로그인 하세요!"
      );
    } else if (location.pathname === SIGNIN) {
      setTitle("계정 생성");
      setDescription(
        "아직 계정이 없으신가요? 정상적인 서비스 이용을 위해, 계정을 생성 해주세요!"
      );
    }
  }, [location]);

  return (
    <div className={classes.sideContainer}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div>
        <AuthButton
          disabled={false}
          size={{ width: 100, height: 35 }}
          onClick={
            location.pathname === SIGNUP ? goSignInHandler : goSignUpHandler
          }
        >
          {title}
        </AuthButton>
      </div>
    </div>
  );
};

export default SideCard;
