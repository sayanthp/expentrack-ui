import React, { useState } from 'react';
import { Paper, Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TransactionFilter = ({ onFilterChange }) => {
  // Internal filter state
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    category: '',
    transactionType: '',
    paymentMethod: '',
    searchQuery: '',
  });

  // Data for filters
  const categories = ['Food', 'Entertainment', 'Utilities', 'Freelance', 'Salary'];
  const transactionTypes = ['Income', 'Expense'];
  const paymentMethods = ['Cash', 'Card', 'Bank Transfer'];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = { ...filter, [name]: value };
    setFilter(updatedFilter);
    onFilterChange(updatedFilter);  // Pass the updated filter to the parent
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filter Transactions
      </Typography>
      <Grid container spacing={2}>
        {/* Date Range */}
        <Grid item xs={12} sm={4}>
          <TextField
            label="Start Date"
            type="date"
            name="startDate"
            value={filter.startDate}
            onChange={handleFilterChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="End Date"
            type="date"
            name="endDate"
            value={filter.endDate}
            onChange={handleFilterChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Category Filter */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={filter.category}
              onChange={handleFilterChange}
              name="category"
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Transaction Type Filter */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Transaction Type</InputLabel>
            <Select
              value={filter.transactionType}
              onChange={handleFilterChange}
              name="transactionType"
            >
              <MenuItem value="">All Types</MenuItem>
              {transactionTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Payment Method Filter */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={filter.paymentMethod}
              onChange={handleFilterChange}
              name="paymentMethod"
            >
              <MenuItem value="">All Methods</MenuItem>
              {paymentMethods.map((method) => (
                <MenuItem key={method} value={method}>
                  {method}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Search Filter */}
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search by Merchant"
            name="searchQuery"
            value={filter.searchQuery}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransactionFilter;
