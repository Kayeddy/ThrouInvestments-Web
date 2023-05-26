import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

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
    <div className="container mt-5">
      <div className="chart-controls">
        <select
          value={selectedTimespan}
          onChange={(e) => setSelectedTimespan(e.target.value)}
        >
          <option value="1 month">1 month</option>
          <option value="3 months">3 months</option>
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
          <option value="all">All results</option>
        </select>

        <select
          value={selectedValueType}
          onChange={(e) => setSelectedValueType(e.target.value)}
        >
          <option value="valorization">Valorization</option>
          <option value="ROI">Return on Investment</option>
          {/* ...other value types */}
        </select>
      </div>

      <Chart
        width={"700px"}
        height={"410px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default ProjectChart;
