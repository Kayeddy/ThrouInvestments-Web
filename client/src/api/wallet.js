//import { useAddress, useMetamask } from "@thirdweb-dev/react";
//import WalletLink from "walletlink";
//import * as solanaWeb3 from "@solana/web3.js";
//import { ethers } from "ethers";

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import detectEthereumProvider from "@metamask/detect-provider";

import useStore from "../context";

//Wallet SDK set-up

// Initialize Coinbase Wallet SDK
const coinbaseWalletProvider = new CoinbaseWalletSDK({
  appName: "Your App Name",
  appLogoUrl: "https://yourwebsite.com/logo.png",
  darkMode: false,
});

// Infura endpoint
const infuraUrl =
  "https://goerli.infura.io/v3/bf43af496c4b48fb84149278fc679c3f";

// Chain ID for Ethereum Mainnet
const chainId = 5;

// Initialize a Web3 Provider object
const ethereum = coinbaseWalletProvider.makeWeb3Provider(infuraUrl, chainId);

// Initialize a Web3 object
const web3 = new Web3(ethereum);
//-----------------------------------------------------------------------------------------------------------------------------

export const handleWalletConnection = () => {
  const [provider, setProvider] = useState(null);
  const state = useStore();
  //const address = useAddress();
  //const connectMetamask = useMetamask();

  const connectMetamask = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      // Check if this is Metamask
      if (provider.isMetaMask) {
        console.log("MetaMask is installed!");

        // Now we try to get the user account.
        try {
          const accounts = await provider.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts[0]); // This will log the user's account address.
          setProvider(provider);
          state.assignWalletAddress(provider);

          // Set up the listener for disconnects
          provider.on("accountsChanged", (accounts) => {
            if (!accounts.length) {
              // User has disconnected their wallet
              state.assignWalletAddress(null);
              console.log("User has disconnected their wallet");
              // Add your logic here
            }
          });
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.log("Please install MetaMask!");
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  const connectPhantom = async () => {
    if ("phantom" in window) {
      const provider = window.phantom.solana;
      if (provider?.isPhantom) {
        await provider.connect();
        setProvider(provider);
        console.log(provider.publicKey.toString());
        return provider;
      }
    } else {
      window.open("https://phantom.app/", "_blank");
    }
  };

  const connectCoinbase = async () => {
    await ethereum.enable();
    setProvider(web3.currentProvider);
    coinbaseWalletProvider
      .getAccounts()
      .then((accounts) => console.log(accounts[0].address)) // This will log the user's account address.
      .catch(console.error);
  };

  const connectWalletConnect = async () => {
    // Create a new instance of WalletConnectProvider each time
    const walletConnectProvider = new WalletConnectProvider({
      infuraId: "https://goerli.infura.io/v3/bf43af496c4b48fb84149278fc679c3f", // Get this from https://infura.io
    });

    try {
      await walletConnectProvider.enable();
      const web3 = new Web3(walletConnectProvider);
      setProvider(web3.currentProvider);
      console.log(walletConnectProvider.accounts[0]);
    } catch (error) {
      if (error.message === "User closed modal") {
        console.log("User closed the WalletConnect modal");
        // Disconnect the WalletConnectProvider
        await walletConnectProvider.disconnect();
      } else {
        console.error(error);
      }
    }
  };

  return {
    connectMetamask,
    connectPhantom,
    connectCoinbase,
    connectWalletConnect,
  };
};
