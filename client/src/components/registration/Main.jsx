import React, { useState, useEffect } from "react";

import { LoginBg, Throu_l_footer, SignupBg } from "../../assets";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Connect from "./Connect";
import PasswordRecovery from "./PasswordRecovery";
import Terms from "./Terms";
import useStore from "../../context";

const Main = ({ handleModal }) => {
  const state = useStore();

  const [CurrentSection, setCurrentSection] = useState(1);

  const handleSection = (section) => {
    setCurrentSection(section);
  };
  useEffect(() => {
    state.toggleRegistering(true);
  }, []);

  return (
    <div className="flex md:h-fit md:w-fit w-full h-full items-center md:mx-auto md:px-16 font-sen">
      {/**Login in tab content**/}
      {CurrentSection === 1 && (
        <>
          {/** Desktop version */}
          <div className="md:flex hidden w-fit h-full flex-row">
            <div className="flex flex-col relative w-fit min-w-[200px] h-fit z-10">
              <img
                src={LoginBg}
                alt=""
                className="min-h-[470px] h-[60vh] max-h-[800px] w-[400px] min-w-[360px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[45px] text-white font-bold leading-[50px] font-['sen']">
                    Bienvenido a casa
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[18px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[80px] h-[18px]"
                  />
                  <div className="flex flex-row justify-between items-center w-full gap-4 hover:underline ">
                    <p className="text-white text-[18px] hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Términos del servicio{" "}
                    </p>
                    <p className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Privacidad{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[400px] md:w-[45vw] lg:w-[60vw] md:max-w-[550px] xl:max-w-[600px] min-h-[470px] h-[60vh] max-h-[800px]">
              <LogIn handleModal={handleModal} handleSection={handleSection} />
            </div>
          </div>

          {/* Mobile version */}
          <div className="relative flex md:hidden w-full h-full items-center justify-center">
            <img
              src={LoginBg}
              alt=""
              className="w-full min-h-screen absolute object-fit"
            />

            <div className="w-full h-full flex items-center justify-center z-10">
              <LogIn handleModal={handleModal} handleSection={handleSection} />
            </div>
          </div>
        </>
      )}

      {/**Connect in tab content**/}
      {CurrentSection === 2 && (
        <>
          {/** Desktop version */}
          <div className="md:flex hidden w-fit h-fit flex-row">
            <div className="flex flex-col relative w-fit h-fit">
              <img
                src={SignupBg}
                alt=""
                className="min-h-[470px] h-[60vh] max-h-[800px] w-[400px] min-w-[360px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[50px] text-white font-bold leading-[50px] font-['sen']">
                    Conectar
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[18px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[80px] h-[18px]"
                  />
                  <div className="flex flex-row justify-between items-center w-full gap-4">
                    <p className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Términos del servicio{" "}
                    </p>
                    <p className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Privacidad{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[410px] md:w-[45vw] lg:w-[60vw] md:max-w-[550px] xl:max-w-[600px] min-h-[470px] h-[60vh] max-h-[800px]">
              <Connect
                handleModal={handleModal}
                handleSection={handleSection}
              />
            </div>
          </div>

          {/* Mobile version */}

          <div className="w-full h-full min-h-screen flex md:hidden items-center justify-center z-10">
            <Connect handleModal={handleModal} handleSection={handleSection} />
          </div>
        </>
      )}

      {/**Signup in tab content**/}
      {CurrentSection === 3 && (
        <>
          {/** Desktop version */}
          <div className="hidden md:flex w-fit h-fit flex-row">
            <div className="flex flex-col relative w-fit h-fit">
              <img
                src={SignupBg}
                alt=""
                className="min-h-[450px] h-[60vh] max-h-[800px] w-[400px] min-w-[360px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[45px] text-white font-bold leading-[50px] font-['sen']">
                    Registrate
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[18px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[80px] h-[18px]"
                  />
                  <div className="flex flex-row justify-between items-center w-full gap-4">
                    <p className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Términos del servicio{" "}
                    </p>
                    <p className="text-white text-[18px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                      {" "}
                      Privacidad{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[400px] md:w-[45vw] lg:w-[60vw] md:max-w-[550px] xl:max-w-[600px] min-h-[450px] h-[60vh] max-h-[800px]">
              <SignUp handleModal={handleModal} handleSection={handleSection} />
            </div>
          </div>

          {/** Mobile version */}
          <div className="relative flex md:hidden w-full h-full items-center justify-center">
            <img
              src={SignupBg}
              alt=""
              className="w-full min-h-screen absolute object-fit"
            />

            <div className="w-full h-full flex items-center justify-center z-10">
              <SignUp handleModal={handleModal} handleSection={handleSection} />
            </div>
          </div>
        </>
      )}

      {/**Terms and conditions tab content**/}
      {CurrentSection === 4 && (
        <div className="w-screen h-screen md:w-full md:max-w-[800px] xl:max-w-[800px] md:min-h-[450px] md:h-[60vh] md:max-h-[800px] flex items-center justify-center mx-auto">
          <Terms handleSection={handleSection} />
        </div>
      )}

      {CurrentSection === 5 && (
        <div className="w-screen h-screen md:min-w-[750px] md:w-[90vw] md:max-w-[900px] lg:min-w-[900px] xl:w-[1000px] xl:max-w-[1000px] md:min-h-[500px] md:h-[60vh] md:max-h-[800px] flex items-center justify-center">
          <PasswordRecovery
            handleModal={handleModal}
            handleSection={handleSection}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
