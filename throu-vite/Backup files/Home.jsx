import React, { useState, useEffect, useRef } from "react";

import { CampaignsDisplay } from "../components";

import { getProjects } from "../api";
import useStore from "../context/index";

const Home = () => {
  const [retrievedProjects, setRetrievedProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getConvertedProjects, contract, address } = getProjects();

  const fetchProjects = async () => {
    setLoading(true);
    const obtainedProjects = await getConvertedProjects();
    setRetrievedProjects(obtainedProjects);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(retrievedProjects);
  }, [retrievedProjects]);

  return (
    <CampaignsDisplay
      title="Todos los proyectos"
      campaigns={retrievedProjects}
      loading={loading}
    />
  );
};

export default Home;
