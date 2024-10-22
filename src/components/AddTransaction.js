import React, { useState } from 'react';
import { TextField, MenuItem, Button, Grid, Box, Typography, InputAdornment, Select, FormControl, InputLabel } from '@mui/material';

const AddTransactionForm = ({ onSubmit }) => {
    const [transactionData, setTransactionData] = useState({
        amount: '',
        date: '',
        category: '',
        transactionType: 'expense',
        paymentMethod: '',
        merchant: '',
        description: '',
        tags: '',
        city: '',
        country: '',
        notes: '',
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can validate the form or add other checks here before submitting
        onSubmit(transactionData);
        setTransactionData({
            amount: '',
            date: '',
            category: '',
            transactionType: 'expense',
            paymentMethod: '',
            merchant: '',
            description: '',
            tags: '',
            city: '',
            country: '',
            notes: '',
        });
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransactionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Add New Transaction
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Amount */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Amount"
                            name="amount"
                            type="number"
                            value={transactionData.amount}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                            required
                        />
                    </Grid>

                    {/* Date */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Date"
                            name="date"
                            type="date"
                            value={transactionData.date}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    {/* Category */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={transactionData.category}
                                onChange={handleChange}
                                name="category"
                                required
                            >
                                <MenuItem value="Food">Food</MenuItem>
                                <MenuItem value="Entertainment">Entertainment</MenuItem>
                                <MenuItem value="Transport">Transport</MenuItem>
                                <MenuItem value="Utilities">Utilities</MenuItem>
                                <MenuItem value="Shopping">Shopping</MenuItem>
                                <MenuItem value="Rent">Rent</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Transaction Type */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Transaction Type</InputLabel>
                            <Select
                                value={transactionData.transactionType}
                                onChange={handleChange}
                                name="transactionType"
                                required
                            >
                                <MenuItem value="expense">Expense</MenuItem>
                                <MenuItem value="income">Income</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Payment Method */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Payment Method"
                            name="paymentMethod"
                            value={transactionData.paymentMethod}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* Merchant */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Merchant"
                            name="merchant"
                            value={transactionData.merchant}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* Description */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={transactionData.description}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* Tags */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Tags (comma separated)"
                            name="tags"
                            value={transactionData.tags}
                            onChange={handleChange}
                        />
                    </Grid>



                    {/* Location - City */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={transactionData.city}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Location - Country */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={transactionData.country}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Notes */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Notes"
                            name="notes"
                            value={transactionData.notes}
                            onChange={handleChange}
                            multiline
                            rows={3}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Add Transaction
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </form>
        </Box>
    );
};

export default AddTransactionForm;
