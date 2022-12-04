import React from "react";
import { Button } from "@mui/material";
import classes from "./AuthButton.module.scss";

const buttonStyle = [
  {
    bgcolor: "#6c63ff",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    boxShadow: 10,
  },
  { "&:hover": { bgcolor: "#00bf8e" } },
];

const AuthButton = ({
  onClick,
  children,
  disabled,
  size,
  startIcon,
  variant,
}) => {
  buttonStyle.push(size);
  return (
    <div className={classes.buttonContainer}>
      <Button
        sx={buttonStyle}
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
        variant={variant}
      >
        {children}
      </Button>
    </div>
  );
};

export default AuthButton;
