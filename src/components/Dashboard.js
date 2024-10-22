import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import ExpenseLinearChart from './ExpenseLinearChart';
import TransactionsTable from './TransactionsTable';
import TotalSummary from './TotalSummary';
import ExpensePieChart from './ExpensePieChart';
import ExpenseBarChart from './ExpenseBarChart';
import { useNavigate } from 'react-router-dom'; 
import AddButton from './AddButton';

const Dashboard = ({ handleTabChange }) => {

  const [reportData, setReportData] = useState([
    { category: 'Food', amount: 150 },
    { category: 'Rent', amount: 800 },
    { category: 'Entertainment', amount: 120 },
    { category: 'Transportation', amount: 60 },
  ]);

  // Sample data for the dashboard
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-10', description: 'Groceries', amount: -50 },
    { id: 2, date: '2023-10-09', description: 'Salary', amount: 2000 },
    { id: 3, date: '2023-10-08', description: 'Electricity Bill', amount: -100 },
    { id: 4, date: '2023-10-07', description: 'Dining Out', amount: -30 },
    { id: 5, date: '2023-10-06', description: 'Freelance Payment', amount: 500 },
  ]);

  // Calculate total income, total expenses, and net balance
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
  const netBalance = totalIncome + totalExpenses;

  const navigate = useNavigate(); 

  // Add a new record
  const handleAddRecord = () => {
    //navigate('/transactions');
    handleTabChange(null, 1); 
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>

      {/* Header with Dashboard Title and Add Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
        <Typography variant="h4" color="text.primary" >Dashboard</Typography>
        <AddButton handleAddRecord={handleAddRecord} />
      </Box>

      {/* Main Dashboard Grid */}
      <Grid container spacing={4}>
        
        {/* Expense Overview */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ paddingBottom: '10px' }}>Expense Overview</Typography>
            <ExpenseLinearChart />
          </Paper>
        </Grid>

        {/* Summary */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Summary</Typography>
            <TotalSummary />
          </Paper>
        </Grid>

        {/* Expense Pie Chart and Bar Chart aligned in the same row */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <ExpensePieChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <ExpenseBarChart data={reportData} />
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" color="text.primary" sx={{ paddingBottom: '10px' }}>
              Recent Transactions
            </Typography>
            <TransactionsTable />
          </Paper>
        </Grid>

      </Grid>

    </Container>
  );
};

export default Dashboard;
