import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Bg_logo1, Bg_logo2 } from "../../assets";
import { userConnection } from "../../api/server";

import useStore from "../../context/index";

const LogIn = ({ handleModal, handleSection }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const { logIn, addUser } = userConnection();
  const { toggleRegistering } = useStore();
  const navigate = useNavigate();

  const getBorderColor = (focused) => (focused ? "#18A5FF" : "#B5B5B5");
  const getIconColor = (focused) => (focused ? "#18A5FF" : "#B5B5B5");

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const getInputValues = () => {
    return {
      login: emailInputRef.current.value,
      pass: passwordInputRef.current.value,
    };
  };

  const handleSubmit = () => {
    const values = getInputValues();
    logIn(values).then(() => {
      navigate("/marketplace");
      toggleRegistering(false);
      document.body.style.overflow = "visible";
    });
    //const result = await logIn(values).then(() => addUser(accessToken));
    //getUser(accessToken);
  };

  return (
    <div className="md:bg-white h-full w-full md:w-full md:flex-1 relative flex flex-col justify-between md:px-8 md:py-4 p-4 overflow-hidden">
      {/** Desktop version */}
      <div className="md:flex hidden flex-col items-center justify-around h-full ">
        <span
          className="material-symbols-outlined text-slate-400 w-full md:flex items-start justify-end cursor-pointer hidden absolute top-4 right-4"
          onClick={() => handleModal(false)}
        >
          cancel
        </span>

        <div className="flex flex-col gap-2 w-full px-12 md:px-8 font-jakarta lg:pt-[5%] xl:pt-[10%]">
          <div className="flex flex-col gap-8 items-center justify-center">
            <div
              className="relative w-full flex flex-row items-center"
              style={{
                borderBottom: `1px solid ${getBorderColor(emailFocused)}`,
              }}
            >
              <span
                className="material-symbols-outlined  cursor-pointer text-[#062147]"
                style={{ color: getIconColor(emailFocused) }}
              >
                Mail
              </span>
              <input
                type="text"
                ref={emailInputRef}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className="w-full sm:px-[20px] outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px]"
                placeholder="Email"
              />
            </div>

            <div
              className="relative w-full flex flex-row items-center"
              style={{
                borderBottom: `1px solid ${getBorderColor(passwordFocused)}`,
              }}
            >
              <span
                className="material-symbols-outlined cursor-pointer text-[#062147]"
                style={{ color: getIconColor(passwordFocused) }}
              >
                lock
              </span>
              <input
                type="password"
                ref={passwordInputRef}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className="w-full sm:px-[20px] outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] "
                placeholder="Contraseña"
              />
            </div>
          </div>

          <p
            className="underline hover:font-semibold hover:text-[#18A5FF] text-[16px] text-[#062147] cursor-pointer w-fit font-['sen']"
            onClick={() => handleSection(5)}
          >
            Recuperar mi contraseña
          </p>
        </div>

        <div className="w-full px-8 h-fit -translate-y-[30px]">
          <button
            className="w-full text-[25px] font-bold bg-[#062147] py-2 text-white h-fit"
            onClick={handleSubmit}
          >
            Continuar
          </button>
        </div>

        <p className="text-[16px] flex items-center gap-2 h-fit font-jakarta translate-y-[30px]">
          ¿Aún no tienes cuenta?{" "}
          <span
            className="inline underline font-normal cursor-pointer hover:text-[#18A5FF]"
            onClick={() => handleSection(2)}
          >
            Registrarme
          </span>
        </p>
      </div>

      {/** Mobile version */}

      <div className="flex md:hidden flex-col w-full h-full items-center justify-between p-3 pt-8">
        <div className="flex flex-col">
          <h2 className="text-[35px] text-white font-bold font-['sen'] text-center">
            Bienvenido a casa
          </h2>
          <p className="font-Plus_Jakarta_Sans text-center  text-white text-[20px] font-jakarta">
            {" "}
            Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
            sagittis.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full h-fit bg-transparent backdrop-saturate-100 backdrop-blur-[10px] backdrop-brightness-50 rounded-lg p-3 font-jakarta">
          <div
            className="relative w-full flex flex-row items-center"
            style={{
              borderBottom: `1px solid ${getBorderColor(emailFocused)}`,
            }}
          >
            <span
              className="material-symbols-outlined cursor-pointer text-white"
              style={{ color: getIconColor(emailFocused) }}
            >
              Mail
            </span>
            <input
              type="text"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className="w-full sm:px-[20px] placeholder:text-white font-Plus_Jakarta_Sans md:font-semibold outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-white text-[18px] leading-[30px]"
              placeholder="Email"
            />
          </div>

          <div
            className="relative w-full flex flex-row items-center"
            style={{
              borderBottom: `1px solid ${getBorderColor(passwordFocused)}`,
            }}
          >
            <span
              className="material-symbols-outlined cursor-pointer text-white"
              style={{ color: getIconColor(passwordFocused) }}
            >
              lock
            </span>
            <input
              type="text"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className="w-full sm:px-[20px] md:font-semibold font-Plus_Jakarta_Sans outline-none placeholder:text-white border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-white text-[18px] leading-[30px] "
              placeholder="Contraseña"
            />
          </div>

          <p
            className="underline hover:font-semibold text-[#18A5FF] text-[16px] cursor-pointer w-fit font-['sen']"
            onClick={() => handleSection(5)}
          >
            Recuperar mi contraseña
          </p>
          <div className="">
            <button className="w-full text-[16px] bg-[#062147] py-4 text-white ">
              {" "}
              Continuar{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-[18px] font-jakarta">
            ¿Aún no tienes cuenta?
          </p>
          <p
            className="text-[20px] font-['Sen'] underline text-[#18A5FF]"
            onClick={() => handleSection(2)}
          >
            Registrarme
          </p>
        </div>
      </div>

      {/** Logos */}

      <div className="md:block absolute hidden top-[-40px] left-[-10px] rotate-[20deg] z-0">
        <img src={Bg_logo2} alt="" className="w-[80px] h-[180px]" />
      </div>
      <div className="md:block absolute hidden bottom-[-20px] right-0">
        <img src={Bg_logo1} alt="" className="w-[50px] h-[100px]" />
      </div>
    </div>
  );
};

export default LogIn;
