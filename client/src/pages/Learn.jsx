import React, { useState } from "react";
import { Info } from "../components/landingPage/utility_components";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar, Footer, Overlay } from "../components/landingPage";
import { Main } from "../components/registration";

const Learn = () => {
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
  const [readingMode, setReadingMode] = useState(false);

  const learnTabs = [
    {
      title: "¿Qué es Throu?",
      tab: 0,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            Te damos la bienvenida a Throu
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Pellentesque id tristique gravida pellentesque arcu. Nibh faucibus
            in mollis platea dolor cras pulvinar laoreet quam. Vel leo dictum
            pretium cras ac. Quis feugiat viverra id nibh tincidunt tortor.
            Molestie arcu erat tellus senectus amet proin elit. Blandit turpis
            dignissim adipiscing id tempor urna. Id auctor in non netus nunc
            vitae sit amet est. At morbi ornare facilisis accumsan sollicitudin
            nam libero lacus. Lectus amet tristique sed in. Euismod nec volutpat
            a ut dolor ipsum. Ornare nunc integer dictum interdum neque
            adipiscing egestas est morbi. Augue amet id quisque velit eleifend
            vitae pulvinar felis amet.
          </p>
        </div>
      ),
    },
    {
      title: "¿Por qué lo hacemos?",
      order: 1,
    },
    {
      title: "¿Cómo me registro?",
      order: 2,
    },
    {
      title: "¿Cómo conectar mi Wallet?",
      order: 3,
    },
    {
      title: "¿Cómo comprar tokens?",
      order: 4,
    },
    {
      title: "¿Cómo gano dinero?",
      order: 5,
    },
    {
      title: "¿Puedo crear un proyecto?",
      order: 6,
    },
    {
      title: "Glosario",
      order: 7,
    },
  ];

  const [currentTab, setCurrentTab] = useState(learnTabs[0]);

  const handleRegistrationModal = (state) => {
    setToggleRegistrationModal(state);
  };

  const Tabs = () => (
    <motion.div className="flex flex-col items-start gap-0 justify-center w-full md:w-[300px] md:mt-0 mt-4">
      {learnTabs.map((tab) => (
        <p
          className={`${
            currentTab?.order === tab.order
              ? "border-l-2 border-[#062147] pl-4 text-[#062147] font-bold"
              : "text-[#B5B5B5]"
          }  text-[20px] py-3 font-jakarta`}
          onClick={() => {
            setCurrentTab(tab);
            setReadingMode(true);
          }}
        >
          {tab.title}
        </p>
      ))}
    </motion.div>
  );

  const DesktopContent = () => (
    <>
      <div className="flex flex-row items-start justify-start gap-12">
        <div className="w-[300px]">
          <Tabs />
        </div>
        <div>
          <p className="text-[14px] font-jakarta text-[#062147]">
            Aprende {">"} {currentTab.title}
          </p>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex flex-col items-start justify-start gap-8 mt-4"
          >
            {currentTab.content}
          </motion.div>
        </div>
      </div>
    </>
  );

  const MobileContent = () => (
    <>
      {!readingMode ? (
        <div className="w-full h-fit flex flex-col gap-3">
          <p className="text-[14px] font-jakarta text-[#062147]">
            Aprende {">"} Lecciones
          </p>
          <Tabs />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="flex flex-col items-start justify-start gap-8 mt-4"
        >
          <div className="flex flex-row items-start justify-start gap-2">
            <span
              className="material-symbols-outlined text-[#B5B5B5] flex items-center justify-center"
              onClick={() => setReadingMode(false)}
            >
              arrow_back_ios
            </span>
            <p className="text-[14px] font-jakarta text-[#062147]">
              Aprende {">"} {currentTab?.title}
            </p>
          </div>
          {currentTab.content}
        </motion.div>
      )}
    </>
  );

  return (
    <div className="w-screen h-screen font-sen bg-[#F7FAFF] overflow-x-hidden scroll-smooth relative">
      <div className="w-full h-full md:px-[100px] px-4 md:pt-[150px] pt-[100px] md:mb-[600px] mb-[100vh] flex items-start justify-start bg-[#F7FAFF]">
        <AnimatePresence>
          <div className="w-fit h-fit hidden md:flex">
            <DesktopContent />
          </div>
          <div className="w-fit h-fit flex md:hidden">
            <MobileContent />
          </div>
        </AnimatePresence>
      </div>
      <div className="fixed top-0 z-20 w-full h-fit">
        <Navbar handleRegistrationModal={handleRegistrationModal} />
      </div>
      <div className="w-fit h-fit z-10">
        <Info />
      </div>
      <div className="md:absolute z-50">
        {toggleRegistrationModal && (
          <Overlay>
            <div className="w-full h-full text-black flex items-center justify-center z-50">
              <Main handleModal={handleRegistrationModal} />
            </div>
          </Overlay>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
