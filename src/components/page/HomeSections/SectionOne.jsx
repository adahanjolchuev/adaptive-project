import React from "react";
import scss from "./SectionOne.module.scss";
import TypograghyH3 from "../../../ui/TyphograghyH3/typograghyH3";
import TypograghyH1 from "../../../ui/TypograghyH1/typograghyH1";
import TypograghyP from "../../../ui/typograghyP/TypograghyP";
import icon1 from "../../../images/sectionOneIcon1.svg";
import icon2 from "../../../images/sectionOneIcon2svg.svg";
import icon3 from "../../../images/sectionOneIcon3svg.svg";
import icon4 from "../../../images/sectionOneIcon1.svg";

const SectionOne = () => {
  const blog = [
    {
      image: icon1,
      text: "Grow your traffic",
      textP: "We always help your company to grow with us.",
      background: "#3E3125",
    },
    {
      image: icon2,
      text: "Content for sales",
      background: "#172656",
      textP: "Every company that we handel. We always content more sales.",
    },
    {
      image: icon3,
      text: "Reporting & analytics",
      background: "#3E0B39",
      textP: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      image: icon4,
      text: "Better Conversion",
      background: "#3D1C25",
      textP: "We always help your company to grow with us.",
    },
  ];

  return (
    <div className={scss.SectionOne}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftBlock}>
            <TypograghyH3>WHAT WE DO</TypograghyH3>
            <TypograghyH1>Our creative process for your business</TypograghyH1>
            <TypograghyP>
              As our motto, we always provide the best service especially for
              you and your company by growing your company to be better.
            </TypograghyP>
          </div>
          <div className={scss.rightBlock}>
            {blog.map((el, index) => (
              <div key={index} className={scss.blog}>
                <div
                  style={{
                    background: el.background,
                  }}
                >
                  <img src={el.image} alt="" />
                </div>
                <h3>{el.text}</h3>
                <p>{el.textP}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
