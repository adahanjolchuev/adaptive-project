import React from "react";
import scss from "./SectionThree.module.scss";
import mainPhoto from "../../../images/sectionTreePhoto.svg";
import TypograghyH3 from "../../../ui/TyphograghyH3/typograghyH3";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";

const SectionThree = () => {
  return (
    <div className={scss.SectionThree}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blogLeft}>
            <TypograghyH3>CREATIVE PROCESS</TypograghyH3>
            <TypograghyH1>Know your ads inside & out-perform</TypograghyH1>
            <TypograghyP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </TypograghyP>
          </div>
          <img src={mainPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
