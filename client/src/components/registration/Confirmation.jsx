import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BsCheckCircle as CheckIcon } from "react-icons/bs";

const Confirmation = ({ type, handleSection }) => {
  const navigate = useNavigate();

  return (
    <div className="md:min-w-[750px] md:w-[80vw] md:max-w-[950px] md:h-[550px] w-screen h-screen bg-white overflow-hidden relative">
      <section className="w-full h-[80%] flex flex-col items-center justify-center gap-4 px-10 mt-[50px] md:mt-0">
        <span className="text-[#18A5FF] text-[150px]">
          <CheckIcon />
        </span>
        <p className="font-sen md:text-[40px] text-[25px] text-[#062147] text-center">
          Tu registro fue exitoso
        </p>
        <p className="font-jakarta md:text-[20px] text-[17px] text-[#062147] text-center">
          Te enviamos un correo de confirmación. Revisa tu bandeja de entrada y
          confirma tu direccion de correo electronico para empezar a Invertir.
        </p>
      </section>
      <section className="w-full flex flex-col items-center justify-center gap-6 px-10">
        <button
          className="w-full h-[60px] md:text-[25px] text-[20px] bg-[#18A5FF] hover:bg-transparent hover:text-[#18A5FF] hover:border-[2px] hover:border-[#18A5FF] text-white flex items-center justify-center font-sen font-bold transition-all ease-in-out duration-100"
          onClick={() => {
            handleSection(1);
          }}
        >
          Iniciar sesión
        </button>

        <p
          className="font-sen text-[20px] text-[#18A5FF] cursor-pointer hover:underline hover:font-semibold"
          onClick={() => {
            navigate("/marketplace");
          }}
        >
          Explorar proyectos
        </p>
      </section>

      <span
        className={`material-symbols-outlined text-[#B5B5B5] absolute top-[100px] md:top-[10%] xl:top-[9%] right-[10%] items-center justify-center cursor-pointer`}
        onClick={() => handleModal(false)}
      >
        cancel
      </span>
    </div>
  );
};

export default Confirmation;
