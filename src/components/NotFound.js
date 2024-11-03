import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh', textAlign: 'center'}}
        >
            <Typography variant="h1" component="h1" color="primary" sx={{ fontSize: '5rem' }}>
                404
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Oops! Page not found.
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
