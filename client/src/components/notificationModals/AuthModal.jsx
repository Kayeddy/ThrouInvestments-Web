// Global imports
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiError as ErrorIcon } from "react-icons/bi";

// Local imports
import useInAppNotificationStore from "../../context/useInAppNotificationStore";
import useUserStore from "../../context/useUserStore";
import { handleWalletConnection } from "../../api/wallet";
import useScrollLock from "../../hooks/useScrollLockHook";
import { Main } from "../registration";

// Framer motion config imports
import { loadingAnimationVariants, modalAnimation } from "../../config/motion";

// Assets imports
import { Throu_l, Throu_sm } from "../../assets";

const FirstTimeWalletConnectionModal = ({
  closeModal,
  userProfile,
  data,
  wallet,
  walletStatus,
  updateWallet,
}) => {
  const [statusMessage, setStatusMessage] = useState(null);

  const { connectMetamask } = handleWalletConnection();

  // Check if the user is alredy logged in (or not) and verifies his wallet address against the wallet address he is trying to connect with
  const userWalletValidation = async () => {
    if (userProfile) {
      // Get the user information and compare his registered wallet address (if any) with the wallet address he is trying to connect with.
      if (userProfile.wallet) {
        // Compare wallets
      } else {
        // Update the user's wallet address in the database, update the wallet status in the local store and close the modal
        if (walletProvider === "metamask") {
          // updateWalletFunction();
          updateWallet("status", "connected");
          closeModal();
        }
      }
    } else {
      // Save the wallet details temporarily to the store and launch the second step of the registration
    }
  };

  const handleConnection = async () => {
    if (data.origin === "walletModal") {
      if (data.walletProvider === "metamask" && walletStatus !== "connecting") {
        try {
          updateWallet("status", "connecting");
          const result = await connectMetamask();

          if (result && window.ethereum.selectedAddress) {
            closeModal("wallet");
            updateWallet("status", "connected");
          } else {
            updateWallet("status", "idle");
          }
        } catch (error) {
          console.log(error.message);
          setStatusMessage(error.message);
          updateWallet("status", "error");
        }
      }
      // Handle other wallet provider connections here
    } else {
      // handle registration modal event here
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 gap-8 w-[500px] h-[450px] overflow-hidden relative`}
    >
      <img
        src={Throu_l}
        alt="Throu_logo_desktop"
        className="w-[70%] h-[70px] object-fit md:block hidden"
      />
      <img
        src={Throu_sm}
        alt="Throu_logo_mobile"
        className="w-[100px] h-[80px] object-contain md:hidden"
      />
      <h2 className="font-sen text-[25px] text-[#062147] text-center">
        Te damos la bienvenida a Throu
      </h2>
      <p className="font-jakarta text-[18px] text-[#062147] text-center">
        Al conectar tu wallet por primera vez a nuestra plataforma aceptas
        nuestros{" "}
        <a href="" className="underline">
          {" "}
          términos de servicio{" "}
        </a>{" "}
        y nuestras{" "}
        <a href="" className="underline">
          {" "}
          políticas de privacidad{" "}
        </a>
      </p>

      <div className="flex flex-row w-full items-center justify-around gap-6">
        <div
          className={`flex items-center justify-center text-slate-400 dark:text-white ${
            walletStatus === "connecting"
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } border-[#062147] hover:text-[#d0342c] transition-all duration-200 ease-in-out`}
          onClick={() => {
            if (walletStatus !== "connecting") {
              closeModal();
              updateWallet("status", "idle");
            } else {
              return;
            }
          }}
        >
          <p className="font-sen text-[18px]">Cancelar</p>
        </div>

        <div
          className={`flex items-center justify-center p-3 transition-all duration-200 ease-in-out rounded-md text-white bg-[#062147] dark:text-white ${
            walletStatus === "connecting"
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } hover:bg-[#18A5FF]`}
          onClick={() => {
            if (walletStatus !== "connecting") {
              handleConnection();
            } else {
              return;
            }
          }}
        >
          <p className="font-sen text-[18px] text-center">Aceptar & firmar</p>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-start">
        {walletStatus === "connecting" && (
          <>
            <div className="py-2 flex items-center justify-start">
              <motion.div
                variants={loadingAnimationVariants}
                initial="start"
                animate="end"
                className="border-2 border-t-2 border-gray-500 rounded-full w-5 h-5 border-t-blue-500 animate-spin"
              />
            </div>
            <p className="text-[14px] text-[#062147]">
              {" "}
              Completa el proceso de conexion en la interfaz emergente{" "}
            </p>
          </>
        )}
        {walletStatus === "error" && (
          <>
            <span className="animate-pulse text-[18px] text-[#d0342c]">
              <ErrorIcon />
            </span>
            <p className="text-[14px] text-[#d0342c]"> {statusMessage} </p>
          </>
        )}
      </div>
    </div>
  );
};

const AuthModal = () => {
  const { isOpen, type, data } = useInAppNotificationStore(
    (state) => state.modals.authentication
  );
  const { lockScroll, unlockScroll } = useScrollLock();

  const openModal = useInAppNotificationStore((state) => state.openModal);

  const closeModal = () =>
    useInAppNotificationStore.getState().closeModal("authentication");

  const { wallet, updateWallet, userProfile } = useUserStore();

  if (!isOpen) {
    unlockScroll();
    return null;
  } else {
    lockScroll();
  }

  let content;
  switch (type) {
    case "authFirstTimeWalletConnection":
      content = (
        <FirstTimeWalletConnectionModal
          closeModal={closeModal}
          data={data}
          userProfile={userProfile}
          updateWallet={updateWallet}
          walletStatus={wallet.status}
        />
      );
      break;

    case "generalAuthConnection":
      content = <Main handleModal={closeModal} />;
      break;
    // add more cases as needed
    default:
      content = null;
  }

  return (
    <AnimatePresence wait>
      <div
        className="notification-modal-overlay"
        onClick={(e) => {
          if (wallet.status !== "connecting") {
            closeModal(e);
            if (wallet.status === "error") {
              updateWallet("status", "idle");
            }
          }
        }}
      >
        <motion.div
          className={`notification-modal ${
            type !== "generalAuthConnection" &&
            "border-[2px] border-[#062147] rounded-[10px]"
          }`}
          onClick={(e) => e.stopPropagation()}
          {...modalAnimation}
        >
          {content}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
