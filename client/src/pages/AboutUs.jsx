import React, { useState, useEffect, useRef } from "react";
import { RxMagnifyingGlass as MagnifyingGlass } from "react-icons/rx";
import {
  GrLinkedinOption as LinkedInIcon,
  GrTwitter as TwitterIcon,
} from "react-icons/gr";

import { Navbar, Footer } from "../components/landingPage";
import {
  Bg_logo1_left,
  Bg_logo2_right,
  AboutUs_team,
  AboutUs_team2,
  Team_member1,
  Team_member2,
  Team_member3,
  Team_member4,
  Quotes,
} from "../assets";
import { Info } from "../components/landingPage/utility_components";

import { useScrollLock } from "../hooks";

const AboutUs = () => {
  const [navBlur, setNavBlur] = useState(true);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();

  const handleNavBlur = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setNavBlur(false) : setNavBlur(true);
    });
  };

  const handleRegistrationModal = (state) => {
    setToggleRegistrationModal(state);
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

  useEffect(() => {
    toggleRegistrationModal && lockScroll();
    !toggleRegistrationModal && unlockScroll();
  }, [toggleRegistrationModal]);

  return (
    <div className="relative h-fit">
      <div className="fixed top-0 z-20 w-full h-fit">
        <Navbar
          blur={navBlur}
          handleRegistrationModal={handleRegistrationModal}
        />
      </div>
      <div className="relative w-full h-fit mx-auto font-['sen'] bg-[#F7FAFF] overflow-hidden scroll-smooth ">
        <div className="flex flex-col items-center justify-center md:gap-32 gap-12 w-full h-fit md:mt-[200px] mt-[100px] text-[#062147] md:px-[100px] px-[10px] mb-[500px] md:mb-[calc(100vh+300px)]">
          <div className="flex flex-col items-start justify-center gap-8 w-full">
            <h2 className="font-bold md:text-[3vw] text-[4.5vh] md:leading-[2vw]">
              Nosotros
            </h2>
            <p className="font-jakarta text-[18px]">
              Dictumst praesent at nisi cras tristique etiam condimentum. Quam
              tristique tellus sagittis metus viverra. Nulla orci rhoncus varius
              augue adipiscing quis morbi elementum. Turpis felis viverra
              egestas id sit penatibus enim. Urna nullam ut ut tincidunt vitae
              mi. Mauris enim sodales a aliquet. Consequat nunc consectetur enim
              elit sapien suspendisse. Velit morbi vitae habitant mattis libero.
              In tempus in leo faucibus placerat sed senectus dignissim nunc.
              Semper est molestie sed tincidunt ac. Integer orci diam faucibus
              adipiscing.
              <br />
              <br />
              Diam orci tellus enim dui eu. Lorem ut ligula mi viverra mauris
              dignissim erat. Sed risus amet tortor id volutpat dictumst massa
              quam cursus. Ut morbi est at cursus et suspendisse eu. Aliquam
              blandit ornare tellus nibh aliquam egestas id. In eu etiam ligula
              ultrices aliquet nam. Ac at consequat risus ac. Varius ut
              elementum aliquam adipiscing auctor. At quis id amet fames viverra
              orci ut sit sit. Suscipit vitae elit ullamcorper fermentum lorem.
              Tellus pulvinar porttitor felis nibh nisl eleifend porttitor urna.
              Viverra vitae diam mollis enim faucibus.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <img
              src={AboutUs_team}
              alt="team_image"
              className="h-[200px] md:h-[50vh] md:max-h-[500px] w-full z-10 object-cover"
            />
          </div>
          <div className="flex md:flex-row flex-col md:justify-start justify-center items-center w-full gap-16 md:mt-[100px]">
            <div className="flex items-center justify-center z-20">
              <div class="flex justify-center items-center relative">
                <img
                  src={Quotes}
                  alt="Left Quote"
                  class="absolute top-0 left-0 h-8 md:h-8"
                />
                <div class="flex justify-center items-center text-center px-16 py-2 ">
                  <p className="font-bold md:text-[1.5vw] text-[20px]">
                    El trabajo en equipo es el secreto que hace que gente común
                    consiga resultados poco comunes.
                  </p>
                </div>
                <img
                  src={Quotes}
                  alt="Right Quote"
                  class="absolute bottom-0 right-0 h-8 md:h-8"
                />
              </div>
            </div>
            <div className="flex w-full md:justify-end justify-center">
              <img
                src={AboutUs_team2}
                alt="team_image"
                className="md:w-[50vw] md:h-[380px] w-[90vw] h-[28vh] min-h-[200px] max-w-[700px] z-10 object-cover"
              />
            </div>
          </div>

          {/* Desktop teams */}
          <div className="md:flex-row flex-col md:justify-start justify-center items-start w-full md:mt-[100px] hidden md:flex">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-[2vw] flex flex-col justify-center items-start w-fit h-fit">
                <img
                  src={Team_member1}
                  alt="Team_member"
                  className="md:w-[180px] lg:w-[200px] lg:h-[200px] md:h-[180px] md:min-w-[180px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] md:text-[1.5vw] md:leading-[1em] font-semibold">
                    Clifford Wisoky
                  </h3>
                  <span className="flex justify-between items-center">
                    <p className="text-[15px] font-normal"> CEO - Co founder</p>
                    <span className="flex flex-row justify-end gap-2 text-[15px] ml-[2vw]">
                      <LinkedInIcon />
                      <TwitterIcon />
                    </span>
                  </span>
                </div>
              </div>

              <div className="absolute top-[220px] left-[22vw] flex flex-col justify-center items-start w-fit h-fit">
                <img
                  src={Team_member2}
                  alt="Team_member"
                  className="md:w-[180px] lg:w-[200px] lg:h-[200px] md:h-[180px] md:min-w-[180px]"
                />
                <div className="flex flex-col items-start justify-start w-[13vw] gap-2 mt-[20px]">
                  <h3 className="text-[25px] md:text-[1.5vw] md:leading-[1em] font-semibold">
                    Lillian Mueller
                  </h3>
                  <span className="flex justify-between items-center max-w-[180px]">
                    <p className="text-[15px] font-normal">
                      {" "}
                      Human Web Engineer{" "}
                    </p>
                    <span className="flex flex-row justify-end gap-2 text-[15px] ml-[1vw]">
                      <LinkedInIcon />
                      <TwitterIcon />
                    </span>
                  </span>
                </div>
              </div>

              <div className="absolute left-0 top-[360px] flex flex-col justify-center items-start w-fit h-fit">
                <img
                  src={Team_member3}
                  alt="Team_member"
                  className="md:w-[180px] lg:w-[200px] lg:h-[200px] md:h-[180px] md:min-w-[180px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] md:text-[1.5vw] md:leading-[1em] font-semibold">
                    Cora Bernier
                  </h3>
                  <span className="flex justify-between items-center">
                    <p className="text-[15px] font-normal">
                      {" "}
                      CTO - Co founder{" "}
                    </p>
                    <span className="flex flex-row justify-end gap-2 text-[15px] ml-[2vw]">
                      <LinkedInIcon />
                      <TwitterIcon />
                    </span>
                  </span>
                </div>
              </div>

              <div className="absolute top-[580px] md:left-[200px] lg:left-[20vw] flex flex-col justify-center items-center w-fit h-fit">
                <img
                  src={Team_member4}
                  alt="Team_member"
                  className="md:w-[180px] lg:w-[200px] lg:h-[200px] md:h-[180px] md:min-w-[180px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] md:text-[1.5vw] md:leading-[1em] font-semibold">
                    Drew Simonis
                  </h3>
                  <span className="flex justify-between items-center">
                    <p className="text-[15px] font-normal">
                      {" "}
                      Direct Research Analyst{" "}
                    </p>
                    <span className="flex flex-row justify-end gap-2 text-[15px] ml-[2vw]">
                      <LinkedInIcon />
                      <TwitterIcon />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12 justify-center items-start ml-[500px] font-jakarta">
              <h2 className="font-bold text-[50px] leading-[25.5px] font-sen">
                Equipo
              </h2>
              <p>
                Dictumst praesent at nisi cras tristique etiam condimentum. Quam
                tristique tellus sagittis metus viverra. Nulla orci rhoncus
                varius augue adipiscing quis morbi elementum. Turpis felis
                viverra egestas id sit penatibus enim. Urna nullam ut ut
                tincidunt vitae mi. Mauris enim sodales a aliquet. Consequat
                nunc consectetur enim elit sapien suspendisse. Velit morbi vitae
                habitant mattis libero. In tempus in leo faucibus placerat sed
                senectus dignissim nunc. Semper est molestie sed tincidunt ac.
                Integer orci diam faucibus adipiscing.
              </p>
              <p>
                Diam orci tellus enim dui eu. Lorem ut ligula mi viverra mauris
                dignissim erat. Sed risus amet tortor id volutpat dictumst massa
                quam cursus. Ut morbi est at cursus et suspendisse eu. Aliquam
                blandit ornare tellus nibh aliquam egestas id. In eu etiam
                ligula ultrices aliquet nam. Ac at consequat risus ac. Varius ut
                elementum aliquam adipiscing auctor. At quis id amet fames
                viverra orci ut sit sit. Suscipit vitae elit ullamcorper
                fermentum lorem. Tellus pulvinar porttitor felis nibh nisl
                eleifend porttitor urna. Viverra vitae diam mollis enim
                faucibus.
              </p>

              <div className="flex flex-row gap-32 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[50px] font-bold font-sen">+15</h1>
                  <p> Profesionales </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[50px] font-bold font-sen">+5</h1>
                  <p> Áreas </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[50px] font-bold font-sen">+1.2</h1>
                  <p> Usuarios </p>
                </div>
              </div>
            </div>
          </div>
          {/** Mobile teams */}
          <div className="flex flex-col justify-center items-center md:hidden w-full">
            <div className="flex flex-col justify-center items-center gap-12 w-full">
              <h2 className="text-[40px] font-bold"> Equipo </h2>
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Team_member1}
                    alt="Team_member1"
                    className="w-[40vw] h-[25vh] max-h-[210px] max-w-[280px]"
                  />
                  <h2 className="text-[20px] font-bold mt-4">
                    Clifford Wisoky
                  </h2>
                  <p> CEO - Co founder</p>
                  <span className="flex flex-row items-center gap-4 text-[20px] mt-4">
                    <LinkedInIcon />
                    <TwitterIcon />
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Team_member2}
                    alt="Team_member2"
                    className="w-[40vw] h-[25vh] max-h-[210px] max-w-[280px]"
                  />

                  <h2 className="text-[20px] font-bold mt-4">
                    Lillian Mueller
                  </h2>
                  <p> Human Web Engineer</p>
                  <span className="flex flex-row items-center gap-4 text-[20px] mt-4">
                    <LinkedInIcon />
                    <TwitterIcon />
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Team_member3}
                    alt="Team_member1"
                    className="w-[40vw] h-[25vh] max-h-[210px] max-w-[280px]"
                  />
                  <h2 className="text-[20px] font-bold mt-4">Cora Bernier</h2>
                  <p> CTO - Co founder</p>
                  <span className="flex flex-row items-center gap-4 text-[20px] mt-4">
                    <LinkedInIcon />
                    <TwitterIcon />
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Team_member4}
                    alt="Team_member2"
                    className="w-[40vw] h-[25vh] max-h-[210px] max-w-[280px]"
                  />

                  <h2 className="text-[20px] font-bold mt-4">Drew Simonis</h2>
                  <p> Direct Research Analyst</p>
                  <span className="flex flex-row items-center gap-4 text-[20px] mt-4">
                    <LinkedInIcon />
                    <TwitterIcon />
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute md:top-[1050px] top-[26%] z-0 right-0">
          <img
            src={Bg_logo2_right}
            alt="Half_logo_purple"
            className="md:w-[15vw] md:h-[50vh] w-[20vh] h-[40vh]"
          />
        </div>

        <div className="absolute md:top-[70%] left-0 top-[80.8%] z-0 right-0 w-fit">
          <img
            src={Bg_logo1_left}
            alt="Half_logo_purple"
            className="md:w-[15vw] md:h-[50vh] w-[8vh] h-[25vh]"
          />
        </div>
      </div>

      <div className="flex absolute bottom-0 z-10 w-full">
        <Footer />
      </div>
      <Info />
    </div>
  );
};

export default AboutUs;
