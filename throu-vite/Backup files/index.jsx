import React from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

import { convertRetrievedProjects } from "../utils";
import useStore from "../context/index";

export const getProjects = () => {
  // Necessary hooks -------------------------------------------------------------------------
  const { contract } = useContract(
    "0x1429d1C3bbA0d67AbEbFbaDCa80552dA813532B5"
  );

  const projectsCount = useContractRead(contract, "totalProjects");

  const address = useAddress();
  //const connect = useMetamask();
  //---------------------------------------------------------------------------

  const { assignProjects } = useStore();

  const getProjectsByInfo = async () => {
    try {
      const projectsAmount = await projectsCount.data;

      const projectsPromises = Array.from({ length: projectsAmount }, (_, i) =>
        contract.call("getTotalProjectById", i)
      );

      const data = await Promise.all(projectsPromises);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getConvertedProjects = async () => {
    try {
      const projects = await getProjectsByInfo();
      console.log(projects);
      const convertedProjects = await convertRetrievedProjects(projects);
      assignProjects(convertedProjects);
      return convertedProjects;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    getConvertedProjects,
    contract,
    address,
  };
};
