import React, { useEffect, useState } from "react";
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
  // Necessary hooks imports -------------------------------------------------------------------------
  const { contract } = useContract(
    "0x1429d1C3bbA0d67AbEbFbaDCa80552dA813532B5"
  );

  const { data: projectsCount } = useContractRead(contract, "totalProjects");

  const address = useAddress();
  //const connect = useMetamask();
  //---------------------------------------------------------------------------

  const { assignProjects } = useStore();

  // Get the projects from the web3 server
  const getProjectsById = async () => {
    try {
      const projectsPromises = Array.from({ length: projectsCount }, (_, i) =>
        contract.call("getTotalProjectById", i)
      );

      const data = await Promise.all(projectsPromises);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Convert the projects to a more readable format
  const getConvertedProjects = async () => {
    try {
      const projects = await getProjectsById();
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
    projectsCount,
  };
};
