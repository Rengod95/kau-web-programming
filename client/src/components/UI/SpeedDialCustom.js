import React, { useMemo } from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <EmailIcon />, name: "Contact", onClick: undefined },
  { icon: <SettingsIcon />, name: "Setting", onClick: undefined },
];

const SpeedDialCustom = () => {
  const navigate = useNavigate();

  const settingClickHandler = () => {
    navigate("/admin");
  };

  return (
    <SpeedDial
      ariaLabel="dial"
      sx={{
        position: "fixed",
        bottom: 48,
        right: 48,
        ".MuiSpeedDial-fab": {
          backgroundColor: "#00bf8e",
        },
      }}
      icon={<PersonOutlineOutlinedIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={settingClickHandler}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialCustom;
