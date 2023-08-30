import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { contributors } from "../../../constants";
import { useNavigate } from "react-router-dom";

const Subsection = ({ title, text, link }) => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[250px] w-fit md:h-[180px] lg:h-[150px] lg:px-3 md:px-2 px-3 lg:py-0 flex flex-col items-center justify-between text-center gap-[10px] md:gap-0">
      <h3 className="font-bold text-[25px] leading-[36px]">{title}</h3>
      <p className="font-normal text-[16px] leading-[24px] font-jakarta px-3">
        {text}
      </p>
      <p
        onClick={() => navigate("/aprende")}
        className="font-normal text-[18px] text-[#18A5FF] underline md:w-[50%] lg:w-fit hover:font-bold cursor-pointer transition ease transform duration-300"
      >
        {link}
      </p>
      {title !== "Distribuir" && (
        <div className="md:hidden border-b-[1px] w-[60px] mt-[10%] border-[#062147]"></div>
      )}
    </div>
  );
};

const Proposal = () => {
  const [animationControls, setAnimationControls] = useState([]);
  const carouselRef = useRef(null);
  const controls = useAnimation();

  const handleCarouselScroll = () => {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);
    controls.stop();

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(() => {
      // Run the callback
      animateCarousel();
    }, 66);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = carousel.children;
    const itemWidth = items[0].getBoundingClientRect().width;
    const animationDuration = 50; // Adjust as needed
    const totalItemsWidth = itemWidth * contributors.length;
    console.log(totalItemsWidth);
    // Create CSS keyframes animation
    const keyframes = `@keyframes carouselAnimation {
      0% { transform: translateX(0); }
      100% { transform: translateX(-51.3%); }
    }`;

    // Append animation to document
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    // Apply animation to carousel
    carousel.style.animation = `carouselAnimation ${animationDuration}s linear infinite`;
  }, [contributors]);

  return (
    <div className="flex w-full h-fit items-center justify-center px-[7%] md:px-[6%] overflow-hidden">
      <div className="flex w-full h-full flex-col items-start justify-around lg:justify-start gap-20 md:gap-24">
        <section className="flex flex-col items-start gap-6 w-full justify-start">
          <p className="font-sen text-[#B5B5B5] lg:leading-[36px] md:text-[20px] xl:text-[30px] leading-[20px] text-[16px]">
            Confían en nosotros
          </p>

          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            onMouseEnter={() =>
              (carouselRef.current.style.animationPlayState = "paused")
            }
            onMouseLeave={() =>
              (carouselRef.current.style.animationPlayState = "running")
            }
            onTouchStart={() =>
              (carouselRef.current.style.animationPlayState = "paused")
            }
            onTouchEnd={() =>
              (carouselRef.current.style.animationPlayState = "running")
            }
            className="carousel flex items-center justify-between gap-10 md:gap-[150px] w-fit h-[fit] select-none"
          >
            {contributors.map((item) => (
              <motion.div
                className="carousel-item flex flex-row items-center justify-between w-[100px] h-[60px] md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[100px] object-contain select-none"
                key={item.name}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${item.styles}`}
                />
              </motion.div>
            ))}
            {/* Duplicate items for continuous effect */}
            {contributors.map((item) => (
              <motion.div
                className="carousel-item flex flex-row items-center justify-between w-[100px] h-[60px] md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[100px] object-contain select-none"
                key={item.name + "-duplicate"}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${item.styles}`}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center gap-8 text-[#062147]">
          <h1 className="font-sen md:text-[50px] xl:text-[60px] text-[35px] lg:leading-[84px] leading-[30px] font-bold text-center">
            Sé parte de la evolución
          </h1>
          <p className="font-normal lg:text-[18px] text-[18px] lg:leading-[25.2px] leading-[22px] text-center lg:w-[50%] font-jakarta">
            Experimenta la
            <span className="font-semibold">
              {" "}
              transparencia y la seguridad{" "}
            </span>
            de la tecnología blockchain mientras maximiza el rendimiento de sus
            inversiones inmobiliarias.
          </p>
        </section>

        <section className="flex flex-col flex-wrap md:mt-10 w-full items-center justify-center text-center gap-10 text-[#062147] -translate-y-5">
          <div className="flex flex-col w-full items-center justify-center text-center gap-10 text-[#062147]">
            <h1 className="lg:text-[40px] lg:leading-[50px] text-[22px] leading-[20px] text-center font-bold">
              Estamos aquí para
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 lg:gap-0 w-full text-[#062147]">
            <Subsection
              title="Promover"
              text="Inversiones de bajo riego y alta rentabilidad."
              link="Conocer más"
            />
            <span className="hidden md:block border-b-2 h-[150px] w-[0.5px] bg-[#062147]" />
            <Subsection
              title="Crear"
              text="Los tokens según el valor del proyecto."
              link="Conocer más"
            />
            <span className="hidden md:block border-b-2 h-[150px] w-[0.5px] bg-[#062147]" />
            <Subsection
              title="Vincular"
              text="Legalmente los tokens a la propiedad."
              link="Conocer más"
            />
            <span className="hidden md:block border-b-2 h-[150px] w-[0.5px] bg-[#062147]" />
            <Subsection
              title="Administrar"
              text="La ejecución del proyecto y su rendimiento."
              link="Conocer más"
            />
            <span className="hidden md:block border-b-2 h-[150px] w-[0.5px] bg-[#062147]" />
            <Subsection
              title="Distribuir"
              text="La rentabilidad con contratos inteligentes."
              link="Conocer más"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proposal;
