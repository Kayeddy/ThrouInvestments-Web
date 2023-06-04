import React, { useState, useRef, useEffect } from "react";

import { Bg_logo1, Bg_logo2 } from "../../assets";

import { userConnection } from "../../api/server";

const InputField = React.forwardRef(
  ({ id, icon, placeholder, handleFocus, type }, ref) => {
    return (
      <div
        className={`relative w-full flex flex-row items-center border-b`}
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
          type={type}
          onFocus={handleFocus}
          className="w-full sm:px-[20px] font-jakarta outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue md:text-black text-white md:placeholder:text-[#4b5264] placeholder:text-white text-[18px] leading-[30px]"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

const SignUp = ({ handleModal, handleSection }) => {
  useEffect(() => {
    document.getElementById("user-input").style.overflowY = "auto";
  }, []);

  const { addUser } = userConnection();

  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const idInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const addressInputRef = useRef(null);

  const highlightField = (e) => {
    const inputRefs = [
      usernameInputRef,
      emailInputRef,
      idInputRef,
      ageInputRef,
      phoneInputRef,
      addressInputRef,
      passwordInputRef,
      confirmPasswordInputRef,
    ];

    inputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");

      if (ref.current === e.target) {
        icon.style.color = "#18A5FF";
        container.style.borderBottom = "2px solid #18A5FF";
      } else {
        icon.style.color = "#B5B5B5";
        container.style.borderBottom = "1px solid #B5B5B5";
      }
    });
  };

  const getInputValues = () => {
    return {
      name: usernameInputRef.current.value,
      email: emailInputRef.current.value,
      cedula: idInputRef.current.value,
      yearOld: ageInputRef.current.value,
      phone: phoneInputRef.current.value,
      addressStreet: addressInputRef.current.value,
      password: passwordInputRef.current.value,
    };
  };

  const handleSubmit = () => {
    const values = getInputValues();

    addUser(values);
  };

  return (
    <div
      id="user-input"
      className="md:bg-white h-full md:h-full px-8 md:py-10 pt-[40px] flex flex-col gap-2 md:gap-0 md:block items-center md:justify-start justify-between relative overflow-auto"
    >
      <div className="flex-row items-center justify-between w-full px-6 md:flex hidden">
        <span
          className="material-symbols-outlined text-slate-400 w-full flex items-start justify-start cursor-pointer"
          onClick={() => handleSection(2)}
        >
          chevron_left
        </span>
        <span
          className="material-symbols-outlined text-slate-400 w-full flex items-center justify-end cursor-pointer"
          onClick={() => handleModal(false)}
        >
          cancel
        </span>
      </div>

      <div className="flex md:hidden flex-col items-center justify-center w-[90%] text-center">
        <h2 className="text-white text-[30px] font-['sen']">Registrate</h2>
        <p className="font-Plus_Jakarta_Sans  text-white text-[20px] font-jakarta">
          {" "}
          Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
          sagittis.{" "}
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-between md:px-8 px-4 bg-transparent backdrop-blur-lg md:backdrop-blur-none  backdrop-brightness-50 md:backdrop-filter-none rounded-lg md:rounded-none">
        <div className="flex flex-col items-center md:gap-8 w-full rounded-lg md:rounded-none font-jakarta h-[70%] md:h-fit justify-start md:py-12 overflow-y-auto">
          <InputField
            ref={usernameInputRef}
            id="Username-input"
            icon="person"
            placeholder="Nombre de usuario"
            handleFocus={highlightField}
            type="text"
          />
          <InputField
            ref={emailInputRef}
            id="Mail-input"
            icon="mail"
            placeholder="Email"
            handleFocus={highlightField}
            type="text"
          />
          <InputField
            ref={idInputRef}
            id="id-input"
            icon="badge"
            placeholder="ID"
            handleFocus={highlightField}
            type="number"
          />
          <InputField
            ref={ageInputRef}
            id="age-input"
            icon="event"
            placeholder="Edad"
            handleFocus={highlightField}
            type="number"
          />
          <InputField
            ref={phoneInputRef}
            id="phone-input"
            icon="smartphone"
            placeholder="Telefono"
            handleFocus={highlightField}
            type="number"
          />
          <InputField
            ref={addressInputRef}
            id="address-input"
            icon="my_location"
            placeholder="Direccion"
            handleFocus={highlightField}
            type="text"
          />
          <InputField
            ref={passwordInputRef}
            id="Password-input"
            icon="lock"
            placeholder="Contraseña"
            handleFocus={highlightField}
            type="text"
          />
          <InputField
            ref={confirmPasswordInputRef}
            id="Confirm-password-input"
            icon="lock"
            placeholder="Confirmar contraseña"
            handleFocus={highlightField}
            type="text"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <div className="w-full ">
            <button
              className="w-full text-[25px] font-bold bg-[#062147] py-2 text-white"
              onClick={handleSubmit}
            >
              {" "}
              Continuar{" "}
            </button>
          </div>
          <p className=" font-Plus_Jakarta_Sans text-sm sm:text-md md:text-[17px] text-[#B5B5B5]">
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

        <p className="text-[16px] md:flex hidden items-center gap-2 font-jakarta pb-2 pt-10">
          ¿Ya tienes cuenta?{" "}
          <span
            className="inline underline font-normal cursor-pointer hover:text-[#18A5FF] font-sen"
            onClick={() => handleSection(1)}
          >
            Iniciar sesión
          </span>
        </p>
      </div>

      <div className="flex md:hidden flex-col items-center justify-center text-white">
        <p className="text-[18px] font-sen">Ya tienes cuenta? </p>
        <p
          className="underline font-normal text-[20px] font-['Sen'] text-[#18A5FF]"
          onClick={() => handleSection(1)}
        >
          Iniciar sesión
        </p>
      </div>

      <div className="md:block absolute hidden top-[-40px] left-[-10px] rotate-[20deg] z-0">
        <img src={Bg_logo2} alt="" className="w-[80px] h-[180px]" />
      </div>
      <div className="md:block absolute hidden bottom-[-20px] right-0">
        <img src={Bg_logo1} alt="" className="w-[50px] h-[100px]" />
      </div>
    </div>
  );
};

export default SignUp;
