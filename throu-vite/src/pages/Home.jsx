import React, { useState, useEffect } from "react";

import { CampaignsDisplay } from "../components";

const Home = () => {
  const campaigns = [
    {
      owner: "Throu",
      title: "Proyecto 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://media.istockphoto.com/id/1371779846/vector/web-3-0-typography-with-3d-hologram-globe-vector-illustration.jpg?s=612x612&w=0&k=20&c=AlgXQi5q9CZv-5NxUv67U_yv2_wDWZG7JFLS22SkZBA=",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
    {
      owner: "Throu",
      title: "Proyecto 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://www.xrtoday.com/wp-content/uploads/2021/12/Web_30_What_it_Is_What_Isnt_When_Can_You_Start_Using_.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
    {
      owner: "Throu",
      title: "Proyecto 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://blog.mexc.com/wp-content/uploads/2022/03/The-Next-Version-of-The-Internet-Web-3.0-2.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
    {
      owner: "Throu",
      title: "Proyecto 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://assets.entrepreneur.com/content/3x2/2000/1644597979-shutterstock-2067709496.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
    {
      owner: "Throu",
      title: "Proyecto 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://futuristspeaker.com/wp-content/uploads/2022/08/futurist-thomas-frey-defining-the-11-core-building-blocks-of-web-3-0.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
    {
      owner: "Throu",
      title: "Proyecto 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      target: "0.0",
      deadline: "",
      amountCollected: "0.0",
      image: [
        "https://www.feedough.com/wp-content/uploads/2022/01/web-3.0.png",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
      ],
      handleClick: "",
    },
  ];

  return <CampaignsDisplay title="Todos los proyectos" campaigns={campaigns} />;
};

export default Home;
