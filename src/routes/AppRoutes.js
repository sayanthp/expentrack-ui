import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../pages/HomePage';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import NotFound from '../components/NotFound';

const AppRoutes = () => {

  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/signin"
        element={user ? <Navigate to="/dashboard" /> : <SignIn />}
      />
      <Route path="/dashboard" element={<ProtectedRoute element={<Home />} user={user} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signout" element={<SignIn />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
