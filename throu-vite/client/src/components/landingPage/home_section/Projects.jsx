import React from "react";
import { BoxArrow } from "../../../assets";
import { CustomButton } from "../index";
import { ProjectCard } from "./utility_components";

import { TestPic_1, TestPic_2, TestPic_3, TestPic_4 } from "../../../assets";

const Projects = () => {
  const handleGoToProjects = () => {};

  const projects = [
    {
      name: "Lesback Valley",
      description:
        "In in sit dui at. Eleifend nibh arcu neque volutpat. Dui amet.",
      location: "525 Ullrich Road",
      collected: "825.577.645.87",
      target: "2.530.700.480.78",
      image: TestPic_1,
    },
    {
      name: "Reymundo Forges",
      description:
        "In in sit dui at. Eleifend nibh arcu neque volutpat. Dui amet.",
      location: "525 Ullrich Road",
      collected: "755.560.430.47",
      target: "3.450.560.480.78",
      image: TestPic_2,
    },
    {
      name: "Elisa Villages",
      description:
        "In in sit dui at. Eleifend nibh arcu neque volutpat. Dui amet.",
      location: "525 Ullrich Road",
      collected: "425.567.622.16",
      target: "1.450.700.912.78",
      image: TestPic_3,
    },
    {
      name: "Florence Island",
      description:
        "In in sit dui at. Eleifend nibh arcu neque volutpat. Dui amet.",
      location: "525 Ullrich Road",
      collected: "966.580.243.87",
      target: "1.450.200.300.78",
      image: TestPic_4,
    },
  ];

  return (
    <div className="flex w-full h-fit py-4 items-center justify-center lg:pl-[100px] mt-16 overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-12 mb-[100px]">
        <div className="lg:w-[700px] w-fit h-fit lg:shadow-2xl flex flex-col p-[30px] text-[#062147] gap-12 py-16 rounded-md">
          <div className="items-center justify-end hidden lg:flex">
            <img src={BoxArrow} className="w-[200px]" />
          </div>
          <h1 className="font-semibold text-[3em] lg:text-left text-center mt-[20px]">
            <span className="text-[#8C06B1] text-[60px] font-bold">
              Proyectos
            </span>{" "}
            exclusivos, Inversiones{" "}
            <span className="text-[60px] font-bold">accesibles</span>
          </h1>
          <p className="text-left">
            Accede a una plataforma de finanzas descentralizadas (DeFi) que
            ofrece la posibilidad de{" "}
            <span className="font-semibold">proyectos inmobiliarios</span> a
            través de tokens de fracción, con la seguridad y transparencia
            garantizadas por los Smart Contracts.
          </p>

          <div className="flex flex-row flex-wrap lg:justify-start justify-center items-center gap-12">
            <CustomButton
              styles="bg-transparent border-2 border-[#062147] px-[50px] py-[10px] flex items-center justify-center w-[196px] h-[60px] text-[#062147] hover:bg-[#062147] hover:text-white"
              title="Proyectos"
              handleClick={handleGoToProjects}
            />

            <a
              href=""
              className="font-normal text-[20px] text-[#062147] hover:underline hover:text-[#18A5FF]"
            >
              Conocer más
            </a>
          </div>
        </div>

        <div className="carousel lg:w-[80%] w-[90%] flex lg:py-6 pb-4">
          {projects.map((item) => (
            <ProjectCard project={item} key={item.name} />
          ))}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
