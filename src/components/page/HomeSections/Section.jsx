import React from "react";
import mainPhoto from "../../../images/SectionPhoto.svg";
import scss from "./Section.module.scss";
import TypograghyH3 from "../../../ui/TyphograghyH3/typograghyH3";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";

const Section = () => {
  return (
    <div className={scss.Section}>
      <div className="container">
        <div className={scss.content}>
          <img src={mainPhoto} alt="" />
          <div className={scss.sectionRight}>
            <TypograghyH3>SERVICES WE PROVIDES</TypograghyH3>
            <TypograghyH1>
              Build on both: Google web stories and AMP website format
            </TypograghyH1>
            <div className={scss.divNumber}>
              <span>
                <h3
                  style={{
                    color: "#ffbe0b",
                  }}
                >
                  5660
                </h3>
                <TypograghyP>
                  Product sale per day working and sales
                </TypograghyP>
              </span>
              <div></div>
              <span>
                <h3 style={{
                    color: "#fb5607"
                }}>4M+</h3>
                <TypograghyP>
                  Product sale per day working and sales
                </TypograghyP>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
