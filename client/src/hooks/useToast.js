import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../stores/slices/auth-slice";

const useToast = () => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const toastMessage = useSelector((state) => state.Auth.toastMessage);
  const dispatch = useDispatch();
  const [toastType, setToastType] = useState("success");

  const openToast = () => {
    setToastIsOpen(true);
  };
  const closeToast = () => {
    setToastIsOpen(false);
  };

  const changeToastType = (type) => {
    setToastType(() => type);
  };
  const changeToastMessage = (message) => {
    dispatch(authActions.changeToastMessage(message));
  };

  return {
    toastIsOpen,
    openToast,
    closeToast,
    toastMessage,
    toastType,
    changeToastType,
    changeToastMessage,
  };
};

export default useToast;
