import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Budget = ({ onSetBudget }) => {
  const [budget, setBudget] = useState({
    food: '',
    rent: '',
    entertainment: '',
    groceries: '',
    utilities: '', // Changed 'transport' to 'utilities'
  });

  // Handle changes in the text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if all fields are filled in
    if (Object.values(budget).every((amount) => amount !== '')) {
      // Convert the budget data to an array of objects with 'category' and 'amount'
      const formattedBudget = Object.keys(budget).map((key) => ({
        category: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the category name
        amount: parseFloat(budget[key]),
      }));
      onSetBudget(formattedBudget); // Pass budget to the parent component
      alert('Budget set successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Monthly Budget
      </Typography>
      <Paper sx={{ padding: 3 }}>
        {/* Form wrapper around the entire budget input area */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Food"
                variant="outlined"
                margin="normal"
                name="food"
                value={budget.food}
                onChange={handleChange}
                type="number"
                placeholder="Enter food budget"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Rent"
                variant="outlined"
                margin="normal"
                name="rent"
                value={budget.rent}
                onChange={handleChange}
                type="number"
                placeholder="Enter rent budget"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Entertainment"
                variant="outlined"
                margin="normal"
                name="entertainment"
                value={budget.entertainment}
                onChange={handleChange}
                type="number"
                placeholder="Enter entertainment budget"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Groceries"
                variant="outlined"
                margin="normal"
                name="groceries"
                value={budget.groceries}
                onChange={handleChange}
                type="number"
                placeholder="Enter groceries budget"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Utilities"
                variant="outlined"
                margin="normal"
                name="utilities" // Changed name to 'utilities'
                value={budget.utilities} // Updated to reflect new field
                onChange={handleChange}
                type="number"
                placeholder="Enter utilities budget" // Updated placeholder
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'right', marginTop: 2 }}>
              <Button
                variant="contained"
                type="submit" // This triggers form submission
                sx={{ padding: '10px 20px' }}
              >
                Set Budget
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Budget;

