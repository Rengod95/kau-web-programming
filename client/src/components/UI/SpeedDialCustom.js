import React from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const actions = [
  { icon: <EmailIcon />, name: "Contact" },
  { icon: <SettingsIcon />, name: "Setting" },
];

const SpeedDialCustom = () => {
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
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialCustom;
