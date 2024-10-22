import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './components/Theme';
import AppRoutes from './routes/AppRoutes';



function App() {
  
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
