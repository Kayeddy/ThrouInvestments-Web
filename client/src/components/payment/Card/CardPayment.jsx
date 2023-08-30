import React, { useState, useRef } from "react";

const InputField = React.forwardRef(
  (
    {
      id,
      icon,
      placeholder,
      handleFocus,
      handleBlur,
      type,
      additionalPlaceholder,
      alwaysOnTop,
      desktop,
    },
    ref
  ) => {
    const handleInputFocus = (e) => {
      handleFocus(e, alwaysOnTop);
      ref.current.focus();
    };

    const handleInputBlur = (e) => {
      handleBlur(e, alwaysOnTop);
      ref.current.focus();
    };

    return (
      <div
        className={`relative w-full flex flex-row items-center gap-4 border-b`}
        id={`${id}-container`}
      >
        <span
          className="material-symbols-outlined cursor-pointer text-[#062147]"
          id={`${id}-icon`}
        >
          {icon}
        </span>
        <p
          className={`text-slate-500 font-jakarta whitespace-nowrap ${
            !desktop ? "absolute" : "static"
          } transform transition-transform duration-300 ease-in-out ${
            alwaysOnTop
              ? "top-[-20px] left-[10px] text-[14px]"
              : `${icon ? "left-[30px]" : "left-0"}  text-[20px]`
          }`}
          onClick={handleInputFocus}
        >
          {placeholder}
        </p>
        <input
          ref={ref}
          id={id}
          type={type}
          onFocus={(e) => handleInputFocus(e, alwaysOnTop)}
          onBlur={(e) => handleBlur(e, alwaysOnTop)}
          className="w-full font-jakarta p-0 py-2 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-[#062147] placeholder:text-[#B5B5B5] text-[18px] leading-[30px] relative"
          placeholder={additionalPlaceholder}
          required
        />
      </div>
    );
  }
);

