// src/components/ProfileComponent.js

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
} from '@mui/material';

const Profile = ({ userProfile, onSaveProfile, onEditProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSaveProfile(profile);
    setIsEditing(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>

      {/* Profile Picture */}
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Avatar
          alt="Profile Picture"
          src={profile.profilePicture}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        {isEditing && (
          <input
            accept="image/*"
            type="file"
            id="profile-picture-upload"
            style={{ display: 'none' }}
            onChange={(e) => handleInputChange(e)}
          />
        )}
        {isEditing && (
          <label htmlFor="profile-picture-upload">
            <Button variant="contained" component="span">
              Upload Picture
            </Button>
          </label>
        )}
      </Box>

      {/* Profile Info */}
      <Box>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          disabled={!isEditing}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />

        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          name="phone"
          value={profile.phone}
          onChange={handleInputChange}
          disabled={!isEditing}
        />

        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          margin="normal"
          name="address"
          value={profile.address}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </Box>

      {/* Divider */}
      <Divider sx={{ marginY: 2 }} />

      {/* Buttons for Editing/Save */}
      <Box sx={{ textAlign: 'right' }}>
        {!isEditing ? (
          <Button variant="outlined" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
