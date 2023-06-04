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
  const perksData = [
    {
      icon: SecurityPerk,
      title: "Seguridad",
      description:
        "Utilizamos tecnología de vanguardia y protocolos rigurosos para proteger su información y activos.",
      hoverIcon: SecurityPerk_hover,
    },
    {
      icon: InvestPerk,
      title: "Invierte desde $50 USD",
      description:
        "Da tus primeros pasos en el mundo de la inversión y comienza a construir tu cartera desde bajos montos.",
      hoverIcon: InvestPerk_hover,
    },
    {
      icon: InnovationPerk,
      title: "Innovación",
      description:
        "Buscamos nuevas formas de hacer las cosas para ayudarte con tus objetivos de inversión",
      hoverIcon: InnovationPerk_hover,
    },
    {
      icon: FreedomPerk,
      title: "Libertad financiera",
      description:
        "Te ayudamos a lograr la independencia económica mediante proyectos sólidos.",
      hoverIcon: FreedomPerk_hover,
    },
    {
      icon: AccesabilityPerk,
      title: "Accesibilidad",
      description:
        "Ofrecemos una plataforma donde puedes invertir de manera fácil y rápida, desde cualquier lugar del mundo",
      hoverIcon: AccesabilityPerk_hover,
    },
    {
      icon: DecentralizationPerk,
      title: "Descentralización",
      description:
        "Tienes el control de tus activos y tus decisiones de inversión gracias a la Organización Autónoma Descentralizada (DAO)",
      hoverIcon: DecentralizationPerk_hover,
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen px-[7%] justify-start items-center flex-grow md:mb-[900px] mb-[1100px]">
      <h1 className="lg:text-[3.5em] lg:leading-[2em] text-[2em] leading-[1em] text-center font-bold text-[#062147]">
        ¿Cómo lo Hacemos Posible?
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px] w-full items-center justify-items-center lg:justify-items-stretch ">
        {perksData.map((perk) => (
          <PerksCard
            key={perk.title}
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
            hoverIcon={perk.hoverIcon}
            imgStyle={"w-[45px] h-[50px]"}
          />
        ))}
      </div>
    </div>
  );
};

export default Perks;