const CardPayment = ({ userConfirmation, changeUserConfirmation }) => {
  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardExpirationRef = useRef(null);
  const cardPasswordRef = useRef(null);

  const mobileCardNumberRef = useRef(null);
  const mobileCardNameRef = useRef(null);
  const mobileCardExpirationRef = useRef(null);
  const mobileCardPasswordRef = useRef(null);

  const highlightField = (e, alwaysOntop) => {
    const desktopInputRefs = [
      cardNumberRef,
      cardNameRef,
      cardExpirationRef,
      cardPasswordRef,
    ];

    const mobileInputRefs = [
      mobileCardNumberRef,
      mobileCardNameRef,
      mobileCardExpirationRef,
      mobileCardPasswordRef,
    ];

    desktopInputRefs.forEach((ref) => {
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

    mobileInputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");
      const placeholder = container.querySelector("p");

      if (ref.current === e.target) {
        icon.style.color = "#18A5FF";
        container.style.borderBottom = "2px solid #18A5FF";
        if (!alwaysOntop) {
          placeholder.classList.add(
            "transform",
            "translate-y-[-20px]",
            "translate-x-[-30px]",
            "scale-75",
            "transition-transform",
            "duration-300",
            "ease-in-out",
            "active"
          );
        }
      } else {
        if (!ref.current.value) {
          icon.style.color = "#B5B5B5";
          container.style.borderBottom = "1px solid #B5B5B5";
          if (!alwaysOntop) {
            placeholder.classList.remove(
              "transform",
              "translate-y-[-20px]",
              "translate-x-[-30px]",
              "scale-75",
              "transition-transform",
              "duration-300",
              "ease-in-out",
              "active"
            );
          }
        }
      }
    });
  };

  const unfocusField = (e, alwaysOnTop) => {
    const desktopInputRefs = [
      cardNumberRef,
      cardNameRef,
      cardExpirationRef,
      cardPasswordRef,
    ];

    const mobileInputRefs = [
      mobileCardNumberRef,
      mobileCardNameRef,
      mobileCardExpirationRef,
      mobileCardPasswordRef,
    ];

    desktopInputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");

      icon.style.color = "#B5B5B5";
      container.style.borderBottom = "1px solid #B5B5B5";
      ref.current.blur();
    });

    mobileInputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");
      const placeholder = container.querySelector("p");

      if (!ref.current.value) {
        icon.style.color = "#B5B5B5";
        container.style.borderBottom = "1px solid #B5B5B5";
        if (!alwaysOnTop) {
          placeholder.classList.remove(
            "transform",
            "translate-y-[-20px]",
            "translate-x-[-30px]",
            "scale-75",
            "transition-transform",
            "duration-300",
            "ease-in-out",
            "active"
          );
        }
      }
      ref.current.blur();
    });
  };

  return !userConfirmation ? (
    <>
      {/* Desktop inputs */}
      <div className="hidden w-full md:flex flex-col items-center md:gap-8 gap-10 md:translate-y-[10px]">
        <InputField
          ref={cardNumberRef}
          id="Card-Number-input"
          icon="credit_card"
          placeholder="Número de tarjeta"
          handleFocus={highlightField}
          handleBlur={unfocusField}
          type="text"
          desktop={true}
        />
        <InputField
          ref={cardNameRef}
          id="Card-name-input"
          placeholder="Nombre en la tarjeta"
          handleFocus={highlightField}
          handleBlur={unfocusField}
          type="text"
          desktop={true}
        />
        <div className="w-full flex flex-row items-center justify-between gap-4">
          <InputField
            ref={cardExpirationRef}
            id="Card-expiration-input"
            placeholder="Fecha de vencimiento"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            type="text"
            placeholderStyle="w-[450px]"
            additionalPlaceholder="01/23"
            desktop={true}
          />
          <InputField
            ref={cardPasswordRef}
            id="Card-password-input"
            placeholder="CCV"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            type="number"
            additionalPlaceholder="000"
            desktop={true}
          />
        </div>
      </div>

      {/* Mobile inputs */}
      <div className="md:hidden w-full flex flex-col items-center md:gap-8 gap-10 md:translate-y-[10px]">
        <InputField
          ref={mobileCardNumberRef}
          id="Mobile-card-Number-input"
          icon="credit_card"
          placeholder="Número de tarjeta"
          handleFocus={highlightField}
          handleBlur={unfocusField}
          type="password"
          isMobile={true}
        />
        <InputField
          ref={mobileCardNameRef}
          id="Mobile-card-name-input"
          placeholder="Nombre en la tarjeta"
          handleFocus={highlightField}
          handleBlur={unfocusField}
          type="text"
          isMobile={true}
        />
        <div className="w-full flex flex-row items-center justify-between gap-4 translate-y-[20px] md:translate-y-0">
          <InputField
            ref={mobileCardExpirationRef}
            id="Mobile-card-expiration-input"
            placeholder="Fecha de vencimiento"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            type="text"
            placeholderStyle="w-[450px]"
            additionalPlaceholder="01/23"
            isMobile={true}
            alwaysOnTop={true}
          />
          <InputField
            ref={mobileCardPasswordRef}
            id="Mobile-card-password-input"
            placeholder="CVV"
            handleFocus={highlightField}
            handleBlur={unfocusField}
            type="number"
            additionalPlaceholder="000"
            isMobile={true}
            alwaysOnTop={true}
          />
        </div>
      </div>
    </>
  ) : (
    <div className="w-full flex flex-col items-center gap-8">
      <p className="text-[30px] font-sen font-bold text-[#062147] md:block hidden">
        Resumen del pedido
      </p>

      <p className="text-[25px] md:text-[40px] font-sen font-bold text-[#062147] md:hidden">
        23 Tokens Shoji
      </p>

      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer text-[#062147]">
            credit_card
          </span>
          <div className="flex md:flex-row flex-col md:gap-4 md:items-center items-start">
            <p className="md:text-[20px] text-[12px] text-jakarta text-slate-400">
              Número de tarjeta
            </p>
            <p className="text-[#062147] text-[17px] md:text-[20px] font-jakarta font-bold">
              number
            </p>
          </div>
        </div>

        <p
          className="cursor-pointer hover:underline hover:font-semibold text-[20px] font-sen text-[#18A5FF]"
          onClick={() => changeUserConfirmation(false)}
        >
          cambiar
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147]">
            Valor de Inversión ($USDT)
          </p>
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147] font-semibold">
            $35.700,14
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147]">
            Valor total de tokens adquiridos
          </p>
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147]">
            23
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147]">
            Valor de transacción (0.8%)
          </p>
          <p className="font-jakarta md:text-[20px] text-[14px] text-[#062147] font-semibold">
            $6.069
          </p>
        </div>

        <div className="w-full h-[0.5px] bg-[#B5B5B5]" />

        <div className="flex flex-row items-center justify-between w-full">
          <p className="font-jakarta md:text-[20px] text-[20px] text-[#8C06B1]">
            Importe total
          </p>
          <p className="font-jakarta md:text-[20px] text-[20px] text-[#062147] font-semibold">
            $41.769
            <span className="inline text-[14px] font-normal md:font--bold ml-[3px]">
              USDT
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
