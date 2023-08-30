//import { useAddress, useMetamask } from "@thirdweb-dev/react";
//import WalletLink from "walletlink";
//import * as solanaWeb3 from "@solana/web3.js";
import { ethers, formatEther } from "ethers";

import React, { useState, useEffect } from "react";
import Web3 from "web3";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import detectEthereumProvider from "@metamask/detect-provider";

import useUserStore from "../context/useUserStore";
import useWalletStore from "../context/useWalletStore";

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

//Helper functions

const retrieveWalletBalance = async (
  provider,
  walletAddress,
  assignWalletBalanceFunction
) => {
  const balanceInWei = await provider.getBalance(walletAddress);
  const balanceInEther = formatEther(balanceInWei);

  // Get the Ether to USD exchange rate
  const etherToUsdResponse = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const data = await etherToUsdResponse.json();
  const etherToUsd = data.ethereum.usd;

  // Get the Ether to USDT exchange rate

  const usdToUsdtResponse = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd"
  );
  const usdtData = await usdToUsdtResponse.json();
  const usdToUsdt = 1 / usdtData.tether.usd;

  // Convert the USD balance to USDT
  const balanceUsd = balanceInEther * etherToUsd;
  const balanceUsdt = Number((balanceUsd * usdToUsdt).toFixed(3));

  assignWalletBalanceFunction("balance", balanceUsdt);
};

// Prompts the user to switch to Polygon network when connecting wallet to the platform
const switchToPolygonMainnet = async () => {
  // Get the network ID
  const networkId = await window.ethereum.request({ method: "net_version" });

  if (networkId !== 137) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }], // 0x89 is the hexadecimal equivalent of 137
      });
      return true;
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89",
                chainName: "Polygon Mainnet",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
                blockExplorerUrls: ["https://explorer.matic.network/"],
              },
            ],
          });
          return true;
        } catch (error) {
          console.error(error);
        }
      }
    }
  } else {
    console.log("Connected to Polygon mainnet");
  }
};

//-----------------------------------------------------------------------------------------------------------------------------
export const handleWalletConnection = () => {
  const { assignWallet, updateWallet, wallet } = useUserStore();

  const connectMetamask = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask is installed and ready to connect!");

      // Switch to the Polygon network
      const switchedNetwork = await switchToPolygonMainnet();

      if (!switchedNetwork) {
        throw new Error("No se pudo conectar a la red de Polygon.");
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const accountAddress = signer.address;

        assignWallet({
          address: accountAddress,
          name: "Metamask",
          balance: null,
        });

        console.log("Wallet after connection ", wallet);

        await retrieveWalletBalance(provider, accountAddress, updateWallet);
        return true; // Connection has been established
      } catch (error) {
        throw new Error("No se pudo conectar la billetera de Metamask");
      }
    } else {
      console.log("Please install MetaMask!");
      window.open("https://metamask.io/download/", "_blank");
      throw new Error("MetaMask not installed");
    }
  };

  const connectPhantom = async () => {
    if ("phantom" in window) {
      const provider = window.phantom.solana;
      if (provider?.isPhantom) {
        await provider.connect();
        setEthereumProvider(provider);
        console.log(provider.publicKey.toString());
        return provider;
      }
    } else {
      window.open("https://phantom.app/", "_blank");
    }
  };

  const connectCoinbase = async () => {
    await ethereum.enable();
    setEthereumProvider(web3.currentProvider);
    coinbaseWalletProvider
      .getAccounts()
      .then((accounts) => console.log(accounts[0].address)) // This will log the user's account address.
      .catch(console.error);
  };

  const connectWalletConnect = async () => {
    /*
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
    */
  };

  return {
    connectMetamask,
    connectPhantom,
    connectCoinbase,
    connectWalletConnect,
    switchToPolygonMainnet,
  };
};
