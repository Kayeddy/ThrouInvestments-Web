import React, { useState, useEffect, useRef } from "react";

import {
  Footer,
  Navbar,
  WalletConnectionModal,
} from "../components/marketplace";

import { BsCurrencyEuro, BsPlus as PlusIcon } from "react-icons/bs";
import { FiEdit as EditIcon } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle as InterrogationIcon } from "react-icons/hi";
import { Bg_logo1_left, Bg_logo2_right, Bg_logo1, Bg_logo2 } from "../assets";
import { userProfileOptions } from "../constants";
import {
  Portfolio,
  Movements,
  ProfileInfo,
  Saved,
} from "../components/marketplace/profilePieces";

import useUserStore from "../context/useUserStore";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState("Mis proyectos");
  const [showWalletConnectionModal, setShowWalletConnectionModal] =
    useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const coverInputRef = useRef(null);
  const handleCoverImageUploadClick = (event) => {
    coverInputRef.current.click();
  };

  const userProfile = useUserStore((state) => state.userProfile);
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleWalletModal = (state) => {
    console.log("Wallet modal state changed");
    setShowWalletConnectionModal(state);
  };

  const handleCoverImageChange = (event) => {
    const coverImage = event.target.files[0];

    if (!coverImage.type.startsWith("image/")) {
      alert("Por favor selecciona una imagen válida");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setCoverImage(reader.result);
    };

    reader.readAsDataURL(coverImage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("test", "testItem");
    console.log(localStorage);

    console.log(
      userProfile ? localStorage.getItem("user") : "No storage found"
    );
  }, []);

  return (
    <div className="flex w-full dark:bg-[#01070E] bg-white relative min-h-screen font-sen overflow-y-visible">
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
      <div className="fixed top-0 z-20 w-full h-fit">
        <Navbar handleWalletModal={handleWalletModal} />
      </div>
      <div className="flex absolute bottom-0 z-10 w-full h-fit">
        <Footer />
      </div>

      {showWalletConnectionModal && (
        <WalletConnectionModal handleShowModal={handleWalletModal} />
      )}

      <div className="items-center justify-center p-4 fixed bottom-[50%] right-0 bg-[#062147] hover:bg-[#18A5FF] md:flex hidden z-10 hover:cursor-pointer group hover:p-2">
        <span className="text-white text-[25px] flex flex-row items-center justify-center gap-4">
          <span className="material-symbols-outlined text-white">
            contact_support
          </span>
          <p className="hidden group-hover:block text-[16px]">
            Ayuda y soporte{" "}
          </p>
        </span>
      </div>

      <div className="marketplaceOverlay z-10 flex flex-col gap-24 w-full min-h-screen">
        <div className="flex-1 flex flex-col mx-auto w-full max-w-[1600px]  mt-[90px] md:mt-[100px] md:px-16 min-h-screen font-['Sen']">
          {currentTab != "Editar perfil" ? (
            <div className="flex w-[100vw] md:w-full md:h-[434px] h-[400px] relative">
              {userProfile?.coverImage ? (
                <img
                  src={userProfile.coverImage}
                  alt="cover-image"
                  className="brightness-60 object-cover w-full md:h-[434px] h-[400px]"
                />
              ) : (
                <img
                  src="https://wallpaperaccess.com/full/38582.jpg"
                  alt="alt-cover-image"
                  className="brightness-60 object-cover w-full md:h-[434px] h-[400px]"
                />
              )}

              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
                <div className="flex flex-col items-center justify-center mt-[50px]">
                  {userProfile.profileImage ? (
                    <img
                      src={userProfile.profileImage}
                      alt=""
                      className="rounded-full h-[130px] w-[130px] object-cover"
                    />
                  ) : (
                    <img
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"
                      alt=""
                      className="rounded-full h-[130px] w-[130px] object-cover"
                    />
                  )}
                  <div className="flex flex-col items-center justify-center gap-1 bg-[#01070E80] md:w-[533px] w-[90%] md:h-[184px] h-fit mt-[30px] rounded-lg text-white p-3">
                    <h2 className="md:text-[25px] text-[20px] font-bold">
                      {userProfile?.firstName
                        ? userProfile.firstName
                        : "Edddy Bowie .Jr"}
                    </h2>
                    <p className="md:text-[20px] text-[15px]">
                      {userProfile?.email
                        ? userProfile.email
                        : "djeddyedward@gmail.com"}
                    </p>
                    <p className="text-slate-300 text-[13px] mt-[20px]">
                      Balance
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-center">
                      <span className="flex items-center justify-center p-[0.5px] text-[15px] border-[1.5px] mt-1">
                        <PlusIcon />
                      </span>
                      <h2 className="md:text-[30px] text-[20px] font-bold mr-2">
                        $ 0.00
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-[100vw] md:w-full md:h-[434px] h-[400px] relative">
              {userProfile?.coverImage ? (
                <img
                  src={userProfile.coverImage}
                  alt=""
                  className="brightness-60 object-cover w-full md:h-[434px] h-[400px] brightness-50"
                />
              ) : coverImage ? (
                <img
                  src={coverImage}
                  alt=""
                  className="brightness-60 object-cover w-full md:h-[434px] h-[400px] brightness-50"
                />
              ) : (
                <img
                  src="https://wallpaperaccess.com/full/38582.jpg"
                  alt=""
                  className="brightness-60 object-cover w-full md:h-[434px] h-[400px] brightness-50"
                />
              )}

              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
                <div
                  className="flex flex-row gap-2 items-center justify-center"
                  onClick={handleCoverImageUploadClick}
                >
                  <input
                    type="file"
                    ref={coverInputRef}
                    style={{ display: "none" }}
                    onChange={handleCoverImageChange}
                    accept="image/*"
                  />
                  <p className="text-white hover:cursor-pointer">
                    {" "}
                    Cambiar portada{" "}
                  </p>
                  <span className="text-white">
                    <EditIcon />
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col w-full mt-[20px] py-4 font-jakarta">
            <div className="carousel px-4 md:px-0 flex flex-row gap-[40px] md:gap-16 md:justify-start">
              {userProfileOptions[0].map((item) => (
                <p
                  className={`font-epilogue text-[17px] leading-[22px] cursor-pointer transition ease-in-out duration-200 whitespace-nowrap ${
                    currentTab === item ||
                    (typeof item === "function" && item(27) === currentTab)
                      ? "text-[#18A5FF] border-b-[1px] border-[#18A5FF] hover:text-[#18A5FF] hover:opacity-100 font-semibold"
                      : "hover:text-[#18A5FF] hover:opacity-60 text-black"
                  }`}
                  onClick={() => {
                    if (typeof item === "function") {
                      handleTabChange(item(27));
                    } else {
                      handleTabChange(item);
                    }
                  }}
                  key={item}
                >
                  {typeof item === "function" ? item(27) : item}
                </p>
              ))}
            </div>

            {/**
             * 
             * <div className="px-10 bg-slate-900 w-fit py-2 rounded-md ml-4 relative">
              <div className="sticky">
                <DropdownInput
                  options={userProfileOptions[1]}
                  style="text-white"
                />
              </div>
            </div>
             */}
          </div>

          <div className="w-full h-fit px-4 md:px-0">
            {(currentTab === "Mis proyectos" || currentTab === "Proyectos") && (
              <Portfolio />
            )}
            {(currentTab === "Balance y movimientos" ||
              currentTab === "Movimientos") && <Movements />}
            {currentTab === "Editar perfil" && (
              <ProfileInfo coverImage={coverImage} />
            )}

            {currentTab.includes("27") && <Saved amount="27" />}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
