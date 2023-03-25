import React, { useState, useEffect } from "react";

import { Navbar, Footer } from "../components/landingPage";
import {
  Info,
  ScrollIndicator,
} from "../components/landingPage/utility_components";
import {
  Hero,
  Proposal,
  Projects,
  Steps,
  Perks,
} from "../components/landingPage/home_section";

import { Bg_logo1, Bg_logo2 } from "../assets";

import { getProjects } from "../api";
import useStore from "../context/index";

const Home = () => {
  const [navBlur, setNavBlur] = useState(true);
  const [scrollIndicator, setScrollIndicator] = useState(true);

  const handleNavBlur = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setNavBlur(false) : setNavBlur(true);
    });
  };

  const handleScrollIndicator = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? setScrollIndicator(false)
        : setScrollIndicator(true);
    });
  };

  useEffect(() => {
    handleNavBlur();
    handleScrollIndicator();
  }, []);

  return (
    <div>
      <Navbar blur={navBlur} />
      <div
        className={`relative w-full h-fit mx-auto font-['sen'] bg-[#F7FAFF] overflow-hidden scroll-smooth`}
      >
        <Hero />
        <Proposal />
        <Projects />
        <Steps />
        <Perks />
        <Footer />

        <div className="absolute lg:top-[calc(100%-35%-10vh)] top-[71%] z-0 right-0">
          <img
            src={Bg_logo1}
            alt="Half_logo_purple"
            className="lg:w-[15vw] lg:h-[60vh] w-[8vh] h-[25vh]"
          />
        </div>

        <div className="absolute lg:top-[85%] left-0 top-[85.8%] z-0 right-0 w-fit">
          <img
            src={Bg_logo2}
            alt="Half_logo_purple"
            className="lg:w-[15vw] lg:h-[63vh] w-[8vh] h-[25vh]"
          />
        </div>
      </div>

      <Info />
      <div
        className={`fixed top-[93%] left-[80%] w-[200px] animate-[bounce_1.5s_ease-in-out_infinite] hidden ${
          scrollIndicator && "lg:flex"
        }`}
      >
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Home;
