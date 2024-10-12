import React from "react";
import scss from "./Input.module.scss";
import { CgMail } from "react-icons/cg";

const Input = () => {
  return (
    <div className={scss.input}>
      <CgMail className={scss.icon} />
      <input type="text" placeholder="Your email address" />
      <button>Sign up</button>
    </div>
  );
};

export default Input;
