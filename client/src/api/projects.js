// Global imports
import Web3 from "web3";

// Local imports
import { convertRetrievedProjects } from "../utils";
import useProjectStore from "../context/useProjectStore";

const handleProjectsRetrieval = () => {
  // Necessary hooks imports -------------------------------------------------------------------------

  const { contract } = useContract(
    "0x1429d1C3bbA0d67AbEbFbaDCa80552dA813532B5"
  );

  const { data: projectsCount } = useContractRead(contract, "totalProjects");

  const { assignProjects } = useProjectStore();

  //---------------------------------------------------------------------------

  // Get the projects from the web3 server
  const getProjectsById = async () => {
    try {
      const projectsPromises = Array.from({ length: projectsCount }, (_, i) =>
        contract.call("getTotalProjectById", i)
      );

      const data = await Promise.all(projectsPromises);
      console.log(data);
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
      console.log(convertedProjects);
      return convertedProjects;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    getConvertedProjects,
    contract,
    projectsCount,
  };
};
export default handleProjectsRetrieval;
