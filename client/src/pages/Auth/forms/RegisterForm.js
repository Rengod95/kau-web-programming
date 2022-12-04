import React, { useEffect, useState } from "react";
import classes from "./RegisterForm.module.scss";

import TOAST from "../../../CONSTANTS/TOAST";
import User from "../../../CONSTANTS/models/User";
import registerAction from "../../../stores/middlewares/registerAction";
import { signUpValidationSchema } from "../../../utils/validationSchema";

import useLoadingIndicator from "../../../hooks/useLoadingIndicator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, FormProvider } from "react-hook-form";
import useToast from "../../../hooks/useToast";

import AuthButton from "../../../components/UI/AuthButton";
import Input from "../../../components/UI/Input";
import Toast from "../../../components/UI/Toast";
import LoadingIndicator from "../../../components/UI/LoadingIndicator";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  // form 사용 훅
  const formMethods = useForm({
    resolver: yupResolver(signUpValidationSchema),
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
      toast.changeToastType(TOAST.TYPE.success);
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
      <h1>회원가입</h1>
      <FormProvider {...formMethods}>
        <form className={classes.form}>
          <Input name={"name"} type={"text"} />
          <Input name={"phone_number"} type={"text"} />
          <Input name={"auth_key"} type={"auth_key"} />
          <Input name={"password"} type={"password"} />

          <AuthButton
            onClick={formMethods.handleSubmit(signUpHandler, invalidSubmit)}
            disabled={buttonDisabled}
            size={{ width: 250, height: 50 }}
          >
            회원가입
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

export default RegisterForm;
