import React from "react";
import { Chip } from "@mui/material";

const TagChip = ({ label = "TAG" }) => {
  return (
    <Chip
      sx={{
        color: `#00bf8e`,
        border: `1px solid #00bf8e`,
        fontWeight: "Bolder",
        minWidth: "70px",
      }}
      label={label}
      variant={"filled"}
    />
  );
};

export default TagChip;
