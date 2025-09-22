"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
);

const courseProgressData = {
  datasets: [
    {
      data: [26, 74],
      backgroundColor: ["#567D4A", "#5F8B4C"],
      borderWidth: 0,
      cutout: "60%",
    },
  ],
};

const courseProgressConfig = {
  type: "doughnut" as const,
  data: courseProgressData,
  options: {
    aspectRatio: 2,
    circumference: 180,
    rotation: -90,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const activityData = {
  labels: ["S", "M", "T", "W", "T", "F"],
  datasets: [
    {
      label: "Activity",
      data: [1, 2, 1.5, 3, 2.5, 3.5],
      borderColor: "#567D4A",
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#567D4A",
      pointBorderColor: "#567D4A",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const activityConfig = {
  type: "line" as const,
  data: activityData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: "transparent",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: { dataIndex: number }) => {
            if (context.dataIndex === 4) {
              return "3,5 Часа";
            }
            return "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#f3f4f6",
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          stepSize: 1,
          color: "#6b7280",
          callback: function (value: string | number) {
            if (value === 0) return "";
            return value;
          },
        },
        grid: {
          display: false,
        },
      },
    },
  },
};

export const CourseProgressChart = () => (
  <div className="flex items-center justify-center">
    <div className="relative" style={{ width: "400px", height: "200px" }}>
      <Doughnut {...courseProgressConfig} />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ pointerEvents: "none" }}
      >
        <div className="absolute left-8 top-8 text-xl text-[#616161] font-bold bg-white py-[13px] px-[6px] rounded-full">
          26%
        </div>
        <div className="text-center">
          <div className="absolute top-17 left-[170px] bg-white text-[#616161] px-[4px] py-[3.5px] rounded-full text-sm font-medium mb-2">
            ↑ 2.6%
          </div>
          <div className=" absolute bottom-3 left-[135px] text-sm text-white font-semibold">
            Magna finibus turpis
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ActivityChart = () => (
  <div style={{ height: "200px" }}>
    <Line {...activityConfig} />
  </div>
);
