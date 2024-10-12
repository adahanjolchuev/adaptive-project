import React from "react";
import scss from "./TypgoraghyP.module.scss";

const TypograghyP = ({ children }) => {
  return <p className={scss.p}>{children}</p>;
};

export default TypograghyP;
