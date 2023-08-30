import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle as CheckIcon } from "react-icons/bs";

import CryptoPayment from "./Crypto/CryptoPayment";
import CardPayment from "./Card/CardPayment";

const PaymentMethod = ({ showInvestmentModal }) => {
  const [currentTab, setCurrentTab] = useState("Crypto");
  const [userCardConfirmation, setUserCardConfirmation] = useState(false);
  const [userCryptoConfirmation, setUserCryptoConfirmation] = useState(false);
  const [userBuyConfirmation, setUserBuyConfirmation] = useState(false);

  const navigate = useNavigate();

  const paymentTabs = [
    "Crypto",
    "Tarjeta de Crédito/Debito",
    <span
      className="material-symbols-outlined text-[#18A5FF]"
      onClick={() => navigate("/aprende")}
    >
      contact_support
    </span>,
  ];

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleUserRejection = () => {
    if (!userCardConfirmation && currentTab === "Tarjeta de Crédito/Debito") {
      showInvestmentModal(false);
    } else if (!userCryptoConfirmation && currentTab === "Crypto") {
      showInvestmentModal(false);
    } else {
      currentTab === "Crypto"
        ? setUserCryptoConfirmation(false)
        : setUserCardConfirmation(false);
    }
  };
  const handleUserConfirmation = () => {
    if (currentTab === "Crypto" && userCryptoConfirmation) {
      setUserBuyConfirmation(true);
    } else if (currentTab === "Crypto" && !userCryptoConfirmation) {
      setUserCryptoConfirmation(true);
    }

    if (currentTab === "Tarjeta de Crédito/Debito" && userCardConfirmation) {
      setUserBuyConfirmation(true);
    } else if (
      currentTab === "Tarjeta de Crédito/Debito" &&
      !userCardConfirmation
    ) {
      setUserCardConfirmation(true);
    }
  };

  return (
    <main className="w-full h-full marketplaceOverlay overflow-y-auto md:overflow-hidden">
      {!userBuyConfirmation ? (
        <div className="w-full h-full md:h-full p-4 md:p-12 mt-[50px] md:mt-0 flex md:flex-row flex-col gap-6 items-start justify-start ">
          <span
            className="material-symbols-outlined text-slate-400 md:flex hidden items-start justify-start cursor-pointer text-[40px]"
            onClick={handleUserRejection}
          >
            chevron_left
          </span>

          {/* Mobile header */}
          <section className="flex md:hidden flex-row items-center justify-center gap-4 -translate-x-[10px]">
            <span
              className="material-symbols-outlined text-slate-400 flex md:hidden items-start justify-start cursor-pointer text-[40px]"
              onClick={handleUserRejection}
            >
              chevron_left
            </span>
            <div className="flex flex-col items-start justify-start">
              <p className="font-sen text-[25px] font-bold text-[#062147]">
                {userCardConfirmation || userCryptoConfirmation
                  ? "Confirmar pago"
                  : "Método de pago"}
              </p>
              <p className="text-[#062147] font-sen text-[18px]">Shoji</p>
            </div>
          </section>

          <section className="w-full h-full px-2 flex flex-col items-center justify-around md:justify-between gap-[40px] md:gap-10 pb-[60px] md:pb-0">
            <div className="w-full flex flex-col items-center justify-start gap-8">
              {/* Step indicator */}
              <div className="w-full flex flex-row justify-center items-center gap-4 font-jakarta">
                <span className="flex flex-col items-center justify-center gap-1">
                  <span
                    className="material-symbols-outlined text-[#18A5FF] flex items-start justify-start cursor-pointer text-[30px]"
                    onClick={() => handleSection(2)}
                  >
                    done
                  </span>
                  <p className="text-[14px] text-[#18A5FF] opacity-50 hidden md:block">
                    Invertir
                  </p>
                </span>
                <div className="h-[1px] w-full  bg-[#18A5FF]" />

                <span className="flex flex-col items-center justify-center gap-1">
                  <p
                    className={`text-[#18A5FF] font-sen text-[18px] ${
                      userCardConfirmation || userCryptoConfirmation
                        ? "hidden"
                        : ""
                    }`}
                  >
                    2
                  </p>
                  {userCardConfirmation || userCryptoConfirmation ? (
                    <span className="flex flex-col items-center justify-center gap-1">
                      <span
                        className="material-symbols-outlined text-[#18A5FF] flex items-start justify-start cursor-pointer text-[30px]"
                        onClick={() => handleSection(2)}
                      >
                        done
                      </span>
                      <p className="text-[14px] text-[#18A5FF] opacity-50 hidden md:block whitespace-nowrap">
                        Método de pago
                      </p>
                    </span>
                  ) : (
                    <p className="text-[14px] text-[#18A5FF] opacity-50 whitespace-nowrap hidden md:block">
                      Método de pago
                    </p>
                  )}
                </span>
                <div
                  className={`h-[1px] w-full ${
                    userCardConfirmation || userCryptoConfirmation
                      ? "bg-[#18A5FF]"
                      : "bg-[#B5B5B5]"
                  }`}
                />
                <span className="flex flex-col items-center justify-center gap-1">
                  <p
                    className={`font-sen text-[18px] ${
                      userCardConfirmation || userCryptoConfirmation
                        ? "text-[#18A5FF]"
                        : "text-[#B5B5B5]"
                    }`}
                  >
                    3
                  </p>
                  <p
                    className={`text-[14px] opacity-50 hidden md:block ${
                      userCardConfirmation || userCryptoConfirmation
                        ? "text-[#18A5FF]"
                        : "text-[#B5B5B5]"
                    }`}
                  >
                    Confirmación
                  </p>
                </span>
              </div>
              {/* Step tabs */}
              <div
                className={`carousel ${
                  userCardConfirmation || userCryptoConfirmation
                    ? "hidden"
                    : "flex"
                } flex-row w-full justify-between gap-[20px] md:gap-[40px]`}
              >
                {paymentTabs.map((item, index) => (
                  <p
                    className={`text-[18px] leading-[22px] font-jakarta dark:text-white py-3 cursor-pointer transition ease-in-out duration-200 whitespace-nowrap ${
                      currentTab === item
                        ? "text-[#18A5FF] border-b-[1px] border-[#18A5FF] hover:text-[#18A5FF] hover:opacity-100 font-bold"
                        : "hover:text-[#18A5FF] hover:opacity-60 text-[#062147]"
                    }`}
                    onClick={() => handleTabChange(item)}
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Step content */}
            <div className="w-full px-2 -translate-y-[20px]">
              {currentTab == "Crypto" && (
                <CryptoPayment
                  changeTab={handleTabChange}
                  userConfirmation={userCryptoConfirmation}
                  changeUserConfirmation={handleUserRejection}
                />
              )}
              {currentTab == "Tarjeta de Crédito/Debito" && (
                <CardPayment
                  changeTab={handleTabChange}
                  userConfirmation={userCardConfirmation}
                  changeUserConfirmation={handleUserRejection}
                />
              )}
            </div>

            {/* Confirmation & continue button */}
            <div className={`w-full px-2`}>
              <button
                className="w-full h-[60px] md:text-[25px] text-[20px] bg-[#18A5FF] hover:bg-transparent hover:text-[#18A5FF] hover:border-[2px] hover:border-[#18A5FF] text-white flex items-center justify-center font-sen font-bold transition-all ease-in-out duration-100"
                onClick={handleUserConfirmation}
              >
                Continuar
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-between md:p-12 py-[100px] px-4">
          <section className="w-full flex flex-col items-center justify-center gap-4">
            <span className="text-[#18A5FF] text-[150px]">
              <CheckIcon />
            </span>
            <p className="font-sen md:text-[40px] text-[25px] text-[#062147] text-center">
              {" "}
              Inversión Confirmada{" "}
            </p>
            <p className="font-jakarta md:text-[20px] text-[17px] text-[#062147] text-center">
              Tu orden de inversión ha sido aprobada con éxito.
            </p>
          </section>
          <section className="w-full flex flex-col items-center justify-center gap-6">
            <button
              className="w-full h-[60px] md:text-[25px] text-[20px] bg-[#18A5FF] hover:bg-transparent hover:text-[#18A5FF] hover:border-[2px] hover:border-[#18A5FF] text-white flex items-center justify-center font-sen font-bold transition-all ease-in-out duration-100"
              onClick={() => {
                showInvestmentModal(false);
              }}
            >
              Ir a mi inversión
            </button>

            <p
              className="font-sen text-[20px] text-[#18A5FF] cursor-pointer hover:underline hover:font-semibold"
              onClick={() => {
                setUserBuyConfirmation(false);
                setUserCardConfirmation(false);
                setUserCryptoConfirmation(false);
              }}
            >
              Seguir Invirtiendo
            </p>
          </section>
        </div>
      )}
    </main>
  );
};

export default PaymentMethod;
