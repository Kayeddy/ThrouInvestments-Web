import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Marketplace,
  Profile,
  Home,
  CampaignDetails,
  AboutUs,
  UserVerification,
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
        <Route path="/user_verification" element={<UserVerification />} />
      </Routes>
    </div>
  );
};

export default App;
