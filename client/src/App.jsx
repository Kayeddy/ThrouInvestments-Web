import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Marketplace,
  Profile,
  Home,
  CampaignDetails,
  AboutUs,
  Registration,
  Learn,
} from "./pages";

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/aprende" element={<Learn />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/marketplace/:id" element={<CampaignDetails />} />
      </Routes>
    </div>
  );
};

export default App;
