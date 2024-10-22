import React, { useState } from 'react';
import { Box, Paper, Typography, Container, Grid } from '@mui/material';
import Budget from '../components/Budget';
import ExpensePieChart from '../components/ExpensePieChart';

const BudgetPage = () => {
  // Updated to include all expected categories: Food, Rent, Entertainment, Groceries, and Utilities
  const [budgetData, setBudgetData] = useState([
    { category: 'Food', amount: 150 },
    { category: 'Rent', amount: 800 },
    { category: 'Entertainment', amount: 120 },
    { category: 'Groceries', amount: 100 },  // Added "Groceries"
    { category: 'Utilities', amount: 60 },    // Changed from 'Transportation' to 'Utilities'
  ]);

  // Function to handle setting the budget
  const handleSetBudget = (newBudget) => {
    setBudgetData(newBudget);  // Make sure the newBudget structure is correct
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom sx={{textAlign:'center',paddingBottom:'20px'}}>
          Manage Your Budget
        </Typography>

        {/* Grid layout for Pie Chart and Budget Input */}
        <Grid container spacing={3}>
          {/* Pie chart above the form */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, height: '100%' }}>
              {/* Provide static data or dynamic budgetData as props */}
              <ExpensePieChart data={budgetData} />
            </Paper>
          </Grid>

          {/* Budget form below the chart */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, height: '100%' }}>
              <Budget onSetBudget={handleSetBudget} />
            </Paper>
          </Grid>

          
        </Grid>

        {/* Budget Summary */}
        {budgetData.length > 0 ? (
          <Paper sx={{ padding: 3, marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Budget Summary
            </Typography>
            <Grid container spacing={2}>
              {budgetData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6}>
                  <Typography variant="body1">
                    {item.category}: ${item.amount}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        ) : (
          <Paper sx={{ padding: 3, marginTop: 3 }}>
            <Typography variant="body1">Please set your budget to view the summary.</Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default BudgetPage;

