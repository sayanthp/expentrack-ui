import React, { useState } from 'react';
import { Box, Paper, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import Budget from '../components/Budget';
import ExpensePieChart from '../components/ExpensePieChart';

const BudgetPage = () => {

  const [budgetData, setBudgetData] = useState([]);

  const handleBudgetUpdate = (newBudgetData) => {
    setBudgetData(newBudgetData);
  };

  // Calculate total budget
  const totalBudget = budgetData.reduce((total, item) => total + item.amount, 0);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', paddingBottom: '20px' }}>
          Manage Your Budget
        </Typography>

        {/* Grid layout for Pie Chart and Budget Input */}
        <Grid container spacing={3}>
          {/* Pie chart above the form */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, height: '100%' }}>
              {/* Provide dynamic budgetData as props */}
              <ExpensePieChart data={budgetData} />
            </Paper>
          </Grid>

          {/* Budget form below the chart */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, height: '100%' }}>
              {/* Handle budget data from form */}
              <Budget onSetBudget={handleBudgetUpdate} />
            </Paper>
          </Grid>
        </Grid>

        {/* Budget Summary */}
        {budgetData.length > 0 ? (
          <Paper sx={{ padding: 3, marginTop: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Budget Summary
            </Typography>

            {/* Display total budget in INR */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'green' }}>
              Total Budget: ₹{totalBudget.toFixed(2)}
            </Typography>

            <Grid container spacing={2}>
              {budgetData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6}>
                  <Card sx={{ padding: 2, backgroundColor: '#000000', boxShadow: 1, borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        {item.category}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'gray' }}>
                        ₹{item.amount.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        ) : (
          <Paper sx={{ padding: 3, marginTop: 3, boxShadow: 1 }}>
            <Typography variant="body1" sx={{ color: 'gray' }}>
              Please set your budget to view the summary.
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default BudgetPage;
