import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Bg_logo1, Bg_logo2 } from "../../assets";
import { userConnection } from "../../api/server";

import HighlightBanner from "./highlightBanner";
import { AnimatePresence, motion } from "framer-motion";

const LogIn = ({ handleModal, handleSection }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [highlightNotification, setHighlightNotification] = useState(false);
  const [serverLoading, setServerLoading] = useState(false);

  const { logIn } = userConnection();
  const navigate = useNavigate();

  const getBorderColor = (focused) => (focused ? "#18A5FF" : "#B5B5B5");
  const getIconColor = (focused) => (focused ? "#18A5FF" : "#B5B5B5");

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const mobileEmailInputRef = useRef(null);
  const mobilePasswordInputRef = useRef(null);

  const loaderVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const getInputValues = () => {
    return {
      login: emailInputRef.current.value
        ? emailInputRef.current.value.toLowerCase()
        : mobileEmailInputRef.current.value.toLowerCase(),
      pass: passwordInputRef.current.value
        ? passwordInputRef.current.value
        : mobilePasswordInputRef.current.value,
    };
  };

  const clearInputValues = () => {
    //emailInputRef.current.value = '';
    passwordInputRef.current.value = "";
  };

  const handleLogin = async () => {
    setServerLoading(true);
    const values = getInputValues();

    try {
      const user = await logIn(values);
      if (user) {
        setServerLoading(false);
        handleModal(false);
        navigate("/marketplace");
      }
    } catch (error) {
      setHighlightNotification(true);
      console.error(error);
      clearInputValues();
      setTimeout(() => {
        setServerLoading(false);
      }, 5000);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="md:bg-white h-full w-full relative md:px-8 md:py-4 md:p-4 overflow-y-scroll md:overflow-hidden">
      {/** Desktop version */}
      <div className="md:flex hidden flex-col items-center justify-around h-full relative">
        <span
          className="material-symbols-outlined text-slate-400 w-full md:flex items-start justify-end cursor-pointer hidden absolute top-0 right-0"
          onClick={() => handleModal(false)}
        >
          cancel
        </span>

        <div className="flex flex-col gap-2 w-full px-8 font-jakarta mt-[15%]">
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
                id="Email-input"
                type="text"
                ref={emailInputRef}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onChange={() => {
                  setHighlightNotification(false);
                }}
                className="w-full sm:px-[20px] outline-none placeholder:text-[#B5B5B5] border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px]"
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
                id="Password-input"
                type={passwordVisibility ? "password" : "text"}
                ref={passwordInputRef}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                onChange={() => {
                  setHighlightNotification(false);
                  setServerLoading(false);
                }}
                className="w-full sm:px-[20px] outline-none placeholder:text-[#B5B5B5] border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-black text-[18px] leading-[30px] "
                placeholder="Contraseña"
              />
              <span
                className="material-symbols-outlined cursor-pointer text-[#B5B5B5] ml-6"
                onClick={togglePasswordVisibility}
              >
                {!passwordVisibility ? "visibility" : "visibility_off"}
              </span>
            </div>
          </div>

          <p
            className="underline hover:font-semibold hover:text-[#18A5FF] text-[16px] text-[#062147] cursor-pointer w-fit font-['sen'] translate-y-[10px]"
            onClick={() => handleSection(5)}
          >
            Recuperar mi contraseña
          </p>
        </div>

        <div className="w-full px-8 h-fit translate-y-2">
          <button
            className="w-full text-[25px] font-bold bg-[#062147] py-2 text-white h-fit"
            onClick={handleLogin}
            disabled={serverLoading || highlightNotification ? true : false}
          >
            {serverLoading || highlightNotification ? (
              <div className="py-2 w-full flex items-center justify-center">
                <motion.div
                  variants={loaderVariants}
                  initial="start"
                  animate="end"
                  className="border-2 border-t-2 border-gray-500 rounded-full w-5 h-5 border-t-blue-500 animate-spin"
                />
              </div>
            ) : (
              "Continuar"
            )}
          </button>
        </div>

        <p className="text-[16px] flex items-center gap-2 h-fit font-jakarta translate-y-3 text-[#062147]">
          ¿Aún no tienes cuenta?{" "}
          <span
            className="inline underline font-normal cursor-pointer hover:text-[#18A5FF] hover:font-bold text-[#062147]"
            onClick={() => handleSection(2)}
          >
            Registrarme
          </span>
        </p>
      </div>

      {/** Mobile version */}

      <div className="flex flex-col md:hidden px-3 py-10 h-full">
        <div className="flex flex-col w-full h-full items-center justify-around gap-16 ">
          <section className="flex flex-col">
            <h2 className="text-[40px] text-white font-bold font-sen text-center">
              Bienvenido a casa
            </h2>

            <p className="text-center text-white text-[17px] font-jakarta">
              Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
              sagittis.
            </p>
          </section>

          <section className="flex flex-col gap-8 w-full h-fit bg-transparent backdrop-saturate-100 backdrop-blur-[10px] backdrop-brightness-50 rounded-lg p-3 font-jakarta">
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
                ref={mobileEmailInputRef}
                type="text"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className="w-full sm:px-[20px] placeholder:text-white font-jakarta md:font-semibold outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-white text-[18px] leading-[30px]"
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
                ref={mobilePasswordInputRef}
                id="Password-input"
                type={passwordVisibility ? "password" : "text"}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className="w-full sm:px-[20px] md:font-semibold font-jakarta outline-none placeholder:text-white border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-white text-[18px] leading-[30px] "
                placeholder="Contraseña"
              />

              <span
                className="material-symbols-outlined cursor-pointer text-[#B5B5B5] ml-6"
                onClick={togglePasswordVisibility}
              >
                {!passwordVisibility ? "visibility" : "visibility_off"}
              </span>
            </div>

            <p
              className="underline hover:font-semibold text-[#18A5FF] text-[20px] cursor-pointer w-fit font-sen"
              onClick={() => handleSection(5)}
            >
              Recuperar mi contraseña
            </p>
            <div className="">
              <button
                className="w-full text-[20px] font-bold bg-[#062147] py-4 text-white h-fit"
                onClick={handleLogin}
                disabled={serverLoading && highlightNotification ? true : false}
              >
                {serverLoading && highlightNotification ? (
                  <div className="py-2 w-full flex items-center justify-center">
                    <motion.div
                      variants={loaderVariants}
                      initial="start"
                      animate="end"
                      className="border-2 border-t-2 border-gray-500 rounded-full w-6 h-6 border-t-blue-500 animate-spin"
                    />
                  </div>
                ) : (
                  "Continuar"
                )}
              </button>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center">
            <p className="text-white text-[14px] font-jakarta">
              ¿Aún no tienes cuenta?
            </p>
            <p
              className="text-[20px] font-sen underline text-[#18A5FF]"
              onClick={() => handleSection(2)}
            >
              Registrarme
            </p>
          </section>
        </div>
      </div>

      {/** Logos */}

      <div className="md:block absolute hidden top-[-40px] left-[-10px] rotate-[20deg] z-0">
        <img src={Bg_logo2} alt="" className="w-[80px] h-[180px]" />
      </div>
      <div className="md:block absolute hidden bottom-[-20px] right-0">
        <img src={Bg_logo1} alt="" className="w-[50px] h-[100px]" />
      </div>

      {/** Other */}
      <AnimatePresence>
        {highlightNotification && (
          <HighlightBanner
            message="Usuario y/o contraseña inválidos"
            showBanner={setHighlightNotification}
          />
        )}
      </AnimatePresence>

      <span
        className="material-symbols-outlined text-white text-[28px] absolute right-4 top-4 md:hidden cursor-pointer"
        onClick={() => handleModal(false)}
      >
        cancel
      </span>
    </div>
  );
};

export default LogIn;
