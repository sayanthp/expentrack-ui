// NotificationPage.js
import React, { useState } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import NotificationItem from '../components/NotificationItem';  // Import the NotificationItem component

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New payment", details: "You have received a payment of $500 from John." },
    { id: 2, title: "Profile update", details: "Your profile was successfully updated." },
    { id: 3, title: "New message", details: "You have a new message from Support." },
  ]);

  // Handle deleting an individual notification
  const handleDelete = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  // Handle clearing all notifications
  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
    <Box sx={{ padding: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{textAlign:'center',paddingBottom:'20px'}} gutterBottom>
        Notifications
      </Typography>
      
      {/* Render individual notifications */}
      {notifications.length === 0 ? (
        <Typography>No Notifications</Typography>
      ) : (
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onDelete={handleDelete}
          />
        ))
      )}

     {/* Clear All Button */}
     {notifications.length > 0 && (
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClearAll}
              sx={{ padding: '10px 20px' }}
            >
              Clear All
            </Button>
          </Box>
        )}

        
      
    </Box>

    

    </Container>
  );
};

export default NotificationPage;
