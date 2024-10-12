import React from "react";
import scss from './typograghyH1.module.scss'

const TypograghyH1 = ({ children }) => {
  return <h1 className={scss.h1}>{children}</h1>;
};

export default TypograghyH1;
