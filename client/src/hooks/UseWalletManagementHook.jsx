import { useAccount, useNetwork, useBalance } from "wagmi";
import Web3 from "web3";

import useInAppNotificationStore from "../context/useInAppNotificationStore";
import useUserStore from "../context/useUserStore";

export const useWalletManagementHook = () => {
  // Hooks--------------------------------------------------------------
  const { chain, chains } = useNetwork();
  const { address } = useAccount();
  const openModal = useInAppNotificationStore((state) => state.openModal);
  const { updateWallet } = useUserStore();

  const {
    data: walletBalance,
    isError,
    isLoading,
  } = useBalance({
    address: !address ? null : address,
    formatUnits: "ether",
  });

  // Functions----------------------------------------------------------

  const convertWalletBalance = async () => {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USDT"
    );
    const data = await response.json();
    const rate = data.USDT;

    if (!isLoading) {
      const balanceInUsdt = walletBalance.formatted * rate;
      const formattedBalanceToUSDT = parseFloat(balanceInUsdt.toFixed(2));

      updateWallet("balance", formattedBalanceToUSDT);
    }
  };
  // Events-------------------------------------------------------------

  // Detect when a wallet has been connected to the platform
  const connectedAcount = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
      console.log("Connected chain: ", chain.name);
      convertWalletBalance();
      if (isReconnected) convertWalletBalance();
    },
  });

  // Detect when a connected wallet has been disconnected
  const disconnectedAccount = useAccount({
    onDisconnect() {
      console.log("Disconnected");
    },
  });
};
