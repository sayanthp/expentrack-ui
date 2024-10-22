import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../pages/HomePage';
import TransactionsPage from '../pages/TransactionsPage';
import ProfilePage from '../pages/ProfilePage';
import BudgetPage from '../pages/BudgetPage';
import ReportsPage from '../pages/ReportsPage';
import About from '../components/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/signout" element={<SignIn />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
