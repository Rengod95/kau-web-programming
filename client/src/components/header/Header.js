import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../stores/slices/auth-slice";

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
          <h4>보잉보잉</h4>
        </NavLink>
      </div>
      <div className={classes.nav__container}>
        <ul className={classes.nav_menu}>
          {user ? (
            <li>
              <NavLink
                to={"/main"}
                className={classes.link}
                onClick={logoutHandler}
              >
                로그아웃
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/auth"} className={classes.link}>
                로그인
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/gallery"} className={classes.link}>
              갤러리
            </NavLink>
          </li>
          <li>
            <NavLink to={"/community"} className={classes.link}>
              공지사항
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={classes.link}>
              문의
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
