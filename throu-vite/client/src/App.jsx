import React from "react";
import { Route, Routes } from "react-router-dom";

import { Marketplace, Profile, Home, CampaignDetails, AboutUs } from "./pages";

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/marketplace/:id" element={<CampaignDetails />} />
      </Routes>
    </div>
  );
};

export default App;
