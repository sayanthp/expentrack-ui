import React, { useState } from 'react';
import { Box, Paper, Container } from '@mui/material';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, New York, NY 10001',
    profilePicture: '/static/images/avatar/1.jpg',
  });

  // Function to handle saving the profile after editing
  const handleSaveProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    alert('Profile updated!');
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Profile
          userProfile={userProfile}
          onSaveProfile={handleSaveProfile}
        />
      </Paper>
    </Box>
    </Container>
    
  );
};

export default ProfilePage;
