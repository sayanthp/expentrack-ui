import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    background: {
      default: '#000000', // Set the app background color to black
      paper: '#121212',  // Set paper-like components (e.g., cards) to a dark shade
    },
    text: {
      primary: '#ffffff',  // White text for readability
    },
  },
  components: {
    // Optionally override other components' styles if needed
  },
});

export default DarkTheme;
