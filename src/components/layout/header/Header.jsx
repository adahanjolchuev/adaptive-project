import React from "react";
import scss from "./Header.module.scss";
import logo from "./../../../images/logo.svg";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <img src={logo} alt="" />
          <div className={scss.headerRight}>
            <nav>
              <a href="#">About</a>
              <a href="#">Product</a>
              <a href="#">Service</a>
              <a href="#">Contact</a>
            </nav>
            <div className={scss.btns}>
              <button>Sign in</button>
              <button>Try Free</button>
              <div onClick={() => setOpen(!open)} className={scss.burgerMenu}>
                <div
                  className={`${scss.burger} ${open ? scss.active : null}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            right: open ? "0%" : "-100%",
            transition: "all 0.8s",
          }}
          className={scss.Modalka}
        >
          <nav>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
