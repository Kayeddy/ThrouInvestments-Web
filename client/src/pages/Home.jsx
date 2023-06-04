import React, { useState, useEffect } from "react";

import { Navbar, Footer, Overlay } from "../components/landingPage";
import {
  Cookies,
  Info,
  ScrollIndicator,
} from "../components/landingPage/utility_components";
import { useScrollLock } from "../hooks";
import {
  Hero,
  Proposal,
  Projects,
  Steps,
  Perks,
} from "../components/landingPage/home_section";

import { Bg_logo1, Bg_logo2 } from "../assets";

import { userConnection } from "../api/server";

import { Main } from "../components/registration";

const Home = () => {
  const [navBlur, setNavBlur] = useState(true);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);

  const { connect } = userConnection();

  const { lockScroll, unlockScroll } = useScrollLock();

  const handleRegistrationModal = (state) => {
    setToggleRegistrationModal(state);
  };

  const handleNavBlur = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setNavBlur(true) : setNavBlur(false);
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
    setNavBlur(false);
    handleNavBlur();
    handleScrollIndicator();
    toggleRegistrationModal && (document.body.style.overflow = "hidden");
    connect();
  }, []);

  useEffect(() => {
    toggleRegistrationModal && lockScroll();
    !toggleRegistrationModal && unlockScroll();
  }, [toggleRegistrationModal]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 z-20 w-full h-fit">
        <Navbar
          blur={navBlur}
          handleRegistrationModal={handleRegistrationModal}
        />
      </div>

      <div className="md:absolute z-50 h-full">
        {toggleRegistrationModal && (
          <Overlay>
            <div className="w-full h-full text-black flex items-center justify-center z-50">
              <Main handleModal={handleRegistrationModal} />
            </div>
          </Overlay>
        )}
      </div>

      <div className="fixed bottom-0 z-20 w-full h-fit">
        <Cookies />
      </div>

      <div className="flex absolute bottom-0 z-10 w-full">
        <Footer />
      </div>

      <div className="absolute top-[61%] z-0 right-0">
        <img
          src={Bg_logo1}
          alt="Half_logo_purple"
          className="lg:w-[15vw] lg:h-[60vh] w-[8vh] h-[25vh]"
        />
      </div>

      <div className="absolute left-0 top-[80.8%] z-0 right-0 w-fit">
        <img
          src={Bg_logo2}
          alt="Half_logo_purple"
          className="lg:w-[15vw] lg:h-[63vh] w-[8vh] h-[25vh]"
        />
      </div>

      <div
        className={`w-full h-full mx-auto font-sen bg-[#F7FAFF] overflow-x-hidden scroll-smooth flex flex-col items-center justify-between gap-16`}
      >
        <Hero />
        <Proposal />
        <Projects />
        <Steps />
        <Perks />
      </div>

      <div className="w-fit h-fit z-10">
        <Info />
      </div>
      <div
        className={`fixed top-[88%] animate-[bounce_1.5s_ease-in-out_infinite] hidden ${
          scrollIndicator && "md:flex w-full items-center justify-center"
        }`}
      >
        <ScrollIndicator />
      </div>
      <div className="bg-gradient-to-t from-[#F7FAFF] to-transparent h-[100px] absolute top-[90vh] w-full md:block hidden" />
    </div>
  );
};

export default Home;
