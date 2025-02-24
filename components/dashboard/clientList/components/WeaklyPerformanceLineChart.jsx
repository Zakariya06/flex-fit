"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export default function WeekPerformanceLineChart() {
  const labels = ["M", "T", "W", "T", "F", "S", "S"]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [30, 45, 55, 65, 40, 50, 45],
        borderColor: "rgb(22, 219, 101)",
        backgroundColor: "rgba(22, 219, 101, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This is important for fixed height
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#666",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context) => `${context[0].label}`,
          label: (context) => `Value: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#2B2B2B",
          font: {
            size: 14,
            weight: "500",
            family: "'Inter', serif",
          },
          padding: 10,
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
        min: 0,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  }

  return (
    <div style={{ width: "100%", position: "relative", height: "150px" }}>
      <style jsx>{`
        div {
          font-family: "Inter", serif;
        }
      `}</style>
      <Line options={options} data={data} />
    </div>
  )
}

