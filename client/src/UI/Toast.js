import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle } from "@mui/material";
import TOAST from "../CONSTANTS/TOAST";

const Toast = ({ open, duration, onClose, message, type }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={duration}
      onClose={onClose}
      open={open}
      key={message}
      severity={type}
    >
      <Alert
        variant={"filled"}
        severity={type}
        onClose={onClose}
        title={message}
      >
        <AlertTitle>
          <p>{TOAST.TITLE[type]}</p>
        </AlertTitle>
        <strong>{message}</strong>
      </Alert>
    </Snackbar>
  );
};

export default Toast;
