import React, { useState, useContext } from 'react';
import { Box, Tabs, Tab, AppBar, CircularProgress } from '@mui/material';
import Dashboard from '../components/Dashboard';
import ReportsPage from './ReportsPage';
import BudgetPage from './BudgetPage';
import TransactionsPage from './TransactionsPage';
import ProfilePage from './ProfilePage';
import NotificationPage from './NotificationPage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import About from '../components/About';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/AuthContext';
import ThemeToggleButton from '../components/ThemeToggle';

const HomePage = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    if (newValue !== 8 ) {
      setTabValue(newValue);
    }
  };

  const handleLogout = () => {
    setLoading(true);
    signOut();
    setTimeout(() => {
      navigate('/signin');
      setLoading(false);
    },800);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '24px',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <AppBar position="sticky" sx={{ zIndex: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            sx={{ paddingLeft: '10px', paddingRight: '10px' }}
          >
            <Tab icon={<DashboardIcon />} aria-label="Dashboard" />
            <Tab icon={<ReceiptIcon />} aria-label="Transactions" />
            <Tab icon={<AccountBalanceIcon />} aria-label="Budget" />
            <Tab icon={<BarChartIcon />} aria-label="Reports" />
            <Tab icon={<NotificationsIcon />} aria-label="Notifications" />
            <Tab icon={<AccountCircleIcon />} aria-label="Profile" />
            <Tab icon={<InfoIcon />} aria-label="About" />
            <Tab icon={<ExitToAppIcon />} aria-label="Logout" onClick={handleLogout} />
            <Tab icon={<ThemeToggleButton />} />
          </Tabs>

          

        </AppBar>

        <Box sx={{ flexGrow: 1, overflowY: 'auto', paddingTop: '20px' }}>
          {tabValue === 0 && <Dashboard handleTabChange={handleTabChange} />}
          {tabValue === 1 && <TransactionsPage />}
          {tabValue === 2 && <BudgetPage />}
          {tabValue === 3 && <ReportsPage />}
          {tabValue === 4 && <NotificationPage />}
          {tabValue === 5 && <ProfilePage />}
          {tabValue === 6 && <About />}
        </Box>

        {/* Loader for Logout Process */}
      {loading && (
        <Box
          sx={{
            position: 'fixed', // Changed to fixed to cover the entire screen
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0, 0.8)', // Optional: semi-transparent background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <CircularProgress sx={{ color: 'purple' }}/>
        </Box>
      )}


      </Box>
    </Box>
  );
};

export default HomePage;
