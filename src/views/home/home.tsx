import React, { FC } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-edited.jpg";

import css from "./home.module.scss";

export const HomeView: FC = () => (
  <div className={css.container}>
    <img className={css.logo} src={LogoImg} alt="logo" />
    <h1 className={css.title}>
      <Link to="salons">To the salons</Link>
    </h1>
  </div>
);
