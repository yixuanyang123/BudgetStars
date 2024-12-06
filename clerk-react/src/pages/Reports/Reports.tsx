import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Reports.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ReportsPage: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"days" | "weeks" | "months">("days");
  const [labels, setLabels] = useState<string[]>([]);

  /* The three lines below this currently have example data, they should utilize real data from our database*/ 
  const [dailySpending, setDailySpending] = useState<number[]>([50, 75, 30, 100, 45, 80, 60]);            
  const [weeklySpending, setWeeklySpending] = useState<number[]>([500, 600, 450, 700, 650, 620, 680]);
  const [monthlySpending, setMonthlySpending] = useState<number[]>([2000, 2200, 2100, 2300, 2250, 2400, 2450]);
  

  const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
    date.toLocaleDateString("en-US", options || { month: "short", day: "numeric" });

  useEffect(() => {
    const today = new Date();
    if (view === "days") {
      setLabels(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
    } else if (view === "weeks") {
      const weeks = Array.from({ length: 7 }, (_, i) => {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - i * 7);
        return `Week of ${formatDate(startOfWeek)}`;
      }).reverse();
      setLabels(weeks);
    } else if (view === "months") {
      const months = Array.from({ length: 7 }, (_, i) => {
        const startOfMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
        return `${startOfMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`;
      }).reverse();
      setLabels(months);
    }
  }, [view]);

  const data = {
    labels,
    datasets: [
      {
        label:
          view === "days" ? "Daily Spending ($)" : view === "weeks" ? "Weekly Spending ($)" : "Monthly Spending ($)",
        data:
          view === "days"
            ? dailySpending
            : view === "weeks"
            ? weeklySpending
            : monthlySpending,
        borderColor: "#0070f3",
        backgroundColor: "rgba(0, 112, 243, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#0070f3",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        callbacks: { label: (context: any) => `$${context.raw}` },
        bodyFont: { size: 14 },
        titleFont: { size: 16 },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: view === "days" ? "Days of the Week" : view === "weeks" ? "Weeks" : "Months",
          font: { size: 18 },
        },
        ticks: { font: { size: 14 } },
      },
      y: {
        title: {
          display: true,
          text: "Spending ($)",
          font: { size: 18 },
        },
        ticks: { font: { size: 14 } },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="feature-page">
      <h2>Reports & Visualization</h2>
      <p>View reports and visual insights into your spending patterns.</p>

      <div className="toggle-buttons">
        <button onClick={() => setView("days")} className={view === "days" ? "active" : ""}>
          Past 7 Days
        </button>
        <button onClick={() => setView("weeks")} className={view === "weeks" ? "active" : ""}>
          Past 7 Weeks
        </button>
        <button onClick={() => setView("months")} className={view === "months" ? "active" : ""}>
          Past 7 Months
        </button>
      </div>

      <div className="report-chart-container">
        <Line data={data} options={chartOptions} />
      </div>

      <button className="home-button" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>

    </div>
  );
};

export default ReportsPage;



