import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import { useNavigate } from 'react-router-dom'; 


const SignIn = () => {

    const navigate = useNavigate(); 

    const handleSignIn = () => {
        navigate('/');
        alert("Logged In!");
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ marginTop: 8 }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome back! Sign In
                </Typography>
                <Box
                    component="form"
                    sx={{ width: '100%', mt: 1 }}
                    noValidate
                >
                    {/* Email Input */}

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    {/* Password Input */}

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    {/* Remember Me Checkbox */}

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    {/* Sign In Button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSignIn}
                    >
                        Sign In

                    </Button>


                    {/* Links */}

                    <Grid container>
                        <Grid item xs>
                            <Link href="/" variant="body2">
                                Forgot password?
                            </Link>

                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Don't have an account? Sign Up
                            </Link>

                        </Grid>
                    </Grid>


                </Box>
            </Box>

            {/* Copyright Section */}
            <Box mt={8}>
                <Copyright />
            </Box>
            
        </Container>
    );
}

export default SignIn;