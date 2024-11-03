import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    mode: 'light', // Enables light mode
    background: {
      default: '#ffffff', // Set the app background color to white
      paper: '#f5f5f5',   // Set paper-like components to a light shade
    },
    text: {
      primary: '#000000',  // Black text for readability
    },
  },
  components: {
    // Optionally override other components' styles if needed
  },
});

export default LightTheme;
