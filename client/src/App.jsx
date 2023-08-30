// Global imports
import React from "react";
import { Route, Routes } from "react-router-dom";

// Web 3 necesasry imports
import { createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, polygon } from "wagmi/chains";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// Local imports
import {
  Marketplace,
  Profile,
  Home,
  CampaignDetails,
  AboutUs,
  UserVerification,
  Learn,
} from "./pages";

import WalletModal from "./components/notificationModals/WalletModal";
import AuthModal from "./components/notificationModals/AuthModal";
import { Throu_sm } from "./assets";

const chains = [polygonMumbai];
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "JqVmI1PYlYBnx5ZnyCeU3yPGCsBUTuxG", // or infuraId
    walletConnectProjectId: "9497f7be49f92c5f565bb3bf26ed3205",

    // Required
    appName: "Throu",

    // Optional
    appDescription: "Decentralized Real Estate Crowdfunding platform",
    appUrl: "https://www.throu.app", // your app's url
    appIcon: Throu_sm, // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains: chains,
  })
);

const App = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        options={{
          language: "es-ES",
          walletConnectName: "WalletConnect",
          walletConnectCTA: "both",

          disclaimer: (
            <>
              <p className="font-jakarta text-[14px] text-[#062147] text-center">
                Al conectar tu wallet a nuestra plataforma aceptas nuestros{" "}
                <a href=""> términos de servicio </a> y nuestras{" "}
                <a href=""> políticas de privacidad </a>
              </p>
            </>
          ),
        }}
        customTheme={{
          "--ck-font-family": "Sen",
          "--ck-overlay-background": "rgba(0, 0, 0, 0.5)",
          "--ck-overlay-backdrop-filter": "blur(5px)",
          "--ck-body-color": "#062147",
          "--ck-accent-text-color": "#062147",
          "--ck-primary-button-color": "#062147",
          "--ck-primary-button-hover-color": "#18A5FF",
        }}
        theme="auto"
        mode="light"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/aprende" element={<Learn />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/marketplace/:id" element={<CampaignDetails />} />
          <Route path="/user_verification" element={<UserVerification />} />
        </Routes>

        <WalletModal />
        <AuthModal />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
