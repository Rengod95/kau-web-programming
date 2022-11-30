import React, { useEffect, useState } from "react";

import TOAST from "../../../CONSTANTS/TOAST";
import User from "../../../CONSTANTS/models/User";
import registerAction from "../../../stores/middlewares/registerAction";
import { signUpValidationSchema } from "../../../utils/validationSchema";

import useLoadingIndicator from "../../../hooks/useLoadingIndicator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, FormProvider } from "react-hook-form";
import useToast from "../../../hooks/useToast";

import AuthButton from "../UI/AuthButton";
import Input from "../UI/Input";
import Toast from "../../../UI/Toast";
import LoadingIndicator from "../../../UI/LoadingIndicator";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  // form 사용 훅
  const formMethods = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });
  // SnackBar 사용 훅
  const {
    toastIsOpen,
    closeToast,
    openToast,
    toastMessage,
    changeToastType,
    changeToastMessage,
    toastType,
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

  const signUpHandler = async (data, event) => {
    try {
      setButtonDisabled(() => true);
      await openIndicator();
      await dispatch(
        registerAction(
          new User(
            data.name,
            data.phone_number,
            data.bdate,
            false,
            data.major,
            data.password
          )
        )
      ).unwrap();
      changeToastType(TOAST.TYPE.success);
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
        <form onSubmit={formMethods.handleSubmit(signUpHandler, invalidSubmit)}>
          <Input name={"name"} type={"text"} />
          <Input name={"phone_number"} type={"text"} />
          <Input name={"password"} type={"password"} />
          <AuthButton
            onClick={formMethods.handleSubmit(signUpHandler, invalidSubmit)}
            disabled={buttonDisabled}
          >
            회원가입
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

export default RegisterForm;
