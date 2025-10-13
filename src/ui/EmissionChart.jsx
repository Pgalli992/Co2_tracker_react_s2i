import React, { useState, useMemo } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react";

const EmissionsChart = ({ data }) => {
  const [chartType, setChartType] = useState("line");
  const [monthsToShow, setMonthsToShow] = useState(6);

  const chartData = useMemo(() => {
    if (!data?.months) return null;

    const selectedMonths = data.months.slice(-monthsToShow);

    const labels = selectedMonths.map((month) => {
      const date = new Date(month.year, month.month - 1);
      return date.toLocaleDateString("it-IT", {
        month: "short",
        year: monthsToShow > 12 ? "numeric" : undefined,
      });
    });

    return {
      labels,
      datasets: [
        {
          label: `Emissioni CO2 - ${data.country}`,
          data: selectedMonths.map((month) => month.emissions),
          borderColor: "rgb(59, 130, 246)",
          backgroundColor:
            chartType === "doughnut"
              ? selectedMonths.map((_, i) => `hsl(${(i * 60) % 360}, 70%, 60%)`)
              : "rgba(59, 130, 246, 0.1)",
          borderWidth: 2,
          fill: chartType === "line",
          tension: 0.4,
        },
      ],
    };
  }, [data, monthsToShow, chartType]);

  const trend = useMemo(() => {
    if (!data?.months || data.months.length < 2) return null;

    const recent = data.months.slice(-2);
    const change = recent[1].emissions - recent[0].emissions;
    const percentChange = ((change / recent[0].emissions) * 100).toFixed(1);

    return { change, percentChange, isIncrease: change > 0 };
  }, [data]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Emissioni CO2 - Ultimi ${monthsToShow} Mesi`,
      },
    },
    scales:
      chartType !== "doughnut"
        ? {
            y: {
              beginAtZero: true,
              title: { display: true, text: "kt CO2" },
            },
          }
        : undefined,
  };

  const ChartComponent = {
    line: Line,
    bar: Bar,
    doughnut: Doughnut,
  }[chartType];

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">Andamento Emissioni</h3>
          {trend && (
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm ${
                trend.isIncrease
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {trend.isIncrease ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {trend.percentChange}%
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <select
            value={monthsToShow}
            onChange={(e) => setMonthsToShow(Number(e.target.value))}
            className="rounded-md border px-3 py-1 text-sm"
          >
            <option value={3}>3 mesi</option>
            <option value={6}>6 mesi</option>
            <option value={12}>12 mesi</option>
          </select>

          <div className="flex overflow-hidden rounded-md border">
            {[
              { type: "line", icon: LineChart },
              { type: "bar", icon: BarChart3 },
              { type: "doughnut", icon: PieChart },
            ].map(({ type, icon: Icon }) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`p-2 ${
                  chartType === type
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-80">
        {chartData && (
          <ChartComponent data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default EmissionsChart;
