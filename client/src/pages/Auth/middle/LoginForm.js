import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useToast from "../../../hooks/useToast";
import useLoadingIndicator from "../../../hooks/useLoadingIndicator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TOAST from "../../../CONSTANTS/TOAST";
import loginAction from "../../../stores/middlewares/loginAction";
import LoginUser from "../../../CONSTANTS/models/LoginUser";
import { signInValidationSchema } from "../../../utils/validationSchema";

import Input from "../UI/Input";
import LoadingIndicator from "../../../UI/LoadingIndicator";
import Toast from "../../../UI/Toast";
import AuthButton from "../UI/AuthButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";

const LoginForm = () => {
  // form 사용 훅
  const formMethods = useForm({
    resolver: yupResolver(signInValidationSchema),
  });
  // SnackBar 사용 훅
  const {
    toastIsOpen,
    closeToast,
    openToast,
    toastMessage,
    changeToastType,
    toastType,
    changeToastMessage,
  } = useToast();
  // Indicator 사용 훅
  const { indicatorIsOpen, openIndicator, closeIndicator } =
    useLoadingIndicator();

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const invalidSubmit = (error, event) => {
    changeToastType(TOAST.TYPE.error);
    changeToastMessage("유효한 입력 값이 아닙니다.");
    openToast();
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
      changeToastType(TOAST.TYPE.error);
      changeToastMessage("제출 중 에러 발생");
      openToast();
      setButtonDisabled(() => false);
    }
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(signInHandler, invalidSubmit)}>
          <Input name={"name"} type={"text"} />
          <Input name={"password"} type={"password"} />
          <AuthButton
            onClick={formMethods.handleSubmit(signInHandler, invalidSubmit)}
            disabled={buttonDisabled}
          >
            로그인
          </AuthButton>
        </form>
      </FormProvider>
      <LoadingIndicator open={indicatorIsOpen} />
      <Toast
        open={toastIsOpen}
        duration={3000}
        type={toastType}
        onClose={closeToast}
        message={toastMessage}
      />
    </div>
  );
};

export default LoginForm;
