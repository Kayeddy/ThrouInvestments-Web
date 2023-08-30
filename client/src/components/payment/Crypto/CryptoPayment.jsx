import React from "react";
import { Metamask, Coinbase, WalletConnect } from "../../../assets";

const Option = ({ src, alt, handleClick }) => (
  <div
    className="md:h-[150px] md:w-[150px] w-[100px] h-[100px] p-2 flex flex-col items-center justify-center gap-2 text-[#062147] hover:bg-[#18A5FF] hover:text-white font-jakarta cursor-pointer relative transition-all ease-in-out duration-100"
    onClick={handleClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-[40px] h-[40px] object-contain transition-all ease-in-out duration-100"
    />
    <p className="font-jakarta text-[16px] group-hover:underline">{alt}</p>
  </div>
);

const CryptoPayment = ({ userConfirmation, changeUserConfirmation }) => {
  const walletOptions = [
    { src: Metamask, alt: "Metamask", handleClick: () => {} },
    { src: Coinbase, alt: "Coinbase", handleClick: () => {} },
    {
      src: WalletConnect,
      alt: "WalletConnect",
      handleClick: () => {},
    },
  ];
  return !userConfirmation ? (
    <div className="w-full flex md:flex-row flex-col gap-4 md:items-center items-start md:justify-between justify-around">
      {walletOptions.map((option) => (
        <Option key={option.alt} {...option} />
      ))}
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <p className="text-[30px] font-sen font-bold text-[#062147] md:block hidden">
        Resumen del pedido
      </p>

      <p className="text-[25px] md:text-[40px] font-sen font-bold text-[#062147] md:hidden">
        23 Tokens Shoji
      </p>

      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer text-[#062147]">
            account_balance_wallet
          </span>
          <div className="flex md:flex-row flex-col md:gap-4 md:items-center items-start">
            <p className="md:text-[20px] text-[12px] text-jakarta text-slate-400">
              Wallet ID
            </p>
            <p className="text-[#062147] text-[17px] md:text-[20px] font-jakarta font-bold">
              Wallet ID number
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

export default CryptoPayment;
