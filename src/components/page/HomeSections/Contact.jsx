import React from "react";
import scss from "./Contact.module.scss";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";
import Input from "../../../ui/input/Input";

const Contact = () => {
  return (
    <div className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
            <TypograghyH1>Contact with us.</TypograghyH1>
            <TypograghyP>
              More than 50,000+ companies trusted our business
            </TypograghyP>
            <Input/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
