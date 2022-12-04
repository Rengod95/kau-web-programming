import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import useToast from "../../../hooks/useToast";
import useLoadingIndicator from "../../../hooks/useLoadingIndicator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TOAST from "../../../CONSTANTS/TOAST";
import loginAction from "../../../stores/middlewares/loginAction";
import LoginUser from "../../../CONSTANTS/models/LoginUser";
import { signInValidationSchema } from "../../../utils/validationSchema";

import Input from "../../../components/UI/Input";
import LoadingIndicator from "../../../components/UI/LoadingIndicator";
import Toast from "../../../components/UI/Toast";
import AuthButton from "../../../components/UI/AuthButton";
import { yupResolver } from "@hookform/resolvers/yup";

import classes from "./LoginForm.module.scss";

const LoginForm = () => {
  const formMethods = useForm({
    resolver: yupResolver(signInValidationSchema),
  });
  const toast = useToast();
  const { indicatorIsOpen, openIndicator, closeIndicator } =
    useLoadingIndicator();

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const invalidSubmit = (error, event) => {
    toast.changeToastType(TOAST.TYPE.error);
    toast.changeToastMessage("유효한 입력 값이 아닙니다.");
    toast.openToast();
    console.log(error, event);
  };

  const signInHandler = async (data, event) => {
    try {
      setButtonDisabled(() => true);
      await openIndicator();
      await dispatch(
        loginAction(new LoginUser(data.name, data.password))
      ).unwrap();
      closeIndicator();
      setButtonDisabled(() => false);
      navigate("/main");
    } catch (e) {
      closeIndicator();
      toast.changeToastType(TOAST.TYPE.error);
      toast.changeToastMessage("제출 중 에러 발생");
      toast.openToast();
      setButtonDisabled(() => false);
    }
  };

  return (
    <div className={classes.formContainer}>
      <h1>로그인</h1>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(signInHandler, invalidSubmit)}
          className={classes.form}
        >
          <Input name={"name"} type={"text"} />
          <Input name={"password"} type={"password"} />
          <AuthButton
            onClick={formMethods.handleSubmit(signInHandler, invalidSubmit)}
            disabled={buttonDisabled}
            size={{ width: 250, height: 50 }}
          >
            로그인
          </AuthButton>
        </form>
      </FormProvider>
      <LoadingIndicator open={indicatorIsOpen} />
      <Toast
        open={toast.toastIsOpen}
        duration={3000}
        type={toast.toastType}
        onClose={toast.closeToast}
        message={toast.toastMessage}
      />
    </div>
  );
};

export default LoginForm;
