import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext'; 
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';



function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
