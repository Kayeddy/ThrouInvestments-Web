import React from "react";
import { PerksCard } from "./utility_components";
import {
  AccesabilityPerk,
  DecentralizationPerk,
  FreedomPerk,
  InnovationPerk,
  InvestPerk,
  SecurityPerk,
  AccesabilityPerk_hover,
  DecentralizationPerk_hover,
  FreedomPerk_hover,
  InnovationPerk_hover,
  InvestPerk_hover,
  SecurityPerk_hover,
} from "../../../assets";

const Perks = () => {
  return (
    <div className="flex flex-col w-full h-fit pt-[5%] px-[20px] justify-start items-center flex-grow">
      <h1 className="lg:text-[3.5em] lg:leading-[2em] text-[2em] leading-[1em] text-center font-bold text-[#062147]">
        ¿Cómo lo Hacemos Posible?
      </h1>

      <div className="flex flex-col w-full items-center lg:flex-auto justify-center h-fit gap-[80px] mt-[50px] lg:mt-[50px] z-10">
        {/* Large displays */}

        <div className="w-fit h-fit flex-row hidden lg:flex">
          <PerksCard
            icon={SecurityPerk}
            title="Seguridad"
            description="Utilizamos tecnología de vanguardia y protocolos rigurosos para proteger su información y activos."
            imgStyle="h-[40px] w-[35px]"
            hoverIcon={SecurityPerk_hover}
          />
          <PerksCard
            icon={InvestPerk}
            title="Invierte desde $50 USD"
            description="Da tus primeros pasos en el mundo de la inversión y comienza a construir tu cartera desde bajos montos."
            imgStyle="h-[37px] w-[40px]"
            hoverIcon={InvestPerk_hover}
          />

          <PerksCard
            icon={InnovationPerk}
            title="Innovación"
            description="Buscamos nuevas formas de hacer las cosas para ayudarte con tus objetivos de inversión"
            imgStyle="h-[40px] w-[35px]"
            hoverIcon={InnovationPerk_hover}
          />
        </div>
        <div className="h-fit w-fit flex-row hidden lg:flex">
          <PerksCard
            icon={FreedomPerk}
            title="Libertad financiera"
            description="Te ayudamos a lograr la independencia económica mediante proyectos sólidos."
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={FreedomPerk_hover}
          />

          <PerksCard
            icon={AccesabilityPerk}
            title="Accesibilidad"
            description="Ofrecemos una plataforma donde puedes invertir de manera fácil y rápida, desde cualquier lugar del mundo"
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={AccesabilityPerk_hover}
          />

          <PerksCard
            icon={DecentralizationPerk}
            title="Descentralización"
            description="Tienes el control de tus activos y tus decisiones de inversión gracias a la Organización Autónoma Descentralizada (DAO)"
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={DecentralizationPerk_hover}
          />
        </div>

        {/* Small displays */}

        <div className="flex flex-row w-fit h-fit lg:hidden gap-[10vw] items-center justify-center">
          <PerksCard
            icon={SecurityPerk}
            title="Seguridad"
            description="Utilizamos tecnología de vanguardia y protocolos rigurosos para proteger su información y activos."
            imgStyle="h-[45px] w-[35px]"
            hoverIcon={SecurityPerk_hover}
          />
          <PerksCard
            icon={InvestPerk}
            title="Invierte desde $50 USD"
            description="Da tus primeros pasos en el mundo de la inversión y comienza a construir tu cartera desde bajos montos."
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={InvestPerk_hover}
          />
        </div>

        <div className="flex flex-row w-fit h-fit lg:hidden gap-[10vw] items-center justify-center">
          <PerksCard
            icon={InnovationPerk}
            title="Innovación"
            description="Buscamos nuevas formas de hacer las cosas para ayudarte con tus objetivos de inversión"
            imgStyle="h-[40px] w-[35px]"
            hoverIcon={InnovationPerk_hover}
          />
          <PerksCard
            icon={FreedomPerk}
            title="Libertad financiera"
            description="Te ayudamos a lograr la independencia económica mediante proyectos sólidos."
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={FreedomPerk_hover}
          />
        </div>

        <div className="flex flex-row w-fit h-fit lg:hidden gap-[10vw] items-center justify-center">
          <PerksCard
            icon={AccesabilityPerk}
            title="Accesibilidad"
            description="Ofrecemos una plataforma donde puedes invertir de manera fácil y rápida, desde cualquier lugar del mundo"
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={AccesabilityPerk_hover}
          />
          <PerksCard
            icon={DecentralizationPerk}
            title="Descentralización"
            description="Tienes el control de tus activos y tus decisiones de inversión gracias a la Organización Autónoma Descentralizada (DAO)"
            imgStyle="h-[40px] w-[40px]"
            hoverIcon={DecentralizationPerk_hover}
          />
        </div>
      </div>
    </div>
  );
};

export default Perks;
