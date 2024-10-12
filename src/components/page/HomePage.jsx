import React from "react";
import Welcome from "./HomeSections/Welcome";
import Section from "./HomeSections/Section";
import SectionOne from "./HomeSections/SectionOne";
import SectionTwo from "./HomeSections/SectionTwo";
import SectionThree from "./HomeSections/SectionThree";
import Contact from "./HomeSections/Contact";

const HomePage = () => {
  return (
    <div>
      <Welcome />
       <Section />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
     <Contact/>
    </div>
  );
};

export default HomePage;
