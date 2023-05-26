import React, { useState, useEffect } from "react";

const Cookies = ({}) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  useEffect(() => {}, [cookiesAccepted]);

  return (
    <>
      {!cookiesAccepted && (
        <div className="w-full h-fit flex flex-col items-center justify-center bg-[#062147] p-2 gap-2 font-['Sen']">
          <div className="flex w-full flex-row items-center justify-between">
            <h2 className="text-[25px]  text-[#F7FAFF]">
              Usamos cookies para mejorar tu experiencia
            </h2>
            <div>
              <button
                type="button"
                className="border-transparent p-4 text-[#F7FAFF] text-[16px]"
              >
                Rechazar
              </button>
              <button
                type="button"
                className="p-2 border-transparent bg-[#F7FAFF] text-[#062147] text-[18px]"
                onClick={() => setCookiesAccepted(true)}
              >
                Aceptar cookies
              </button>
            </div>
          </div>
          <p className="text-[#F7FAFF] text-[16px] font-Plus_Jakarta_Sans">
            Utilizamos cookies y otras tecnologías de seguimiento para mejorar
            su experiencia de navegación en nuestro sitio web, mostrarle
            contenido personalizado y anuncios dirigidos, analizar el tráfico de
            nuestro sitio web y comprender de dónde provienen nuestros
            visitantes. Al navegar por nuestro sitio web, acepta nuestro uso de
            cookies y otras tecnologías de seguimiento.
          </p>
        </div>
      )}
    </>
  );
};

export default Cookies;
