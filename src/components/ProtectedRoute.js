import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, user }) => {
    return element;
    //return user ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
