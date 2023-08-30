import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import DropdownInput from "../DropdownInput";

const ProjectChart = () => {
  const [selectedTimespan, setSelectedTimespan] = useState("1 month");
  const [selectedValueType, setSelectedValueType] = useState("valorization");
  const [chartData, setChartData] = useState([
    ["Date", "Value"],
    // ...initial data points
  ]);

  const getFilteredData = () => {
    // Filter and transform the data based on the selected timespan and value type
    // Replace with your actual data transformation logic
    return [
      ["Date", "Value"],
      ["2023-01-01", 1000],
      ["2023-01-02", 1200],
      // ...other data points
    ];
  };

  useEffect(() => {
    // Update the chart data when the selected timespan or value type changes
    setChartData(getFilteredData());
  }, [selectedTimespan, selectedValueType]);

  const LineData = [
    ["x", selectedValueType],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ];

  const chartInfoSections = ["Valorización", "ROI"];

  const applyOpacity = (hexColor, opacity) => {
    const alpha = Math.round(opacity * 255);
    return `${hexColor}${alpha.toString(16).padStart(2, "0")}`;
  };

  const LineChartOptions = {
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      baselineColor: "transparent",
      textStyle: {
        color: "#01070E", // Set the text color on the horizontal axis
      },
    },
    vAxis: {
      gridlines: {
        color: "#f3f3f3",
        count: -1,
      },
      baselineColor: "transparent",
      textStyle: {
        color: "#01070E", // Set the text color on the vertical axis
      },
    },
    chartArea: {
      backgroundColor: applyOpacity("#F7FAFF", 0.4),
    },
    backgroundColor: "transparent",
    // ...other options
  };

  const handleValueTypeChange = (event) => {
    setValueType(event.target.value);
  };

  return (
    <div className="container md:mt-5">
      <div className="w-full md:flex hidden chart-controls flex-row items-center justify-between mb-5">
        <DropdownInput
          options={chartInfoSections}
          style="text-black text-[20px] font-jakarta"
          arrowStyle="text-black"
          switchTab={() => {}}
        />

        <div className="flex flex-row gap-14 items-center pr-4">
          <p
            id="1 month"
            onClick={(e) => setSelectedTimespan(e.target.value)}
            className="cursor-pointer text-[#18A5FF] font-sen text-[20px]"
          >
            1m
          </p>
          <p
            id="3 months"
            onClick={(e) => setSelectedTimespan(e.target.value)}
            className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
          >
            3m
          </p>
          <p
            id="6 months"
            onClick={(e) => setSelectedTimespan(e.target.value)}
            className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
          >
            6m
          </p>
          <p
            id="1 year"
            onClick={(e) => setSelectedTimespan(e.target.value)}
            className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
          >
            1y
          </p>
          <p
            id="all"
            onClick={(e) => setSelectedTimespan(e.target.value)}
            className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
          >
            Todos
          </p>
        </div>
      </div>

      <div className="flex md:hidden flex-row gap-14 items-center justify-end pr-4">
        <p
          id="1 month"
          onClick={(e) => setSelectedTimespan(e.target.value)}
          className="cursor-pointer text-[#18A5FF] font-sen text-[20px]"
        >
          1m
        </p>
        <p
          id="3 months"
          onClick={(e) => setSelectedTimespan(e.target.value)}
          className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
        >
          3m
        </p>
        <p
          id="6 months"
          onClick={(e) => setSelectedTimespan(e.target.value)}
          className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
        >
          6m
        </p>
        <p
          id="1 year"
          onClick={(e) => setSelectedTimespan(e.target.value)}
          className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
        >
          1y
        </p>
        <p
          id="all"
          onClick={(e) => setSelectedTimespan(e.target.value)}
          className="cursor-pointer font-sen text-[20px] hover:opacity-50 hover:text-[#18A5FF]"
        >
          Todos
        </p>
      </div>

      <Chart
        width={"100vw"}
        height={"410px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
        className="md:-translate-x-[150px] -translate-x-[40px] w-full"
      />
    </div>
  );
};

export default ProjectChart;
