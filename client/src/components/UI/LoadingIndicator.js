import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingIndicator = ({ open }) => {
  console.log("인디케이터 상태 : ", open);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};

export default LoadingIndicator;
