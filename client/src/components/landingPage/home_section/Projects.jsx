import React, { useState, useRef } from "react";
import { BoxArrow } from "../../../assets";
import { CustomButton } from "../index";
import { ProjectCard } from "./utility_components";

import { TestPic_1, TestPic_2, TestPic_3, TestPic_4 } from "../../../assets";

const Projects = () => {
  const handleGoToProjects = () => {};

  const carouselRef = useRef(null);

  const scrollTo = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth / 2;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
    <div className="flex w-full h-screen items-center justify-center overflow-hidden">
      <div className="flex md:flex-row flex-col items-center justify-start w-full md:pl-[7%] gap-4">
        <div className="w-fit h-fit flex flex-col py-10 md:min-w-[500px] md:w-[600px] lg:min-w-[450px] xl:min-w-[700px] md:py-[170px] xl:py-[200px] md:px-6 text-[#062147] shadow-project-section-custom gap-4 md:gap-12 rounded-md md:text-left text-center">
          <h1 className="font-semibold md:text-[36px] xl:text-[45px] text-[25px] md:text-left text-center font-sen">
            <span className="md:text-[#18A5FF] text-[#8C06B1] font-bold">
              Proyectos
            </span>{" "}
            exclusivos, <br /> Inversiones
            <span className=" font-bold text-[#18A5FF]"> asequibles </span>
          </h1>
          <p className="font-jakarta text-[18px] md:w-[80%]">
            Accede a una plataforma de finanzas descentralizadas (DeFi) que
            ofrece la posibilidad de
            <span className="font-semibold"> proyectos inmobiliarios</span> a
            través de tokens de fracción, con la seguridad y transparencia
            garantizadas por los Smart Contracts.
          </p>

          <div className="flex flex-row flex-wrap md:justify-start justify-center items-center md:gap-12 gap-4 mt-6">
            <CustomButton
              styles="bg-transparent border-2 border-[#062147] px-[50px] py-[10px] flex flex-col md:flex-row items-center justify-center md:w-[196px] w-[90%] h-[55px] text-[#062147] hover:bg-[#062147] hover:text-white text-[21px] font-semibold"
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

        <div className="relative w-full md:py-6 pb-4 xl:mt-6">
          <div
            className="carousel w-full overflow-x-auto px-[5%] md:px-0 md:pr-[5%] xl:pr-[720px]"
            ref={carouselRef}
          >
            {projects.map((item) => (
              <ProjectCard project={item} key={item.name} />
            ))}
          </div>
          <div className="flex justify-center w-[50%] xl:w-[65%] py-2 gap-2 mt-4">
            <button
              onClick={() => scrollTo("left")}
              className="w-3 h-3 rounded-full bg-gray-400 cursor-pointer hover:bg-[#18A5FF]"
            ></button>
            <div className="w-3 h-3 rounded-full bg-gray-400 hover:bg-[#18A5FF]"></div>
            <button
              onClick={() => scrollTo("right")}
              className="w-3 h-3 rounded-full bg-gray-400 cursor-pointer hover:bg-[#18A5FF]"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
