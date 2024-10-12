import React from "react";
import scss from "./SectionTwo.module.scss";
import mainPhoto from "../../../images/sectionTwoPhto.svg";
import TypograghyH3 from "../../../ui/TyphograghyH3/typograghyH3";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TextWithCheck from "../../../ui/textWithIconCheck/TextWithCheck";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";
const SectionTwo = () => {
  return (
    <div className={scss.SectionTwo}>
      <div className="container">
        <div className={scss.content}>
          <img className={scss.mainPhoto} src={mainPhoto} alt="" />
          <div className={scss.blogRight}>
            <div>
              <TypograghyH3>OUR PRODUCT STORIES</TypograghyH3>
              <TypograghyH1>Why product stories? Learn more</TypograghyH1>
            </div>
            <div>
              <TextWithCheck>SEO optimized, high Google work</TextWithCheck>
              <TypograghyP>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TypograghyP>
              <TextWithCheck>SEO optimized, high Google work</TextWithCheck>
              <TypograghyP>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TypograghyP>
              <TextWithCheck>SEO optimized, high Google work</TextWithCheck>
              <TypograghyP>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </TypograghyP>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
