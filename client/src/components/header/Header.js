import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../stores/slices/auth-slice";
import { Avatar, Button, Chip } from "@mui/material";
import ProfileChip from "./ProfileChip";
import BoeingLogo from "../../assets/BoeingLogo.png";

export const navSet = [
  { url: "/gallery", title: "갤러리" },
  { url: "/community", title: "공지사항" },
  { url: "/contact", title: "문의" },
];

const Header = () => {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.homeIconContainer}>
        <NavLink to={"/main"}>
          <h4>BOING</h4>
        </NavLink>
      </div>
      <div className={classes.nav__container}>
        <ul className={classes.nav_menu}>
          <li key={"/profile"}>
            <ProfileChip />
          </li>
          {navSet.map((nav) => (
            <li key={nav.url}>
              <NavLink to={nav.url} className={classes.link}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
