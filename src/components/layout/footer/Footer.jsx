import React from "react";
import scss from "./Footer.module.scss";
import logo from "../../../images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <img src={logo} alt="" />
          <nav>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </nav>
          <div className={scss.icons}>
            <FaFacebookF className={scss.icon} />
            <FaTwitter className={scss.icon} />
            <CiInstagram className={scss.icon} />
            <FaLinkedinIn className={scss.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
