import React from "react";
import useStore from "../../../context";

import {
  AiOutlineUser as UserIcon,
  AiOutlineMail as EmailIcon,
  AiOutlineLock as PadlockIcon,
} from "react-icons/ai";
import { FiEdit as EditIcon } from "react-icons/fi";
import { CiLocationOn as LocationIcon } from "react-icons/ci";

const ProfileInfo = () => {
  const { userProfile } = useStore();
  return (
    <div className="flex flex-col flex-1 items-start justify-center w-full">
      <h2 className="p-4 text-[30px] text-black dark:text-white font-bold">
        Mi perfil
      </h2>
      <div className="flex-row gap-12 md:items-start items-center md:justify-start justify-center w-full mt-[20px] md:flex hidden">
        <div className="w-fit h-fit relative">
          <img
            src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="rounded-full h-[140px] w-[140px] object-cover brightness-50"
          />
          <div className="flex flex-col items-center justify-center absolute left-0 top-0 right-0 bottom-0 ">
            <div className="w-fit h-fit flex- items-center justify-center hover:cursor-pointer">
              <span className="text-white text-[18px] flex items-center justify-center">
                <EditIcon />
              </span>
              <p className="text-white">Cambiar foto</p>
            </div>
          </div>
        </div>

        {/** Desktop interface */}
        <div className="flex-row items-start justify-between flex-2 flex">
          <div className="flex flex-col items-start justify-center gap-6">
            <div className="flex flex-row items-center justify-center gap-2 pt-3">
              <span className="text-[#B5B5B5] text-[20px] font-light">
                <UserIcon />
              </span>
              <p className="text-[#B5B5B5] text-[20px] font-light"> Nombre </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 pt-3">
              <span className="text-[#B5B5B5] text-[20px] font-light">
                <EmailIcon />
              </span>
              <p className="text-[#B5B5B5] text-[20px] font-light">
                {" "}
                Correo electrónico{" "}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 pt-3">
              <span className="text-[#B5B5B5] text-[20px] font-light">
                <LocationIcon />
              </span>
              <p className="text-[#B5B5B5] text-[20px] font-light">
                {" "}
                Ubicación{" "}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 pt-3">
              <span className="text-[#B5B5B5] text-[20px] font-light">
                <PadlockIcon />
              </span>
              <p className="text-[#B5B5B5] text-[20px] font-light">
                {" "}
                Contraseña{" "}
              </p>
            </div>

            <p className="text-[#18A5FF] hover:underline cursor-pointer pt-[17px] text-[18px]">
              {" "}
              Guardar cambios{" "}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <input
              type="text"
              className="ml-[100px] text-black dark:text-white bg-transparent outline-none border-0 border-b-[1px] w-[300px] font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder={`${userProfile.name}`}
            />
            <input
              type="text"
              className="ml-[100px] text-black dark:text-white bg-transparent outline-none border-0 border-b-[1px] w-[300px] font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder={`${userProfile.email}`}
            />
            <input
              type="text"
              className="ml-[100px] text-black dark:text-white bg-transparent outline-none border-0 border-b-[1px] w-[300px] font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder={`${userProfile.addressStreet}`}
            />
            <p className="text-[#18A5FF] hover:underline cursor-pointer pt-[17px]">
              {" "}
              Cambiar contraseña{" "}
            </p>
          </div>
        </div>
      </div>

      {/** Mobile interface */}

      <div className="flex flex-col flex-1 items-center justify-center w-full mt-[30px] md:hidden">
        <div className="w-fit h-fit relative">
          <img
            src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="rounded-full h-[150px] w-[150px] object-cover brightness-50"
          />
          <div className="flex flex-col items-center justify-center absolute left-0 top-0 right-0 bottom-0">
            <span className="text-white text-[18px]">
              <EditIcon />
            </span>
            <p className="text-white">Cambiar foto</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-[50px] w-full border-b-[2px] border-[#B5B5B5]">
          <label htmlFor="nameInput"> Nombre </label>
          <div className="w-full h-fit relative">
            <input
              type="text"
              name="nameInput"
              className="ml-6 text-black dark:text-white bg-transparent outline-none border-0 w-full font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder="Edward"
            />
            <span className="absolute top-3 left-3 text-[#B5B5B5] dark:text-white text-[18px]">
              <UserIcon />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-[50px] w-full border-b-[2px] border-[#B5B5B5]">
          <label htmlFor="nameInput"> Correo electrónico </label>
          <div className="w-full h-fit relative">
            <input
              type="text"
              name="nameInput"
              className="ml-6 text-black dark:text-white bg-transparent outline-none border-0 w-full font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder="sheddagame@gmail.com"
            />
            <span className="absolute top-3 left-3 text-[#B5B5B5] dark:text-white text-[18px]">
              <EmailIcon />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-[50px] w-full border-b-[2px] border-[#B5B5B5]">
          <label htmlFor="nameInput"> Ubicación </label>
          <div className="w-full h-fit relative">
            <input
              type="text"
              name="nameInput"
              className="ml-6 text-black dark:text-white bg-transparent outline-none border-0 w-full font-bold focus:outline-none focus:ring-0 placeholder:text-black"
              placeholder="Medellín, Colombia"
            />
            <span className="absolute top-3 left-3 text-[#B5B5B5] dark:text-white text-[18px]">
              <LocationIcon />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-[50px] w-full border-b-[2px] border-[#B5B5B5]">
          <label htmlFor="nameInput"> Contraseña </label>
          <div className="w-full h-fit relative">
            <input
              type="text"
              name="nameInput"
              className="ml-6 text-black dark:text-white bg-transparent outline-none border-0 w-full font-bold focus:outline-none focus:ring-0 placeholder:text-black"
            />
            <span className="absolute top-3 left-3 text-[#B5B5B5] dark:text-white text-[18px]">
              <PadlockIcon />
            </span>
            <span className="absolute top-[5px] left-12">
              <p className="text-[#18A5FF] dark:text-white text-[18px]">
                Cambiar contraseña
              </p>
            </span>
          </div>
        </div>
        <p className="text-[#18A5FF] hover:underline cursor-pointer pt-[17px] text-[18px]">
          {" "}
          Guardar cambios{" "}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
