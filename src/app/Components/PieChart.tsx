"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PluginChartOptions,
  ChartData,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const PieChart = ({
  pieChartDefinitions,
  data,
}: {
  pieChartDefinitions: PieSlice[];
  data: any;
}) => {
  const pieData = {
    labels: pieChartDefinitions.map((s) => s.label),
    datasets: [
      {
        data: pieChartDefinitions.map((s) => data[s.property]),
        backgroundColor: pieChartDefinitions.map((s) => s.color),
        borderColor: pieChartDefinitions.map((s) => s.color),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-96 py-2 mb-5">
      <Pie data={pieData} options={options as PluginChartOptions<"pie">} />
    </div>
  );
};

export default PieChart;
