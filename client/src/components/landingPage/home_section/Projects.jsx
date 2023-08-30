import React, { useState, useRef } from "react";
import { BoxArrow } from "../../../assets";
import { CustomButton } from "../index";
import { ProjectCard } from "./utility_components";

import { TestPic_1, TestPic_2, TestPic_3, TestPic_4 } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [showLeftDot, setShowLeftDot] = useState(false);
  const [showRightDot, setShowRightDot] = useState(false);
  const [centerDotAnimation, setCenterDotAnimation] = useState("");

  const navigate = useNavigate();
  const handleGoToProjects = () => {};

  const carouselRef = useRef(null);

  const scrollTo = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth / 3;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    if (direction === "left") {
      setShowLeftDot(true);
      setShowRightDot(false);
      setCenterDotAnimation("animate-fade-out-right");

      setTimeout(() => {
        setShowLeftDot(false);
        setCenterDotAnimation("");
      }, 500);
    } else if (direction === "right") {
      setShowRightDot(true);
      setShowLeftDot(false);
      setCenterDotAnimation("animate-fade-out-left");

      setTimeout(() => {
        setShowRightDot(false);
        setCenterDotAnimation("");
      }, 500);
    }
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
    <div className="flex w-full h-fit md:min-h-screen items-center justify-center overflow-hidden mt-12 md:mt-0">
      <div className="flex md:flex-row flex-col items-start justify-start h-full w-full px-3 md:px-0 gap-4">
        <div className="w-fit h-fit flex flex-col pb-6 md:min-w-[380px] md:w-[450px] lg:min-w-[450px] xl:min-w-[700px] md:py-[170px] xl:py-[160px] md:px-6 md:pl-[6.5%] text-[#062147] shadow-project-section-custom gap-4 md:gap-8 rounded-md md:text-left text-center">
          <h1 className="font-semibold md:text-[30px] lg:text-[36px] xl:text-[45px] text-[30px] md:text-left text-center font-sen">
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

          <div className="flex flex-row flex-wrap md:justify-start justify-center items-center md:gap-4 gap-4 mt-6">
            <CustomButton
              styles="bg-transparent border-2 border-[#062147] px-[50px] py-[10px] flex flex-col md:flex-row items-center justify-center md:w-[196px] w-[90%] h-[55px] text-[#062147] hover:bg-[#062147] hover:text-white text-[21px] font-semibold transition ease transform duration-300"
              title="Proyectos"
              handleClick={() => navigate("/marketplace")}
            />

            <p
              onClick={() => navigate("/aprende")}
              className="font-normal text-[20px] text-[#062147] hover:underline hover:text-[#18A5FF] hover:font-semibold cursor-pointer transition ease transform duration-300"
            >
              Conocer más
            </p>
          </div>
        </div>

        <div className="relative w-full h-full md:py-6 pb-4 mt-4">
          <div
            className="carousel w-full h-full overflow-x-auto overflow-y-hidden md:pr-[400px] lg:pr-[460px] xl:pr-[720px] pb-5"
            ref={carouselRef}
          >
            {projects.map((item) => (
              <ProjectCard project={item} key={item.name} />
            ))}
            <ProjectCard />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 py-2 md:mt-4 md:ml-10 select-none">
            <span
              className="material-symbols-outlined text-slate-400 flex items-start justify-end cursor-pointer"
              onClick={() => scrollTo("left")}
            >
              keyboard_double_arrow_left
            </span>

            <div className="flex flex-row items-center justify-center w-12">
              {showLeftDot && (
                <div className="w-3 h-3 rounded-full bg-gray-400 animate-fade-in-left" />
              )}

              <div
                className={`w-3 h-3 rounded-full bg-gray-400 hover:bg-[#18A5FF] ${centerDotAnimation}`}
              />

              {showRightDot && (
                <div className="w-3 h-3 rounded-full bg-gray-400 animate-fade-in-right" />
              )}
            </div>
            <span
              className="material-symbols-outlined text-slate-400 flex items-start justify-end cursor-pointer"
              onClick={() => scrollTo("right")}
            >
              keyboard_double_arrow_right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
