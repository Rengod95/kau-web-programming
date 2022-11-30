import React from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

const actions = [
  { icon: <EmailIcon />, name: "Contact" },
  { icon: <SettingsIcon />, name: "Setting" },
];

const SpeedDialCustom = () => {
  return (
    <SpeedDial
      ariaLabel="dial"
      sx={{ position: "fixed", bottom: 48, right: 48 }}
      icon={<SpeedDialIcon openIcon={<SubjectIcon />} />}
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
