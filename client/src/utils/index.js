import { json } from "react-router-dom";
import { changeTheme } from "../constants";

// Function that handles the different themes users can choose from
export const handleThemeChange = () => {
  return {
    checkTheme: () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        return true;
      } else {
        return false;
      }
    },
    toggleTheme: (theme) => {
      localStorage.setItem("theme", theme);
      const body = document.querySelector("body");
      body.classList.toggle(theme);
      const currentTheme = document.body.classList.contains("dark");
      if (currentTheme) {
        changeTheme("dark");
      } else {
        changeTheme("light");
      }
    },
  };
};

// This function is used to calculate the percentage bar, based on the investment goal and the amount raised so far.
export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

// This function converts the properties of the projects that are represented in a BigNumber object.
const bigNumberConverter = (bigNumber) => {
  const bigNumberInt = BigInt(bigNumber);
  return bigNumberInt;
};

// This function takes the project's URI and converts it into a javascript-readable Json object.
const ipfsConverter = async (token_URI) => {
  if (!token_URI.includes("ipfs://")) {
    return;
  }
  const jsonURL =
    "https://gateway.pinata.cloud/ipfs/" + token_URI.split("://").pop();
  const response = await fetch(jsonURL);
  return response.json();
};

// This function receives the values retrieved from the getProjectsById function within our API and converts them into an array of objects containing the data of each project.
export const convertRetrievedProjects = async (projectsArray) => {
  let convertedProjectsArray = await Promise.all(
    projectsArray.map(async (array) => {
      let project = {
        projectPrice: bigNumberConverter(array[0]),
        projectSales: bigNumberConverter(array[1]),
        projectHolders: array[2],
        projectProfit: bigNumberConverter(array[3]),
        projectTotalSupply: bigNumberConverter(array[4]),
        projectActive: array[5],
        projectURI: "no data assigned",
      };

      project.projectURI = await ipfsConverter(array[6]);
      return project;
    })
  );
  return convertedProjectsArray;
};
