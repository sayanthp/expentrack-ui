import React from 'react';
import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ handleAddRecord }) => {
  return (
    <IconButton
      color="primary"
      onClick={handleAddRecord}  // Passing the onClick handler as a prop
      sx={{
        padding: '10px',  // Adjust padding for the icon button
        borderRadius: '50%',  // Circular button
        backgroundColor: '#1976d2',  // Matching the button color
        '&:hover': {
          backgroundColor: '#1565c0',  // Slightly darker color on hover
        },
      }}
    >
      <AddIcon sx={{ fontSize: '36px', color: 'white' }} /> {/* Larger icon for emphasis */}
    </IconButton>
  );
};

export default AddButton;
