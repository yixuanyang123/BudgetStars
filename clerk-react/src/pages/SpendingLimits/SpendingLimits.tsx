import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./SpendingLimits.css";

// Register necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SpendingLimitsPage: React.FC = () => {
  const navigate = useNavigate();
  const spendingData = [
    { category: "Food", maxBudget: 500, currentSpending: 400 },
    { category: "Clothing", maxBudget: 200, currentSpending: 150 },
    { category: "Education", maxBudget: 300, currentSpending: 200 },
    { category: "Entertainment", maxBudget: 250, currentSpending: 80 },
    { category: "Health", maxBudget: 400, currentSpending: 380 },
  ];

  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const newAlerts = spendingData
      .filter(
        (item) =>
          item.currentSpending >= item.maxBudget * 0.8 &&
          item.currentSpending < item.maxBudget
      )
      .map(
        (item) =>
          `Warning: You are within 20% of the spending limit for ${item.category}.`
      );

    setAlerts(newAlerts);
  }, [spendingData]);

  // Prepare data for the chart
  const chartData = {
    labels: spendingData.map((item) => item.category),
    datasets: [
      {
        label: "Max Budget",
        data: spendingData.map((item) => item.maxBudget),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Current Spending",
        data: spendingData.map((item) => item.currentSpending),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Spending vs. Budget",
        font: {
          size: 20
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
  };

  return (
    <div className="feature-page">
      <header className="header">
        <h2>Spending Limits & Notifications</h2>
        <p>See limits and get notifications as you approach them.</p>
      </header>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
      {alerts.length > 0 && (
        <div className="alert-box">
          {alerts.map((alert, index) => (
            <p key={index}>{alert}</p>
          ))}
        </div>
      )}

      <button className="home-button" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>

    </div>
  );
};

export default SpendingLimitsPage;
