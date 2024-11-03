import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, AppBar } from '@mui/material';
import Dashboard from '../components/Dashboard'; // Assuming Dashboard component is defined in components
import ReportsPage from './ReportsPage';
import BudgetPage from './BudgetPage';
import TransactionsPage from './TransactionsPage';
import ProfilePage from './ProfilePage';
import NotificationPage from './NotificationPage';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Dashboard icon
import ReceiptIcon from '@mui/icons-material/Receipt'; // Transactions icon
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Budget icon
import BarChartIcon from '@mui/icons-material/BarChart'; // Reports icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Notifications icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import InfoIcon from '@mui/icons-material/Info'; // About icon
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Logout icon
import About from '../components/About';
import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {

  const { signOut } = useContext(AuthContext);

  const navigate = useNavigate(); 
  const [tabValue, setTabValue] = useState(0); // State to manage which tab is selected

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue); // Set the active tab when a tab is clicked
  };

  const handleLogout = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '24px',
          minHeight: '100vh',
          overflow: 'hidden', // Prevent scrolling of the main container itself
        }}
      >
        {/* AppBar - Tabs Section */}
        <AppBar
          position="sticky"
          sx={{
            zIndex: 1, // Ensure it appears above the content
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
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
            <Tab icon={<InfoIcon />} aria-label="About" /> {/* About Tab */}
            <Tab
              icon={<ExitToAppIcon />}
              aria-label="Logout"
              onClick={handleLogout} // Handle logout click
            /> {/* Logout Tab */}
          </Tabs>
        </AppBar>

        {/* Content Section - Scrollable Below Tabs */}
        <Box
          sx={{
            flexGrow: 1, // Take up remaining space below the sticky AppBar
            overflowY: 'auto', // Enable scrolling for content when it overflows
            paddingTop: '20px', // Space between the tabs and content
          }}
        >
          {/* Render content based on selected tab */}
          {tabValue === 0 && (
            <Typography variant="h5" gutterBottom>
              <Dashboard handleTabChange={handleTabChange} />
            </Typography>
          )}

          {tabValue === 1 && (
            <Typography variant="h5" gutterBottom>
              <TransactionsPage />
            </Typography>
          )}

          {tabValue === 2 && (
            <Typography variant="h5" gutterBottom>
              <BudgetPage />
            </Typography>
          )}

          {tabValue === 3 && (
            <Typography variant="h5" gutterBottom>
              <ReportsPage />
            </Typography>
          )}

          {tabValue === 4 && (
            <Typography variant="h5" gutterBottom>
              <NotificationPage />
            </Typography>
          )}

          {tabValue === 5 && (
            <Typography variant="h5" gutterBottom>
              <ProfilePage />
            </Typography>
          )}

          {tabValue === 6 && (
            <Typography variant="h5" gutterBottom>
              <About />
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
