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

const AboutUs = () => {
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
      <div className="relative w-full h-fit mx-auto font-['sen'] bg-[#F7FAFF] overflow-hidden scroll-smooth">
        <div className="flex flex-col items-center justify-center lg:gap-32 gap-12 w-full h-fit lg:mt-[200px] mt-[100px] text-[#062147] lg:px-[100px] px-[10px] lg:mb-[300px]">
          <div className="flex flex-row items-center w-full justify-around">
            <div className="flex-col items-center justify-center h-full hidden lg:flex">
              {[
                "nosotros",
                "equipo",
                "blog",
                <span className="text-[20px]">
                  <MagnifyingGlass />
                </span>,
              ].map((item) => (
                <a href={`#${item}`} key={item} className="my-[20px]">
                  {item}
                </a>
              ))}
            </div>
            <div className="p-4 h-full flex flex-col items-start justify-center lg:w-[50vw] w-full lg:gap-12 gap-2">
              <h2 className="font-bold lg:text-[3vw] text-[4.5vh] lg:leading-[2vw]">
                Nosotros
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
                <br />
                <br />
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
            </div>
          </div>
          <div className="flex items-center lg:justify-start justify-center w-full">
            <img
              src={AboutUs_team}
              alt="team_image"
              className="lg:w-[90%] lg:h-[50vh] lg:min-w-[800px] lg:max-h-[400px] w-[90vw] h-[25vh] z-10"
            />
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center w-full lg:pr-[10%] gap-16 lg:mt-[100px]">
            <div className="flex items-center justify-center z-20">
              <div class="flex justify-center items-center relative">
                <img
                  src={Quotes}
                  alt="Left Quote"
                  class="absolute top-0 left-0 h-8 md:h-8"
                />
                <div class="flex justify-center items-center text-center px-16 py-2 ">
                  <p className="font-bold lg:text-[1.5vw] text-[20px]">
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
            <div className="flex w-full lg:justify-end justify-center">
              <img
                src={AboutUs_team2}
                alt="team_image"
                className="lg:w-[50vw] lg:h-[380px] w-[90vw] h-[28vh] min-h-[200px] max-w-[700px]"
              />
            </div>
          </div>

          {/* Desktop teams */}
          <div className="lg:flex-row flex-col lg:justify-start justify-center items-start w-full lg:mt-[100px] hidden lg:flex">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-[2vw] flex flex-col justify-center items-start w-fit h-fit">
                <img
                  src={Team_member1}
                  alt="Team_member"
                  className="w-[200px] h-[200px] lg:min-w-[190px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] lg:text-[1.5vw] lg:leading-[1em] font-semibold">
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
                  className="w-[200px] h-[200px] lg:min-w-[190px]"
                />
                <div className="flex flex-col items-start justify-start w-[13vw] gap-2 mt-[20px]">
                  <h3 className="text-[25px] lg:text-[1.5vw] lg:leading-[1em] font-semibold">
                    Lillian Mueller
                  </h3>
                  <span className="flex justify-between items-center">
                    <p className="text-[15px] font-normal">
                      {" "}
                      Human Web Engineer{" "}
                    </p>
                    <span className="flex flex-row justify-end gap-2 text-[15px] ml-[2vw]">
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
                  className="w-[200px] h-[200px] lg:min-w-[190px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] lg:text-[1.5vw] lg:leading-[1em] font-semibold">
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

              <div className="absolute top-[580px] left-[20vw] flex flex-col justify-center items-center w-fit h-fit">
                <img
                  src={Team_member4}
                  alt="Team_member"
                  className="w-[200px] h-[200px] lg:min-w-[190px]"
                />
                <div className="flex flex-col items-start justify-start w-fit gap-2 mt-[20px]">
                  <h3 className="text-[25px] lg:text-[1.5vw] lg:leading-[1em] font-semibold">
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
            <div className="flex flex-col gap-12 justify-center items-start ml-[500px]">
              <h2 className="font-bold text-[50px] leading-[25.5px]">Equipo</h2>
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
                  <h1 className="text-[50px] font-bold">+15</h1>
                  <p> Profesionales </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[50px] font-bold">+5</h1>
                  <p> Áreas </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[50px] font-bold">+1.2</h1>
                  <p> Usuarios </p>
                </div>
              </div>
            </div>
          </div>
          {/** Mobile teams */}
          <div className="flex flex-col justify-center items-center lg:hidden w-full">
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

        <Footer />

        <div className="absolute lg:top-[1050px] top-[26%] z-0 right-0">
          <img
            src={Bg_logo2_right}
            alt="Half_logo_purple"
            className="lg:w-[15vw] lg:h-[50vh] w-[20vh] h-[40vh]"
          />
        </div>

        <div className="absolute lg:top-[70%] left-0 top-[80.8%] z-0 right-0 w-fit">
          <img
            src={Bg_logo1_left}
            alt="Half_logo_purple"
            className="lg:w-[15vw] lg:h-[50vh] w-[8vh] h-[25vh]"
          />
        </div>
      </div>

      <Info />
    </div>
  );
};

export default AboutUs;
