import { React, useState } from 'react';
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
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signInUser } from '../service/UserService';
import ToastSnackbar from './ToastSnackbar';
import { validateEmail } from '../utils/AppUtility';


const SignIn = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value ? '' : `${name} is required.`,
        }));
    };


    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    const handleToastClose = () => {
        setToastOpen(false);
    };

    const handleSignIn = async (e) => {

        e.preventDefault();
        const validateResult = validateEmail(userData.email);

        if (!validateResult.success) {
            setToastMessage(validateResult.message);
            setToastType('error');
            setToastOpen(true);
            return;
        }


        const response = await signInUser(userData);
        if (response.success) {
            signIn(response.body);
            setToastMessage(response.message);
            setToastType('success');
            setToastOpen(true);
            setTimeout(() => {navigate('/dashboard');},3000);
        } else {
            setToastMessage(response.message);
            setToastType('error');
            setToastOpen(true);
        }

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
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        value={userData.email}
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
                        onChange={handleChange}
                        value={userData.password}
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

                    <ToastSnackbar
                        toastOpen={toastOpen}
                        toastMessage={toastMessage}
                        toastType={toastType}
                        handleToastClose={handleToastClose}
                    />

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