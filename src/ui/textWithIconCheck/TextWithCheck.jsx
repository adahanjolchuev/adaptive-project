import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import scss from './textWithCheck.module.scss';


const TextWithCheck = ({ children }) => {
  return (
    <span className={scss.span}>
      <FaCheckCircle className={scss.icon}/>
      <h4 className={scss.h4}>{children}</h4>
    </span>
  );
};

export default TextWithCheck;
