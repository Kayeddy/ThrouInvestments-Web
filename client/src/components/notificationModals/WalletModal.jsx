// Global imports
import React, { useState } from "react";
import { VscDebugDisconnect as DisconnectIcon } from "react-icons/vsc";
import { BiError as ErrorIcon } from "react-icons/bi";
import { BiTransferAlt as ChangeIcon } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

// Local imports
import useInAppNotificationStore from "../../context/useInAppNotificationStore";
import useUserStore from "../../context/useUserStore";
import { handleWalletConnection } from "../../api/wallet";
import useScrollLock from "../../hooks/useScrollLockHook";

// Assets imports
import { Coinbase, Metamask, Phantom, WalletConnect } from "../../assets";

// Framer motion config imports
import { loadingAnimationVariants, modalAnimation } from "../../config/motion";

const Option = ({ src, alt, handleClick, walletStatus }) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 text-[#062147] font-jakarta ${
      walletStatus === "connecting" ? "cursor-not-allowed" : "cursor-pointer"
    } group relative`}
    onClick={() => {
      if (walletStatus != "connecting") handleClick();
    }}
  >
    <div className="w-9 h-9 flex items-center justify-center relative">
      <img
        src={src}
        alt={alt}
        className="w-7 h-7 object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:w-9 group-hover:h-9 transition-all ease-in-out duration-300"
      />
    </div>
    <p className="text-sm absolute md:top-14 top-10 group-hover:top-12 group-hover:text-base group-hover:underline transition-all ease-in-out duration-300">
      {alt}
    </p>
  </div>
);

const DisconnectionModal = ({ closeModal, openModal }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8 w-full h-full relative">
      <span className="absolute z-[-10] text-[30px] top-0 right-0">
        <DisconnectIcon />
      </span>
      <h2 className="font-sen text-[25px] text-[#062147]">
        {" "}
        Desconexión de wallet{" "}
      </h2>
      <p className="font-jakarta text-[18px] text-[#062147]">
        Recuerda que para invertir es importante que tengas tu wallet conectada,
        si no, no podrás realizar adecuadamente tu inversión.
      </p>

      <div className="flex flex-row w-full items-center justify-around gap-6">
        <div
          className="flex text-center items-center justify-center text-slate-400 dark:text-white cursor-pointer border-[#062147] hover:text-[#d0342c] transition-all duration-200 ease-in-out"
          onClick={closeModal}
        >
          <p className="font-sen text-[18px]">Ahora no</p>
        </div>

        <div
          className="flex items-center justify-center text-center p-3 transition-all duration-200 ease-in-out rounded-md text-white bg-[#062147] dark:text-white cursor-pointer hover:bg-[#18A5FF]"
          onClick={() => {
            closeModal();
            openModal("wallet", "walletConnection");
          }}
        >
          <p className="font-sen text-[18px]">Volver a conectar</p>
        </div>
      </div>
    </div>
  );
};
const ConnectionModal = ({
  closeModal,
  openModal,
  walletStatus,
  updateWallet,
  userProfile,
}) => {
  const [statusMessage, setStatusMessage] = useState(null);

  const {
    connectMetamask,
    connectPhantom,
    connectCoinbase,
    connectWalletConnect,
  } = handleWalletConnection();

  const walletOptions = [
    {
      src: Metamask,
      alt: "Metamask",
      handleClick: async () => {
        if (userProfile.wallet) {
          if (walletStatus !== "connecting") {
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
        } else {
          closeModal();
          openModal("authentication", "authFirstTimeWalletConnection", {
            walletProvider: "metamask",
            origin: "walletModal",
          });
        }
      },
    },
    {
      src: Coinbase,
      alt: "Coinbase",
      handleClick: () => {
        if (wallet.status !== "connecting") {
          connectCoinbase();
        }
      },
    },
    {
      src: Phantom,
      alt: "Phantom",
      handleClick: () => {
        if (wallet.status !== "connecting") {
          connectPhantom();
        }
      },
    },
    {
      src: WalletConnect,
      alt: "WalletConnect",
      handleClick: () => {
        if (wallet.status !== "connecting") {
          connectWalletConnect();
        }
      },
    },
  ];

  return (
    <div className="w-full md:w-[500px] h-full flex md:items-center justify-center">
      <div
        className={`w-full overflow-hidden  ${
          walletStatus === "connecting" || walletStatus === "error"
            ? "md:h-[250px] h-[600px]"
            : "md:h-[200px] h-[550px]"
        }`}
      >
        <div className="w-full h-full text-center py-[10px] px-6">
          <span
            className={`material-symbols-outlined text-slate-400 w-full h-fit flex items-start justify-end ${
              walletStatus === "connecting"
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => {
              if (walletStatus !== "connecting") {
                closeModal();
                updateWallet("status", "idle");
              } else {
                return;
              }
            }}
          >
            cancel
          </span>
          <div className="flex flex-col items-center justify-center gap-10 w-full md:h-max h-full">
            <p className="text-lg font-sen font-semibold text-[#062147]">
              Selecciona tu wallet de preferencia
            </p>
            <div className="flex md:flex-row flex-col md:gap-2 gap-16 justify-around items-center w-full h-fit">
              {walletOptions.map((option) => (
                <Option
                  key={option.alt}
                  walletStatus={walletStatus}
                  {...option}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center justify-start translate-y-[80px]">
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
      </div>
    </div>
  );
};

const ChainChangeModal = ({ closeModal, updateWallet }) => {
  const [networkChangeApproved, setNetworkChangeApproved] = useState(true);
  const [loading, setLoading] = useState(false);

  const { switchToPolygonMainnet } = handleWalletConnection();

  const handleNetworkChange = async () => {
    setLoading(true);
    updateWallet("status", "connecting");

    const changeRequestResult = await switchToPolygonMainnet();
    if (changeRequestResult) {
      setLoading(false);
      setNetworkChangeApproved(true);
      updateWallet("status", "connected");
      closeModal();
    } else {
      setLoading(false);
      setNetworkChangeApproved(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8 w-full md:h-[320px] h-[500px] relative">
      <span className="absolute z-[-10] text-[30px] top-0 right-0">
        <ChangeIcon />
      </span>
      <h2 className="font-sen text-[25px] text-[#062147]"> Cambio de red </h2>
      <p className="font-jakarta text-[18px] text-[#062147] text-center md:text-left">
        Cambiaste de red recientemente. Te recordamos que para poder invertir en
        nuestra plataforma es necesario que estés conectado a la red de Polygon.
      </p>

      <div className="flex flex-row w-full items-center justify-around gap-6">
        <div
          className={`flex items-center justify-center text-slate-400 dark:text-white ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          } border-[#062147] hover:text-[#d0342c] transition-all duration-200 ease-in-out`}
          onClick={() => {
            if (!loading) {
              closeModal();
            }
          }}
        >
          <p className="font-sen text-[18px] text-center">Ahora no</p>
        </div>

        <div
          className={`flex items-center justify-center p-3 transition-all duration-200 ease-in-out rounded-md text-white bg-[#062147] dark:text-white text-center ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          } hover:bg-[#18A5FF]`}
          onClick={() => {
            if (!loading) {
              handleNetworkChange();
            }
          }}
        >
          <p className="font-sen text-[18px]">Conectarse a Polygon</p>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-start">
        {loading && (
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
              Completa el proceso de cambio de red en la interfaz emergente{" "}
            </p>
          </>
        )}
        {!loading && !networkChangeApproved && (
          <>
            <span className="animate-pulse text-[18px] text-[#d0342c]">
              <ErrorIcon />
            </span>
            <p className="text-[14px] text-[#d0342c]">
              {" "}
              No se pudo cambiar a la Red de Polygon{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const WalletModal = () => {
  const { isOpen, type, data } = useInAppNotificationStore(
    (state) => state.modals.wallet
  );
  const { lockScroll, unlockScroll } = useScrollLock();

  const openModal = useInAppNotificationStore((state) => state.openModal);
  const closeModal = () =>
    useInAppNotificationStore.getState().closeModal("wallet");

  const { wallet, updateWallet, userProfile } = useUserStore();

  if (!isOpen) {
    unlockScroll();
    return null;
  } else {
    lockScroll();
  }

  let content;
  switch (type) {
    case "walletConnection":
      content = (
        <ConnectionModal
          closeModal={closeModal}
          walletStatus={wallet.status}
          updateWallet={updateWallet}
          openModal={openModal}
          userProfile={userProfile}
        />
      );
      break;
    case "walletDisconnection":
      content = (
        <DisconnectionModal closeModal={closeModal} openModal={openModal} />
      );
      break;
    case "walletChainChange":
      content = (
        <ChainChangeModal closeModal={closeModal} updateWallet={updateWallet} />
      );
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
          className="notification-modal rounded-[10px] border-[2px] border-[#062147]"
          onClick={(e) => e.stopPropagation()}
          {...modalAnimation}
        >
          {content}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WalletModal;
