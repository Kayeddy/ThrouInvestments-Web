import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Bg_logo1_left, Bg_logo2_right, Throu_l, Throu_sm } from "../assets";
import { CustomButton } from "../components/marketplace";

import FirstStep from "../components/userVerification/FirstStep";
import SecondStep from "../components/userVerification/SecondStep";
import ThirdStep from "../components/userVerification/ThirdStep";

const UserVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleStepChange = (step) => {
    setStep(step);
  };

  return (
    <main className="w-full h-screen relative overflow-hidden">
      {/** Content Header */}
      <section className="fixed top-0 z-10 w-full py-5 flex flex-row justify-between items-center px-[100px]">
        <img src={Throu_l} alt="" className="w-40 h-12" />
        {/** Step indicator section */}
        <div className="flex flex-row items-center gap-2">
          <span
            className={`rounded-full flex items-center justify-center w-10 h-10 border-[#062147] border-[1px]  font-jakarta cursor-pointer transition-all duration-300 ease-in-out ${
              step === 1 || step === 2 || step === 3
                ? "bg-[#062147] text-white "
                : "bg-white text-[#062147]"
            }`}
            onClick={() => handleStepChange(1)}
          >
            1
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 2 || step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 2 || step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 2 || step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
          </div>
          <span
            className={`rounded-full flex items-center justify-center w-10 h-10 border-[#062147] border-[1px]  font-jakarta cursor-pointer transition-all duration-300 ease-in-out ${
              step === 2 || step === 3
                ? "bg-[#062147] text-white "
                : "bg-white text-[#062147]"
            }`}
            onClick={() => handleStepChange(2)}
          >
            2
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
            <span
              className={`rounded-full h-2 w-2 border-[#062147] border-[1px] transition-all duration-300 ease-in-out ${
                step === 3 ? "bg-[#062147]" : "bg-white"
              }`}
            ></span>
          </div>
          <span
            className={`rounded-full flex items-center justify-center w-10 h-10 border-[#062147] border-[1px]  font-jakarta cursor-pointer ${
              step === 3
                ? "bg-[#062147] text-white "
                : "bg-white text-[#062147]"
            }`}
            onClick={() => handleStepChange(3)}
          >
            3
          </span>
        </div>
        <CustomButton
          styles="px-8 py-3 flex items-center justify-center text-white bg-[#062147] hover:bg-[#18A5FF] text-lg"
          title="Regresar"
          handleClick={() => navigate("/marketplace")}
        />
      </section>

      {/** Content Body */}
      <section className="bg-[#FBFBFB] w-full h-full flex flex-col items-center justify-around p-[100px] z-10">
        <h2 className="font-sen font-bold text-[35px] text-[#062147]">
          {" "}
          Verificación de Cuenta{" "}
        </h2>
        {/** Steps display section */}
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}

        <CustomButton
          styles="px-8 py-3 flex items-center justify-center text-white bg-[#062147] text-lg hover:bg-[#18A5FF]"
          title="Continuar"
        />
      </section>

      {/** Content Decoration */}
      <section>
        <img
          src={Bg_logo1_left}
          alt=""
          className="absolute top-[-60px] w-[200px] z-5 rotate-[40deg]"
        />
        <img
          src={Bg_logo2_right}
          alt=""
          className="absolute bottom-[-80px] right-[-10px] w-[200px] z-5 rotate-[35deg]"
        />
      </section>
    </main>
  );
};

export default UserVerification;
