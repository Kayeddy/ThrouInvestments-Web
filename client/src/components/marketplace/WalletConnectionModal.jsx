import React, { useEffect } from "react";

import { Coinbase, Metamask, Phantom, WalletConnect } from "../../assets";
import { handleWalletConnection } from "../../api/wallet";
import useStore from "../../context";

const Option = ({ src, alt, handleClick }) => (
  <div
    className="flex flex-col items-center justify-center gap-2 text-[#062147] font-Plus_Jakarta_Sans cursor-pointer group relative"
    onClick={handleClick}
  >
    <div className="w-9 h-9 flex items-center justify-center relative">
      <img
        src={src}
        alt={alt}
        className="w-7 h-7 object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:w-9 group-hover:h-9 transition-all ease-in-out duration-300"
      />
    </div>
    <p className="text-sm absolute top-14 group-hover:top-12 group-hover:text-base group-hover:underline transition-all ease-in-out duration-300">
      {alt}
    </p>
  </div>
);

const WalletConnectionModal = ({ handleShowModal }) => {
  const state = useStore();
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
      handleClick: connectWalletConnect,
    },
  ];

  useEffect(() => {
    if (state.walletAddress) {
      handleShowModal(false);
    }
  }, [state.walletAddress]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 h-[200px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-hidden">
        <div className="w-full h-max text-center py-[10px] px-6">
          <span
            className="material-symbols-outlined text-slate-400 w-full h-fit flex items-start justify-end cursor-pointer"
            onClick={() => handleShowModal(false)}
          >
            cancel
          </span>
          <div className="flex flex-col items-center justify-center gap-10 w-full h-max">
            <p className="text-lg font-sen font-semibold text-[#062147]">
              Selecciona tu wallet de preferencia
            </p>
            <div className="flex flex-row gap-2 justify-around items-center w-full h-max">
              {walletOptions.map((option) => (
                <Option key={option.alt} {...option} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectionModal;
