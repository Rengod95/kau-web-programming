import React, { useEffect, useState } from "react";
import { Avatar, Chip } from "@mui/material";
import { useSelector } from "react-redux";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const ProfileChip = () => {
  const [label, setLabel] = useState("");
  const [goTo, setGoTo] = useState("");
  const [color, setColor] = useState("#6c63ff");
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.name) {
      setLabel(() => "로그인");
      setGoTo(() => "/auth/signIn");
      setColor("#6c63ff");
    } else {
      setLabel(() => `"${user.name}"님 환영합니다`);
      setGoTo(() => "/profile");
      setColor("#00bf8e");
    }
  }, [user]);

  const chipClickHandler = () => {
    navigate(`${goTo}`);
  };

  return (
    <Chip
      sx={{
        color: `${color}`,
        border: `1px solid ${color}`,
        minWidth: "70px",
      }}
      avatar={
        <Avatar sx={{ bgcolor: `${color}` }}>
          {user ? (
            "U"
          ) : (
            <LockOutlinedIcon fontSize={"small"} sx={{ color: "#fff" }} />
          )}
        </Avatar>
      }
      label={label}
      variant={"outlined"}
      onClick={chipClickHandler}
    />
  );
};

export default ProfileChip;
