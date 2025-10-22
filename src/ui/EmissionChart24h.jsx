import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EmissionsChart24h = ({ emissions }) => {
  if (!emissions || !Array.isArray(emissions) || emissions.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
        <p className="text-gray-500">No data available for the chart</p>
      </div>
    );
  }

  const labels = emissions.map((item, index) => {
    const hour = index;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const values = emissions.map((item) => item.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Emissioni CO2 (24h)",
        data: values,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "CO2 Emissions Trend - Last 24 Hours",
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#374151",
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y.toLocaleString("it-IT")} ${emissions[0]?.unit || "kt CO2"}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Hours)",
          font: {
            size: 12,
          },
          color: "#6B7280",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "#6B7280",
          maxTicksLimit: 12,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: `Emissions (${emissions[0]?.unit || "kt CO2"})`,
          font: {
            size: 12,
          },
          color: "#6B7280",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "#6B7280",
          callback: function (value) {
            return value.toLocaleString("it-IT");
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="h-64 w-full rounded-lg bg-white p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default EmissionsChart24h;
