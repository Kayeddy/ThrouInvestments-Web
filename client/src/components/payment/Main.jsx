import React, { useEffect } from "react";
import {
  Bg_logo1_left,
  Bg_logo2,
  Bg_logo1,
  Bg_logo2_right,
} from "../../assets";

import PaymentMethod from "./PaymentMethod";
import { Overlay } from "../marketplace";

const Main = ({ showInvestmentModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <Overlay>
      <main className="relative my-auto bg-white overflow-hidden md:min-w-[750px] md:w-[80vw] md:max-w-[950px] md:h-[600px] w-screen h-screen rounded-lg">
        <img
          src={Bg_logo1_left}
          alt=""
          className="z-0 absolute bottom-[-200px] left-[-50px] w-[250px] -rotate-[40deg] brightness-200 blur-md"
        />

        <img
          src={Bg_logo2_right}
          alt=""
          className="z-0 absolute top-[-100px] right-0 w-[200px] brightness-200 -rotate-[40deg] blur-md"
        />

        <section className="h-full w-full flex items-center justify-center">
          <PaymentMethod showInvestmentModal={showInvestmentModal} />
        </section>
      </main>
    </Overlay>
  );
};

export default Main;
