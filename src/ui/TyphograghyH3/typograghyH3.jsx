import React from "react";
import scss from "./typograghyH3.module.scss";

const TypograghyH3 = ({ children }) => {
  return <h3 className={scss.h3}>{children}</h3>;
};

export default TypograghyH3;
