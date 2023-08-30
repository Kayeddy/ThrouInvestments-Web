import React, { useState, useEffect } from "react";

import { LoginBg, Throu_l_footer, SignupBg } from "../../assets";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Connect from "./Connect";
import Confirmation from "./Confirmation";
import PasswordRecovery from "./PasswordRecovery";
import Terms from "./Terms";

// Extracted common elements into a separate component
const TabContent = ({
  imgSrc,
  title,
  Component,
  handleModal,
  handleSection,
  previousSection,
}) => {
  return (
    <>
      {imgSrc && (
        <div className="md:flex hidden w-fit h-full flex-row">
          <div className="flex flex-col relative w-fit min-w-[200px] h-fit z-10">
            <img
              src={imgSrc}
              alt=""
              className="min-h-[550px] h-[60vh] max-h-[800px] w-[400px] min-w-[350px] object-fit"
            />

            <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
              <div className="flex flex-col gap-8">
                <h2 className="lg:text-[55px] md:text-[45px] text-white font-bold leading-[50px] font-['sen']">
                  {title}
                </h2>
                <p className="font-Plus_Jakarta_Sans  text-white text-[18px] font-jakarta">
                  {" "}
                  Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
                  sagittis.{" "}
                </p>
              </div>
              <Footer
                handleSection={handleSection}
                previousSection={previousSection}
              />
            </div>
          </div>
          <div className="min-w-[400px] md:w-[45vw] lg:w-[60vw] md:max-w-[550px] xl:max-w-[600px] min-h-[550px] h-[60vh] max-h-[800px]">
            <Component
              handleModal={handleModal}
              handleSection={handleSection}
            />
          </div>
        </div>
      )}
      {!imgSrc && (
        <div className="flex items-center justify-center w-full h-full">
          <Component
            handleModal={handleModal}
            handleSection={handleSection}
            previousSection={previousSection}
          />
        </div>
      )}

      {/* Mobile version */}
      <div className="relative flex md:hidden min-w-screen min-h-screen items-center justify-center">
        <img
          src={imgSrc}
          alt=""
          className="w-full min-h-screen absolute object-fit"
        />
        <div className="w-screen h-screen flex items-center justify-center z-10">
          <Component handleModal={handleModal} handleSection={handleSection} />
        </div>
      </div>
    </>
  );
};

const Footer = ({ handleSection }) => (
  <div className="flex flex-col justify-between items-start  w-full gap-2">
    <img src={Throu_l_footer} alt="" className="w-[75px] h-[17px]" />
    <div className="flex flex-row justify-between items-center w-full gap-4">
      <p
        className="text-white text-[18px] hover:text-[#18A5FF] cursor-pointer hover:font-bold hover:underline transition-all duration-200 ease-in-out"
        onClick={() => handleSection(4)}
      >
        {" "}
        Términos del servicio{" "}
      </p>
      <p
        className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer hover:font-bold transition-all duration-200 ease-in-out"
        onClick={() => handleSection(4)}
      >
        {" "}
        Privacidad{" "}
      </p>
    </div>
  </div>
);

const Main = ({ handleModal }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [previousSection, setpreviousSection] = useState(null);

  const handleSection = (section) => {
    setpreviousSection(currentSection);
    setCurrentSection(section);
  };

  const tabContents = {
    1: { imgSrc: LoginBg, title: "Bienvenido a casa", Component: LogIn },
    2: { imgSrc: SignupBg, title: "Conectar", Component: Connect },
    3: { imgSrc: SignupBg, title: "Registrate", Component: SignUp },
    4: { Component: Terms },
    5: { Component: PasswordRecovery },
    6: { Component: Confirmation },
  };

  useEffect(() => {
    console.log("Main called");
  }, []);

  return (
    <div className="flex md:h-fit md:w-fit w-full h-full items-center md:mx-auto font-sen relative">
      {tabContents[currentSection] && (
        <TabContent
          imgSrc={tabContents[currentSection].imgSrc}
          title={tabContents[currentSection].title}
          Component={tabContents[currentSection].Component}
          handleModal={handleModal}
          handleSection={handleSection}
          previousSection={previousSection}
        />
      )}
    </div>
  );
};

export default Main;
