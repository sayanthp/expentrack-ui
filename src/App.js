import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './components/Theme';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';



function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
