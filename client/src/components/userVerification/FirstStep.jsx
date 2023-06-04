import React, { useRef } from "react";

const InputField = React.forwardRef(
  ({ id, icon, placeholder, handleFocus, type }, ref) => {
    return (
      <div
        className={`relative w-full flex flex-row items-center border-b-[1px]`}
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
          className="w-full ml-2 border-transparent sm:px-[20px] font-jakarta outline-none focus:border-transparent focus:ring-0 bg-transparent font-epilogue md:text-black text-white md:placeholder:text-[#4b5264] placeholder:text-white text-[18px] leading-[30px]"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

const FirstStep = () => {
  const ageInputRef = useRef(null);
  const idInputRef = useRef(null);
  const addressInputRef = useRef(null);

  const highlightField = (e) => {
    const inputRefs = [idInputRef, ageInputRef, addressInputRef];

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

  return (
    <div className="flex flex-col items-center justify-start p-4 gap-8 w-full h-[400px] bg-white rounded-md shadow-md">
      <section className="w-full flex gap-2 flex-row items-center justify-around">
        <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
        <p className="font-jakarta text-md text-[#062147] text-center w-[500px]">
          Completación de perfil
        </p>
        <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
      </section>

      {/** User additional information section */}
      <section className="w-full flex flex-col gap-6 items-center justify-start">
        <p className="text-lg text-[#062147] font-jakarta">
          {" "}
          Por favor termina de llenar tus datos personales{" "}
        </p>
        <div className="flex flex-col gap-4 h-fit justify-center items-center w-[30%]">
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
            placeholder="Fecha de nacimiento"
            handleFocus={highlightField}
            type="number"
          />

          <InputField
            ref={addressInputRef}
            id="address-input"
            icon="my_location"
            placeholder="Dirección"
            handleFocus={highlightField}
            type="text"
          />
        </div>
      </section>
    </div>
  );
};

export default FirstStep;
