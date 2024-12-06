import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import "./Dashboard.css";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>BudgetStars</h1>
        <UserButton />
      </header>
      
      <div className="dashboard-content">
        <h2>Welcome to your Dashboard!</h2>
        <p>Manage your finances efficiently with BudgetStars!</p>
        
        <div className="feature-previews">
          <Link to="/budget-setup" className="feature-card">
            <h3>Budget Setup & Tracking</h3>
            <p>Set up your budget and track it over time.</p>
          </Link>
          <Link to="/expense-logging" className="feature-card">
            <h3>Expense Logging & Categorization</h3>
            <p>Log your expenses and categorize them for insights.</p>
          </Link>
          <Link to="/spending-limits" className="feature-card">
            <h3>Spending Limits & Notifications</h3>
            <p>See spending limits and receive notifications.</p>
          </Link>
          <Link to="/reports" className="feature-card">
            <h3>Reports & Visualization</h3>
            <p>Get detailed reports on your spending patterns.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;