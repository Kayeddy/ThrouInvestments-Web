import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Sidebar } from "./components";
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages";

const App = () => {
  return (
    <div className="relative sm:p-8 p-4  min-h-screen flex flex-row bg-[#13131a]">
      <div className="pink_gradient" />
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="blue_gradient" />
    </div>
  );
};

export default App;
