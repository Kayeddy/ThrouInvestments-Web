import React from "react";
import { handleWalletConnection } from "../../api/wallet";

import {
  Apple,
  Coinbase,
  Facebook,
  Google,
  Metamask,
  Phantom,
  Throu_sm,
  WalletConnect,
  Bg_logo1,
  Bg_logo2,
} from "../../assets";

const Option = ({ src, alt, handleClick }) => (
  <div
    className="h-fit flex flex-col items-center justify-center gap-2 text-[#062147] font-jakarta cursor-pointer group relative"
    onClick={handleClick}
  >
    <div className="w-9 h-9 flex items-center justify-center relative">
      <img
        src={src}
        alt={alt}
        className={`w-10 h-10 object-contain absolute top-0  transition-all ease-in-out duration-300 ${
          alt === "WalletConnect"
            ? "grayscale"
            : "group-hover:w-9 group-hover:h-9"
        }`}
      />
    </div>
    <p
      className={`text-sm font-jakarta font-normal absolute top-12 transition-all ease-in-out duration-300 ${
        alt === "WalletConnect"
          ? "text-slate-500"
          : "group-hover:text-base group-hover:underline group-hover:top-10"
      }`}
    >
      {alt}
    </p>
  </div>
);

const Connect = ({ handleModal, handleSection }) => {
  const {
    connectMetamask,
    connectPhantom,
    connectCoinbase,
    connectWalletConnect,
  } = handleWalletConnection();

  const walletOptions = [
    { src: Metamask, alt: "Metamask", handleClick: connectMetamask },
    { src: Coinbase, alt: "Coinbase", handleClick: connectCoinbase },
    { src: Phantom, alt: "Phantom", handleClick: connectPhantom },
    {
      src: WalletConnect,
      alt: "WalletConnect",
      handleClick: () => {},
    },
  ];

  const socialOptions = [
    { src: Throu_sm, alt: "Throu", handleClick: () => handleSection(3) },
    { src: Google, alt: "Google" },
    { src: Facebook, alt: "Facebook" },
    { src: Apple, alt: "Apple" },
  ];

  return (
    <div className="bg-white md:py-4 px-3 md:px-12 h-full w-full relative overflow-x-hidden overflow-y-auto md:overflow-y-hidden">
      <span
        className="material-symbols-outlined text-slate-400 md:w-full flex items-start justify-end cursor-pointer md:translate-y-[32px] absolute top-4 right-4 md:static max-sm:text-[28px]"
        onClick={() => handleModal(false)}
      >
        cancel
      </span>

      <div className="flex flex-col items-center justify-around h-full pb-2  md:py-0">
        <section className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full px-[7vw] md:px-0 lg:px-12">
          <div className="flex md:hidden flex-col gap-4 items-center justify-center w-full">
            <h2 className="text-[40px] text-[#062147] font-bold leading-[50px] font-sen">
              Conectar
            </h2>
            <p className="text-[#062147] text-[17px] text-center font-jakarta">
              Mauris urna nisi vitae praesent a pulvinar ut erat mattis nibh
              sagittis.
            </p>
          </div>

          <p className="text-[17px] font-semibold text-[#B5B5B5] font-jakarta">
            Conecta tu wallet
          </p>

          <div className="flex flex-row justify-between gap-6 w-full h-max">
            {walletOptions.map((option) => (
              <Option key={option.alt} {...option} />
            ))}
          </div>

          <p className="underline font-jakarta translate-y-4 text-[#062147] text-[18px] cursor-pointer hover:font-semibold hover:text-[#18A5FF] md:block hidden">
            {" "}
            ¿Qué es y cómo conecto una wallet?{" "}
          </p>
        </section>

        <section className="flex flex-col gap-4 w-full px-[7vw] md:px-0 lg:px-12 items-center">
          <p className="font-jakarta text-[#B5B5B5] text-[18px] cursor-pointer pb-2">
            {" "}
            O inicia sesión con{" "}
          </p>

          <div className="flex flex-row justify-between gap-6 w-full h-fit">
            {socialOptions.map((option) => (
              <Option key={option.alt} {...option} />
            ))}
          </div>
        </section>

        <p className="text-[16px] items-center gap-2 md:flex hidden font-jakarta text-[#062147]">
          ¿Ya tienes cuenta?{" "}
          <span
            className="inline underline font-normal cursor-pointer hover:text-[#18A5FF] hover:font-bold"
            onClick={() => handleSection(1)}
          >
            Iniciar sesión
          </span>
        </p>

        <div className="flex md:hidden flex-col items-center justify-center">
          <p className="text-[#062147] text-[18px] font-jakarta">
            ¿Ya tienes cuenta?
          </p>
          <p
            className="text-[#18A5FF] text-[20px] underline"
            onClick={() => handleSection(1)}
          >
            Iniciar sesión
          </p>
        </div>
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

export default Connect;
