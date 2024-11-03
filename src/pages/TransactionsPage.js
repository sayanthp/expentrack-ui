import React, { useState } from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';
import AddTransaction from '../components/AddTransaction'; 

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]); 
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    category: '',
    transactionType: '',
    paymentMethod: '',
    searchQuery: '',
  });


  // Function to handle adding a transaction
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to handle the filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter transactions based on filter criteria
  const filteredTransactions = transactions.filter((transaction) => {
    const { startDate, endDate, category, transactionType, paymentMethod, searchQuery } = filter;
    return (
      (startDate ? new Date(transaction.date) >= new Date(startDate) : true) &&
      (endDate ? new Date(transaction.date) <= new Date(endDate) : true) &&
      (category ? transaction.category === category : true) &&
      (transactionType ? transaction.transactionType === transactionType : true) &&
      (paymentMethod ? transaction.paymentMethod === paymentMethod : true) &&
      (searchQuery ? transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) : true)
    );
  });

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',paddingBottom:'20px'}}>
        Manage Transactions
      </Typography>
     

      {/* Add Transaction Form */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Transaction
        </Typography>
        <AddTransaction onSubmit={handleAddTransaction} />
      </Paper>

      

      
    </Box>
    </Container>
  );
};

export default TransactionsPage;
