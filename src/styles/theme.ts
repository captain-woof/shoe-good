import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#c9011b',
    },
    secondary: {
      main: '#FFF689',
    }
  },
  typography: {
    allVariants: {
      fontFamily: "'Lato', sans-serif"
    },
    h1: {
      fontFamily: "'Fugaz One', sans-serif"
    },
    h2: {
      fontFamily: "'Fugaz One', sans-serif"
    },
    h3: {
      fontFamily: "'Fugaz One', sans-serif"
    },
    h4: {
      fontFamily: "'Fugaz One', sans-serif"
    },
    h5: {
      fontFamily: "'Fugaz One', sans-serif"
    }
  }
});

export default theme;
