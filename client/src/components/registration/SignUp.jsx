import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Bg_logo1, Bg_logo2 } from "../../assets";
import { userConnection } from "../../api/server";
import HighlightBanner from "./highlightBanner";
import useAuthStore from "../../context/useAuthStore";

const InputField = React.forwardRef(
  (
    { id, icon, placeholder, handleFocus, handleBlur, type, handleChange },
    ref
  ) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const togglePasswordVisibility = () => {
      setPasswordVisibility(!passwordVisibility);
    };

    return (
      <div
        className={`relative w-full flex flex-row items-center gap-4 border-b`}
        id={`${id}-container`}
      >
        <span
          className="material-symbols-outlined cursor-pointer md:text-[#062147] text-white"
          id={`${id}-icon`}
        >
          {icon}
        </span>
        <input
          ref={ref}
          id={id}
          type={
            id === "Password-input"
              ? passwordVisibility
                ? "password"
                : "text"
              : type
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full font-jakarta p-0 py-2 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue md:text-black text-white md:placeholder:text-[#B5B5B5] placeholder:text-white text-[18px] leading-[30px]"
          placeholder={placeholder}
          required
        />

        {id === "Password-input" && (
          <span
            className="material-symbols-outlined cursor-pointer text-[#B5B5B5] ml-6"
            onClick={togglePasswordVisibility}
          >
            {!passwordVisibility ? "visibility" : "visibility_off"}
          </span>
        )}
      </div>
    );
  }
);

const SignUp = ({ handleModal, handleSection }) => {
  const [highlightNotification, setHighlightNotification] = useState(false);
  const [serverLoading, setServerLoading] = useState(false);
  const containerRef = useRef(null);

  const { addUser } = userConnection();

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

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

  const highlightField = (e) => {
    const inputRefs = [
      firstNameInputRef,
      lastNameInputRef,
      emailInputRef,
      passwordInputRef,
      confirmPasswordInputRef,
    ];

    inputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");

      if (ref.current === e.target) {
        icon.style.color = "#18A5FF";
        container.style.borderBottom = "2px solid #18A5FF";

        // If the placeholder is 'birthdate', change the input type to 'date'
        if (ref.current.placeholder === "Fecha de nacimiento") {
          ref.current.type = "date";
        }
      } else {
        icon.style.color = "#B5B5B5";
        container.style.borderBottom = "1px solid #B5B5B5";

        // Reset the input type to 'text' when it's not focused
        if (ref.current.placeholder === "birthdate") {
          ref.current.type = "text";
        }
      }
    });
  };

  const unfocusField = (e) => {
    const inputRefs = [
      firstNameInputRef,
      lastNameInputRef,
      emailInputRef,
      passwordInputRef,
      confirmPasswordInputRef,
    ];

    inputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");

      icon.style.color = "#B5B5B5";
      container.style.borderBottom = "1px solid #B5B5B5";
      ref.current.blur();
    });
  };

  const getInputValues = () => {
    return {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value.toLowerCase(),
      password: passwordInputRef.current.value,
    };
  };

  const handleSubmit = () => {
    setServerLoading(true);
    const values = getInputValues();
    const { firstName, lastName, email, password } = values;

    if (firstName && lastName && email && password) {
      const user = addUser(values);
      if (user) {
        setServerLoading(false);
        handleSection(6);
      }
    } else {
      setHighlightNotification(true);
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      ref={containerRef}
      className="md:bg-white h-full md:h-full px-4 md:px-8 py-10 md:py-10 md:pt-[40px] flex flex-col gap-12 md:gap-0 md:block items-center justify-start relative overflow-y-auto overflow-x-hidden"
    >
      <section className="flex-row items-center justify-between w-full px-6 md:flex hidden">
        <span
          className="material-symbols-outlined text-slate-400 w-[40px] flex items-center justify-center cursor-pointer"
          onClick={() => handleSection(2)}
        >
          chevron_left
        </span>
        <span
          className="material-symbols-outlined text-slate-400 w-fit flex items-center justify-end cursor-pointer"
          onClick={() => handleModal(false)}
        >
          cancel
        </span>
      </section>

      <section className="flex md:hidden flex-col items-center justify-center gap-4 w-[90%] text-center">
        <h2 className="text-white text-[40px] font-sen font-bold">
          Registrate
        </h2>
        <p className="text-white text-[17px] font-jakarta">
          Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
          sagittis.
        </p>
      </section>

      <section className="flex w-full h-fit flex-col items-center justify-start md:justify-between gap-24 md:gap-0 py-4 px-2 md:py-0 md:px-8 bg-transparent backdrop-blur-lg md:backdrop-blur-none backdrop-brightness-50 md:backdrop-filter-none rounded-lg md:rounded-none">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8 md:gap-8 w-full rounded-lg md:rounded-none font-jakarta h-max md:h-fit justify-start md:py-12"
        >
          <InputField
            ref={firstNameInputRef}
            id="Username-input"
            icon="person"
            placeholder="Nombre(s)"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            handleChange={() => {
              setHighlightNotification(false);
              setServerLoading(false);
            }}
            type="text"
          />
          <InputField
            ref={lastNameInputRef}
            id="Username-input"
            icon="person"
            placeholder="Apellido(s)"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            handleChange={() => {
              setHighlightNotification(false);
              setServerLoading(false);
            }}
            type="text"
          />

          <InputField
            ref={emailInputRef}
            id="Mail-input"
            icon="mail"
            placeholder="Email"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            handleChange={() => {
              setHighlightNotification(false);
              setServerLoading(false);
            }}
            type="text"
          />

          <InputField
            ref={passwordInputRef}
            id="Password-input"
            icon="lock"
            placeholder="Contraseña"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            handleChange={() => {
              setHighlightNotification(false);
              setServerLoading(false);
            }}
            type="password"
          />

          <InputField
            ref={confirmPasswordInputRef}
            if="Confirm-password-input"
            icon="lock"
            placeholder="Confirmar Contraseña"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            handleChange={() => {
              setHighlightNotification(false);
              setServerLoading(false);
            }}
            type="password"
          />
        </form>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="w-full ">
            <button
              className="w-full text-[25px] font-bold bg-[#062147] py-2 text-white h-fit"
              onClick={handleSubmit}
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
          <p className="font-jakarta text-sm sm:text-md md:text-[17px] text-[#B5B5B5]">
            Al continuar aceptas los{" "}
            <span
              className="inline underline cursor-pointer"
              onClick={() => handleSection(4)}
            >
              {" "}
              Términos del servicio{" "}
            </span>{" "}
          </p>
        </div>

        <p className="text-[16px] md:flex hidden items-center gap-2 font-jakarta pb-2 pt-10 text-[#062147]">
          ¿Ya tienes cuenta?{" "}
          <span
            className="inline underline font-normal cursor-pointer hover:text-[#18A5FF] hover:font-bold font-sen"
            onClick={() => handleSection(1)}
          >
            Iniciar sesión
          </span>
        </p>
      </section>

      <section className="flex md:hidden flex-col items-center justify-center text-white">
        <p className="text-[18px] font-jakarta">Ya tienes cuenta? </p>
        <p
          className="underline font-normal text-[20px] font-['Sen'] text-[#18A5FF]"
          onClick={() => handleSection(1)}
        >
          Iniciar sesión
        </p>
      </section>

      {/* logos */}
      <div className="md:block absolute hidden top-[-40px] left-[-10px] rotate-[20deg] z-0">
        <img src={Bg_logo2} alt="" className="w-[80px] h-[180px]" />
      </div>
      <div className="md:block absolute hidden bottom-[-20px] right-0">
        <img src={Bg_logo1} alt="" className="w-[50px] h-[100px]" />
      </div>

      {/* Other */}
      <AnimatePresence>
        {highlightNotification && (
          <HighlightBanner
            message="Debes llenar todos los campos antes de continuar"
            showBanner={setHighlightNotification}
          />
        )}
      </AnimatePresence>
      <span
        className="material-symbols-outlined text-white text-[28px] absolute right-4 top-4 cursor-pointer"
        onClick={() => handleModal(false)}
      >
        cancel
      </span>
    </main>
  );
};

export default SignUp;
