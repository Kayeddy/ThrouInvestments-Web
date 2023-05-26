// Global imports
import React, { useState, useEffect, useRef } from "react";

// Local imports
import {
  CampaignsDisplay,
  MobileNavbar,
  Navbar,
  Sidebar,
  WalletConnectionModal,
} from "../components/marketplace";
import { Bg_logo1_left, Bg_logo2_right, Bg_logo1, Bg_logo2 } from "../assets";
import handleProjectsRetrieval from "../api/projects";
import Footer from "../components/marketplace/Footer";

const Marketplace = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showWalletConnectionModal, setShowWalletConnectionModal] =
    useState(false);
  const [projectsObtained, setProjectsObtained] = useState(false);

  const handleWalletModal = (state) => {
    console.log("Wallet modal state changed");
    setShowWalletConnectionModal(state);
  };

  const { getConvertedProjects, contract, projectsCount } =
    handleProjectsRetrieval();

  const fetchProjects = async () => {
    setLoading(true);
    const fetchedProjects = await getConvertedProjects();
    setProjects(fetchedProjects);
    setLoading(false);
  };

  useEffect(() => {
    if (contract && projectsCount && !projectsObtained) {
      fetchProjects();
      setProjectsObtained(true);
    }
  }, [contract, projectsCount, projectsObtained]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-full h-fit dark:bg-[#01070E] bg-white relative font-sen">
      <img
        src={Bg_logo1_left}
        alt=""
        className="z-0 fixed top-[-300px] left-0 w-[350px] rotate-12 brightness-200 blur-md"
      />
      <img
        src={Bg_logo2}
        alt=""
        className="z-0 fixed bottom-[-400px] left-0 w-[350px] brightness-200 blur-md"
      />
      <img
        src={Bg_logo1}
        alt=""
        className="z-0 fixed bottom-[-400px] right-0 w-[350px] brightness-200 blur-md"
      />
      <img
        src={Bg_logo2_right}
        alt=""
        className="z-0 fixed top-[-300px] right-0 w-[350px] brightness-200 blur-md"
      />

      <div className="flex justify-center items-center md:hidden mx-auto fixed bottom-2 z-20 w-full">
        <MobileNavbar />
      </div>
      <div className="fixed top-0 z-10 w-full h-fit">
        <Navbar handleWalletModal={handleWalletModal} />
      </div>
      <div className="flex absolute bottom-0 z-10 w-full h-fit">
        <Footer />
      </div>

      {showWalletConnectionModal && (
        <WalletConnectionModal handleShowModal={handleWalletModal} />
      )}

      <div className="marketplaceOverlay z-10 sm:-8 p-4 flex flex-row">
        <div className="flex-1 flex flex-col w-[90vw] z-50">
          <CampaignsDisplay
            title="Todos los proyectos"
            campaigns={projects}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
