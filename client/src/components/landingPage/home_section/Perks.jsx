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
    <div className="mb-[1000px] md:mb-[1100px] lg:mb-[800px] xl:mb-[750px] flex h-fit md:h-screen w-full flex-grow flex-col items-center justify-start px-[7%]">
      <h1 className="text-center text-[35px] font-bold text-[#062147] md:text-[38px] xl:text-[45px]">
        ¿Cómo lo Hacemos Posible?
      </h1>

      <div className="mt-10 grid w-full grid-cols-2 items-center justify-items-center gap-12 md:gap-8 xl:gap-10 lg:grid-cols-3 lg:justify-items-stretch">
        {perksData.map((perk) => (
          <PerksCard
            key={perk.title}
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
            hoverIcon={perk.hoverIcon}
            imgStyle={"w-[10px] h-[45px]"}
          />
        ))}
      </div>
    </div>
  );
};

export default Perks;
