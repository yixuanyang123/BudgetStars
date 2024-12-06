import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignIn.tsx";
import DashboardPage from "./pages/Dashboard/Dashboard.tsx";
import BudgetSetupPage from "./pages/BudgetSetup/BudgetSetup.tsx";
import ExpenseLoggingPage from "./pages/ExpenseLogging/ExpenseLogging.tsx";
import SpendingLimitsPage from "./pages/SpendingLimits/SpendingLimits.tsx";
import ReportsPage from "./pages/Reports/Reports.tsx";
import ProtectedRoute from "./assets/ProtectedRoute/ProtectedRoute.tsx";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>

        <Route path="*" element={<Navigate to="/sign-in" replace />} />

        <Route path="/sign-in" element={<SignInPage />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}/>
        <Route path="/budget-setup" element={<ProtectedRoute><BudgetSetupPage/></ProtectedRoute>}/>
        <Route path="/expense-logging" element={<ProtectedRoute><ExpenseLoggingPage/></ProtectedRoute>}/>
        <Route path="/spending-limits" element={<ProtectedRoute><SpendingLimitsPage/></ProtectedRoute>}/>
        <Route path="/reports" element={<ProtectedRoute><ReportsPage/></ProtectedRoute>}/>



      </Routes>
    </Router>
  );
};

export default App;
