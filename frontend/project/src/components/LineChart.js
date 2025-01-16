import React from "react";
import { Pie } from "react-chartjs-2";

function LineChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default LineChart;
