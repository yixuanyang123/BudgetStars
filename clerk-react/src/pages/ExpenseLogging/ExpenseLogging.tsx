import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpenseLogging.css";

interface Expense {
  amount: number;
  description: string;
  category: string;
  date: string;
}

const ExpenseLoggingPage: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("food");
  const [date, setDate] = useState<string>("");
  const [expenseHistory, setExpenseHistory] = useState<Expense[]>([]);

  /* This function should communicate with the backend as well*/
  const handleLogExpense = () => {
    if (!amount || !description || !date) {
      alert("Please fill out all fields before logging the expense.");
      return;
    }

    const newExpense: Expense = {
      amount: Number(amount),
      description,
      category,
      date,
    };

    setExpenseHistory([newExpense, ...expenseHistory]);
    alert(`Expense logged: $${amount} for ${description} in ${category} category.`);
    setAmount("");
    setDescription("");
    setCategory("food");
    setDate("");
  };

  return (
    <div className="feature-page">
      <h2>Expense Logging & Categorization</h2>
      <p>Log your expenses and categorize them for insights.</p>

      <div className="expense-logging-container">
        <div className="expense-form">
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
            </select>
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="log-button" onClick={handleLogExpense}>
            Log Expense
          </button>
        </div>

        <div className="expense-history-container">
          <h3>Recently Logged Expenses</h3>
          <ul className="expense-history">
            {expenseHistory.length > 0 ? (
              expenseHistory.map((expense, index) => (
                <li key={index}>
                  <p>
                    <strong>${expense.amount.toFixed(2)}</strong> for{" "}
                    <em>{expense.description}</em> in the <em>{expense.category}</em> category on{" "}
                    {new Date(expense.date).toLocaleDateString("en-US")}
                  </p>
                </li>
              ))
            ) : (
              <p>No expenses logged yet.</p>
            )}
          </ul>
        </div>
      </div>

      <button className="dashboard-button" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

    </div>
  );
};

export default ExpenseLoggingPage;

