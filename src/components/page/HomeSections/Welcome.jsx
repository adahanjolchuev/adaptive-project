import React from "react";
import scss from "./Welcome.module.scss";
import Input from "../../../ui/input/Input";
import rightPhoto from "../../../images/heroLeft.svg";
import TypograghyH3 from "../../../ui/TyphograghyH3/typograghyH3";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";
import TextWithCheck from "../../../ui/textWithIconCheck/TextWithCheck";
const Welcome = () => {
  return (
    <div className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.welcomeLeft}>
            <TypograghyH3>100% SATISFIED GUARANTEE</TypograghyH3>
            <TypograghyH1>
              Power up your <br /> shopify products
            </TypograghyH1>
            <TypograghyP>
              More than 90,000+ companies trust our business. Get help from a
              dedicated shopify developer today.
            </TypograghyP>
            <Input />
            <div className={scss.span}>
              <TextWithCheck>30 days free trial</TextWithCheck>
              <TextWithCheck>No credit card required</TextWithCheck>
            </div>
          </div>
          <img src={rightPhoto} alt="" width={700} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
