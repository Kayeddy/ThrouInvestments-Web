import React, { useState, useEffect } from "react";
import SumsubWebSdk from "@sumsub/websdk-react";
import { userConnection } from "../api/server";
import useUserStore from "../context/useUserStore";

function UserVerification() {
  const [sumsubToken, setSumsubToken] = useState("");
  const { generateSumsubToken, getUserWalletStateById } = userConnection();
  const { userProfile } = useUserStore();

  const config = {
    lang: "es", //language of WebSDK texts and comments (ISO 639-1 format)
    email: userProfile.email,
  };

  const options = {
    addViewportTag: false,
    adaptIframeHeight: true,
  };

  // Event handlers
  const handleStepCompleted = (payload) => {
    console.log("stepCompleted", payload);
  };

  const handleError = (error) => {
    console.log("onError", error);
  };

  const handleMessage = (type, payload) => {
    console.log("onMessage", type, payload);
  };
  useEffect(() => {
    startKYCProcess();
  }, []);

  const startKYCProcess = async () => {
    const result = await generateSumsubToken(
      userProfile._id,
      userProfile.token
    );

    setSumsubToken(result.result.token);
  };

  return (
    <div className="overflow-hidden w-screen h-screen flex items-center justify-center py-24">
      <div id="sumsub-container" className="w-full h-full overflow-hidden">
        {sumsubToken && (
          <SumsubWebSdk
            accessToken={sumsubToken}
            expirationHandler={generateSumsubToken}
            config={config}
            options={options}
            onStepCompleted={handleStepCompleted}
            onError={handleError}
            onMessage={handleMessage}
          />
        )}
      </div>
    </div>
  );
}

export default UserVerification;
