import React from "react";
import classes from "./DetailCard.module.scss";
import AuthButton from "../../../components/UI/AuthButton";
import logo3 from "../../../assets/logo3.png";
import { useNavigate } from "react-router-dom";

export const DetailCard = ({ title = "title", description, url }) => {
  const navigate = useNavigate();

  const detailButtonHandler = () => {
    url ? navigate(url) : navigate("/community");
  };

  return (
    <figure>
      <h1>{title}</h1>
      <img src={logo3} alt="" />
      <figcaption>
        <div className={classes.openToggle}>
          <span>open</span>
        </div>
        <div className={classes.captionTitle}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div>
          <AuthButton
            size={{ width: 100, height: 50 }}
            disabled={false}
            onClick={detailButtonHandler}
          >
            자세히 보기
          </AuthButton>
        </div>
      </figcaption>
    </figure>
  );
};

export default DetailCard;
