import React from "react";

import { EmailHandler } from "../../api/server";
import { CustomButton } from "../../components/marketplace";
import useUserStore from "../../context/useUserStore";
import useAuthStore from "../../context/useAuthStore";

const SecondStep = () => {
  const { userProfile } = useUserStore();
  const { accessToken } = useAuthStore();
  const { sendEmail } = EmailHandler();

  const handleSmsDelivery = () => {};

  const handleEmailDelivery = async () => {
    let response = null;
    const email = {
      to: userProfile.email,
      subject: "Verificación de cuenta",
      body: "Hello Edward, please verify your account",
    };
    console.log(accessToken);

    console.log(email);
    try {
      response = await sendEmail(email, accessToken);
    } catch (error) {
      console.log("Error sending email:", error);
    }
    console.log("Email sent:", response);
  };

  return (
    <div className="w-full flex flex-row items-center justify-between">
      {/** Email verification section */}
      <div className="flex flex-col items-center justify-between p-4 w-[45%] h-[400px] bg-white rounded-md shadow-md">
        <section className="w-full flex gap-2 flex-row items-center justify-around">
          <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
          <p className="font-jakarta text-md text-[#062147]">Email</p>
          <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
        </section>

        {/** Dynamic section */}
        <section className="w-full">
          <div className="flex flex-col gap-2 w-full h-fit justify-center items-center">
            <div
              id="Email-container"
              className="relative w-[60%] flex flex-row items-center border-b-[2px] border-[#18A5FF]"
            >
              <span
                className="material-symbols-outlined cursor-pointer text-[#18A5FF] md:ml-6"
                id="Mail-icon"
              >
                Mail
              </span>
              <input
                id="Mail-input"
                type="text"
                className="w-[300px] flex items-center justify-center font-normal font-Plus_Jakarta_Sans outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[#01070E] text-[20px] leading-[30px] placeholder:text-[#4b5264]"
                placeholder="Email"
                value={userProfile.email}
              />
            </div>
            <p className="text-lg font-jakarta font-normal text-[#062147] text-center">
              {" "}
              Te enviaremos un correo de verificación, revisa tu bandeja
              principal y también tu bandeja de spam por si acaso.{" "}
            </p>
          </div>
        </section>

        <CustomButton
          styles="px-8 py-3 flex items-center justify-center text-white bg-[#062147] text-lg hover:bg-[#18A5FF]"
          title="Enviar"
          handleClick={handleEmailDelivery}
        />
      </div>

      {/** Phone vverification section */}
      <div className="flex flex-col items-center justify-between p-4 w-[45%] h-[400px] bg-white rounded-md shadow-md">
        <section className="w-full flex gap-2 flex-row items-center justify-around">
          <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
          <p className="font-jakarta text-md text-[#062147]">Teléfono</p>
          <span className="w-full h-[1px] bg-[#062147] mt-1"></span>
        </section>

        {/** Dynamic section */}
        <section className="w-full">
          <div className="flex flex-col gap-2 w-full h-fit justify-center items-center">
            <div
              id="Email-container"
              className="relative w-[60%] flex flex-row items-center border-b-[2px] border-[#18A5FF]"
            >
              <span
                className="material-symbols-outlined cursor-pointer text-[#18A5FF] md:ml-6"
                id="Mail-icon"
              >
                smartphone
              </span>
              <input
                id="Mail-input"
                type="text"
                className="w-[300px] flex items-center justify-center font-normal font-Plus_Jakarta_Sans outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent font-epilogue dark:text-white text-[#01070E] text-[20px] leading-[30px] placeholder:text-[#4b5264]"
                placeholder="Email"
                value={userProfile.phone}
              />
            </div>
            <p className="text-lg font-jakarta font-normal text-[#062147] text-center">
              {" "}
              Te enviaremos un SMS de verificación a tu número de celular.{" "}
            </p>
          </div>
        </section>

        <CustomButton
          styles="px-8 py-3 flex items-center justify-center text-white bg-[#062147] text-lg hover:bg-[#18A5FF]"
          title="Enviar"
          handleClick={handleEmailDelivery}
        />
      </div>
    </div>
  );
};

export default SecondStep;
