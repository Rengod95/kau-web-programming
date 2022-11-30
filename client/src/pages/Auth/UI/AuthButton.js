import React from "react";
import { Button } from "@mui/material";

const buttonStyleConfig = [
  {
    bgcolor: "background.primary",
    width: 100,
    height: 50,
    fontSize: 14,
    fontWeight: "bold",
    color: "text.color",
  },
  { "&:hover": { bgcolor: "background.hover" } },
];

const AuthButton = ({ onClick, children, disabled }) => {
  return (
    <Button sx={buttonStyleConfig} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default AuthButton;
