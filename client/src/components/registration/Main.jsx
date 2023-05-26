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
          <div className="md:flex hidden w-fit h-fit flex-row">
            <div className="flex flex-col relative w-fit h-fit z-10">
              <img
                src={LoginBg}
                alt=""
                className="h-[60vh] w-[400px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[45px] text-white font-bold leading-[50px] font-['sen']">
                    Bienvenido a casa
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[20px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[100px] h-[20px]"
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

            <div className="w-[550px] h-[60vh]">
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
                className="h-[60vh] w-[400px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[50px] text-white font-bold leading-[50px] font-['sen']">
                    Conectar
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[20px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[100px] h-[20px]"
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

            <div className="w-[550px] h-[60vh]">
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
                className="h-[70vh] w-[400px] object-cover"
              />

              <div className="absolute w-full h-full flex flex-col items-start justify-between p-8 gap-10">
                <div className="flex flex-col gap-8">
                  <h2 className="lg:text-[55px] md:text-[45px] text-white font-bold leading-[50px] font-['sen']">
                    Registrate
                  </h2>
                  <p className="font-Plus_Jakarta_Sans  text-white text-[20px] font-jakarta">
                    {" "}
                    Mauris urna nisi vitae praesent a pulvinar ut erat mattis
                    nibh sagittis.{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start  w-full gap-2">
                  <img
                    src={Throu_l_footer}
                    alt=""
                    className="w-[100px] h-[20px]"
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

            <div className="w-[550px] md:h-[70vh] h-screen">
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
        <div className="w-full h-[73vh] flex items-center justify-center">
          <Terms handleSection={handleSection} />
        </div>
      )}

      {CurrentSection === 5 && (
        <div className="md:w-[75vw] w-full h-[70vh] flex items-center justify-center">
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
