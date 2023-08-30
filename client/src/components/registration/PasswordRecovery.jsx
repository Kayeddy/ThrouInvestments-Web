import React, { useState, useRef, useEffect } from "react";
import { Bg_logo1_left, Bg_logo2_right, PasswordKey } from "../../assets";
import { Bg_logo1, Bg_logo2 } from "../../assets";

const OtpInput = ({ index, onFocus, onBlur, focusedInput }) => {
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.value && index < 5) {
      onFocus(index + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && index > 0) {
      if (inputRef.current.value === "") {
        onBlur(index - 1);
      } else {
        inputRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    if (index === focusedInput) {
      inputRef.current.focus();
    }
  }, [focusedInput, index]);

  return (
    <input
      ref={inputRef}
      id={String(index + 1)}
      maxLength="1"
      onFocus={() => onFocus(index)}
      onBlur={() => onBlur(index)}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      type="text"
      className="border-transparent text-black border-b-[1px] border-b-[#B5B5B5] w-[20px] outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:text-[#18A5FF] focus:border-[#18A5FF] focus:outline-none focus:outline-transparent focus:ring-0 focus:ring-transparent ring-0 bg-transparent px-0 text-center group"
    />
  );
};

const PasswordRecovery = ({ handleSection, handleModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [focusedInput, setFocusedInput] = useState(0);

  const handleFocus = (index) => {
    document.getElementById(String(index + 1)).parentElement.style.border =
      "1px solid #18A5FF";
    setFocusedInput(index);
  };

  const handleBlur = (index) => {
    document.getElementById(String(index + 1)).parentElement.style.border =
      "1px solid #B5B5B5";
    setFocusedInput(index);
  };

  const highlightField = (focusedField) => {
    if (focusedField === "Password-input") {
      document.getElementById("Password-icon").style.color = "#18A5FF";
      document.getElementById("Password-container").style.borderBottom =
        "2px solid #18A5FF";
    } else {
      document.getElementById("Password-icon").style.color = "#B5B5B5";
      document.getElementById("Password-container").style.borderBottom =
        "1px solid #B5B5B5";
    }

    if (focusedField === "Password-verification-input") {
      document.getElementById("Password-verification-icon").style.color =
        "#18A5FF";
      document.getElementById(
        "Password-verification-container"
      ).style.borderBottom = "2px solid #18A5FF";
    } else {
      document.getElementById("Password-verification-icon").style.color =
        "#B5B5B5";
      document.getElementById(
        "Password-verification-container"
      ).style.borderBottom = "1px solid #B5B5B5";
    }
  };

  const togglePasswordVisibility = () => {
    let input = document.getElementById("Password-input");

    if (input.type === "password") {
      input.type = "text";
      setPasswordVisibility(false);
    } else {
      input.type = "password";
      setPasswordVisibility(true);
    }
  };

  return (
    <div className="md:min-w-[750px] md:w-[80vw] md:max-w-[950px] md:h-[550px] w-screen h-screen bg-white overflow-hidden relative">
      <div className="absolute flex flex-col items-center gap-4 w-full h-full py-10 z-10 mx-auto">
        <header className="flex flex-row gap-4 items-center justify-center w-full mt-[70px] md:mt-0">
          <span
            className={`material-symbols-outlined text-[#B5B5B5] md:flex hidden absolute md:top-[10%] xl:top-[9%] left-[10%] items-center justify-center cursor-pointer text-[30px] ${
              currentStep === 4 && "w-fit pl-10"
            }`}
            onClick={() => handleSection(1)}
          >
            chevron_left
          </span>

          <span
            className={`material-symbols-outlined text-[#B5B5B5] md:flex hidden absolute md:top-[10%] xl:top-[9%] right-[10%] items-center justify-center cursor-pointer ${
              currentStep === 4 && "w-fit pl-10"
            }`}
            onClick={() => handleModal(false)}
          >
            cancel
          </span>

          {currentStep !== 4 && (
            <div className="w-full md:w-fit h-fit flex flex-row items-center justify-center relative mt-4 md:mt-0">
              <span
                className="material-symbols-outlined w-fit h-fit p-1 text-[#B5B5B5] flex md:hidden items-center justify-center cursor-pointer text-[35px] absolute top-[-40px] left-2"
                onClick={() => handleSection(1)}
              >
                chevron_left
              </span>
              <h2 className="md:text-[35px] text-[30px] text-[#062147] font-semibold text-center md:text-left absolute md:relative w-[80%] md:w-fit">
                Recuperación de contraseña
              </h2>
            </div>
          )}
        </header>

        <div className="flex flex-col px-4 md:px-0 h-full">
          {/** Sub recovery section 1 */}
          {currentStep === 1 && (
            <section className="w-full h-full flex flex-col items-center justify-between gap-8 p-4 pt-[30px] md:p-0 md:pt-0 font-jakarta">
              <div className="flex items-start justify-start flex-col w-full h-fit">
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                  <p className="font-jakarta md:text-[17.2px] text-[18px] text-[#062147] text-center">
                    {" "}
                    Hola, recuperaremos tu contraseña de forma fácil y rápida.{" "}
                  </p>

                  <div className="flex flex-row justify-center items-center md:mt-5 gap-4">
                    <p className=" text-[18px] font-sen text-[#18A5FF]">1</p>
                    <div className="h-[1px] md:w-[190px] w-[98px] bg-[#B5B5B5]" />
                    <p className="text-[#B5B5B5] font-sen text-[18px]">2</p>
                    <div className="h-[1px] md:w-[190px] w-[98px] bg-[#B5B5B5]" />
                    <p className="text-[#B5B5B5] font-sen text-[18px]">3</p>
                  </div>
                </div>

                <h2 className="text-[20px] font-Plus_Jakarta_Sans text-[#18A5FF] font-semibold md:mt-4 mt-6 text-left">
                  {" "}
                  Correo electrónico{" "}
                </h2>
                <p className="text-[17px] font-Plus_Jakarta_Sans text-[#18A5FF]">
                  Te enviamos un código pero hey! No lo compartas con nadie.
                </p>
              </div>

              <div className="flex w-full h-fit justify-center items-center">
                <div
                  id="Email-container"
                  className="relative w-[95%] md:w-[85%] flex flex-row items-center border-b-[2px] border-[#18A5FF]"
                >
                  <span
                    className="material-symbols-outlined cursor-pointer text-[#18A5FF] md:ml-6"
                    id="Mail-icon"
                  >
                    Mail
                  </span>
                  <input
                    id="Mail-input"
                    type="text"
                    className="w-full sm:px-[20px] font-normal font-Plus_Jakarta_Sans outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[#01070E] text-[20px] leading-[30px] placeholder:text-[#4b5264]"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  className="w-full text-[25px] bg-[#062147] hover:bg-[#18A5FF] py-2.5 text-white flex items-center justify-center font-['Sen'] feont-semibold"
                  onClick={() => setCurrentStep(2)}
                >
                  {" "}
                  Recuperar{" "}
                </button>
              </div>
            </section>
          )}

          {/** Sub recovery section 2 */}
          {currentStep === 2 && (
            <section className="w-full h-full flex flex-col items-center justify-between gap-8 p-4 pt-[30px] md:p-0 md:pt-0 font-jakarta">
              <div className="flex flex-col gap-4">
                <p className="font-jakarta md:text-[17.2px] text-[18px] text-[#062147] text-center ">
                  {" "}
                  Código enviado revisa tu inbox o bandeja de Spam.{" "}
                </p>

                <div className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[18px] text-[#B5B5B5] font-sen">1</p>
                  <div className="h-[1px] md:w-[190px] w-[100px] bg-[#B5B5B5]" />
                  <p className=" text-[#18A5FF] text-[18px] font-sen">2</p>
                  <div className="h-[1px] md:w-[190px] w-[100px] bg-[#B5B5B5]" />
                  <p className="text-[#B5B5B5] text-[18px] font-sen">3</p>
                </div>

                <p className="text-[20px] font-jakarta text-[#18A5FF] text-center font-semibold">
                  Introduce el código enviado.
                </p>
              </div>

              <div className="relative w-full flex flex-col items-center md:gap-6 gap-1 justify-center">
                <div className="flex flex-row gap-1 md:gap-6 items-center justify-center">
                  {Array.from({ length: 6 }, (_, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center border-[1px] border-[#B5B5B5] px-4 py-2 rounded-md"
                    >
                      <OtpInput
                        index={i}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        focusedInput={focusedInput}
                      />
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full gap-3">
                  <p className="text-[#062147] font-['Sen'] text-[20px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                    Reenviar código
                  </p>
                  <p className="text-[#062147] font-['Sen'] text-[20px] hover:underline hover:text-[#18A5FF] cursor-pointer">
                    {" "}
                    No he recibido nada{" "}
                  </p>
                </div>

                <button
                  className="w-full text-[25px] bg-[#062147] py-1.5 text-white flex items-center justify-center font-['Sen'] feont-semibold"
                  onClick={() => setCurrentStep(3)}
                >
                  {" "}
                  Verificar y continuar{" "}
                </button>
              </div>
            </section>
          )}

          {/** Sub recovery section 3 */}
          {currentStep === 3 && (
            <section className="w-full h-full flex flex-col items-center justify-between p-4 pt-[30px] md:p-0 md:pt-0 font-jakarta">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[18px] text-[#B5B5B5]">1</p>
                  <div className="h-[1px] md:w-[190px] w-[100px] bg-[#B5B5B5]" />
                  <p className="text-[#B5B5B5] text-[18px]">2</p>
                  <div className="h-[1px] md:w-[190px] w-[100px] bg-[#B5B5B5]" />
                  <p className="text-[#18A5FF] text-[18px]">3</p>
                </div>

                <p className="text-[17px] md:text-[20px] font-Plus_Jakarta_Sans text-[#18A5FF] text-center  font-semibold">
                  Genial! Ingresa la nueva contraseña.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-8 w-[95%]">
                <div
                  id="Password-container"
                  className="relative w-full flex flex-row items-center border-b-[2px]"
                >
                  <span
                    className="material-symbols-outlined cursor-pointer  text-[#B5B5B5] ml-6"
                    id="Password-icon"
                  >
                    lock
                  </span>
                  <input
                    id="Password-input"
                    type="password"
                    className="w-full sm:px-[20px] font-normal font-Plus_Jakarta_Sans outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[#01070E] text-[20px] leading-[30px] placeholder:text-[#4b5264]"
                    placeholder="Contraseña"
                    onFocus={(e) => highlightField(e.target.id)}
                  />
                  <span
                    className="material-symbols-outlined cursor-pointer text-[#B5B5B5] ml-6"
                    onClick={togglePasswordVisibility}
                  >
                    {!passwordVisibility ? "visibility" : "visibility_off"}
                  </span>
                </div>

                <div
                  id="Password-verification-container"
                  className="relative w-full flex flex-row items-center border-b-[2px]"
                >
                  <span
                    className="material-symbols-outlined cursor-pointer text-[#B5B5B5]  ml-6"
                    id="Password-verification-icon"
                  >
                    lock
                  </span>
                  <input
                    id="Password-verification-input"
                    type="password"
                    className="w-full sm:px-[20px] font-normal font-Plus_Jakarta_Sans outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[#01070E] text-[20px] leading-[30px] placeholder:text-[#4b5264]"
                    placeholder="Confirmar contraseña"
                    onFocus={(e) => highlightField(e.target.id)}
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  className="w-[90%] text-[25px] bg-[#062147] py-2 text-white flex items-center justify-center font-['Sen'] feont-semibold"
                  onClick={() => setCurrentStep(4)}
                >
                  {" "}
                  Guardar contraseña{" "}
                </button>
              </div>
            </section>
          )}

          {/** Password saved succesfully */}
          {currentStep === 4 && (
            <section className="w-full h-full flex flex-col items-center justify-around md:justify-center">
              <div className="flex flex-col items-center justify-center mt-[100px] md:mt-0 gap-12">
                <img src={PasswordKey} alt="" className="w-32 h-32" />
                <h2 className="text-[50px] text-[#062147] font-['sen'] text-center">
                  Contraseña guardada con éxito!
                </h2>
              </div>
              <p
                className="md:hidden text-[#18A5FF] text-[20px] underline"
                onClick={() => handleModal(false)}
              >
                Volver
              </p>
            </section>
          )}
        </div>
      </div>

      <div className="absolute bottom-[-80px] left-0 md:block hidden z-0">
        <img
          src={Bg_logo1_left}
          alt=""
          className="w-[10rem] h-[20rem] rotate-[-30deg]"
        />
      </div>

      <div className="absolute top-[-80px] right-0 md:block hidden z-0">
        <img
          src={Bg_logo2_right}
          alt=""
          className="w-[10rem] h-[20rem] rotate-[-30deg]"
        />
      </div>
    </div>
  );
};

export default PasswordRecovery;
