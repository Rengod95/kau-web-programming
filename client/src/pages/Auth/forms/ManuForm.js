import React from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../../components/UI/AuthButton";
const MenuForm = () => {
  const navigate = useNavigate();

  const toSignInHandler = () => {
    navigate("signIn");
  };
  const toSignUpHandler = () => {
    navigate("signUp");
  };

  return (
    <div>
      <div>
        <AuthButton onClick={toSignInHandler}>로그인</AuthButton>
      </div>
      <div>
        <AuthButton onClick={toSignUpHandler}>회원가입</AuthButton>
      </div>
    </div>
  );
};

export default MenuForm;
