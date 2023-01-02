import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2478B5'
    },
    secondary: {
      main: '#31AEE4'
    },
    error: {
      main: '#b5243c'
    },
    warning: {
      main: '#b5aa24'
    },
    info: {
      main: '#24a1b5'
    },
    success: {
      main: '#3ab524'
    },
    gray: {
      main: '#989898'
    },
    status: {
      green: '#0DA100',
      yellow: '#FFA800',
      red: '#ff0000'
    }
  },
  typography: {
    fontFamily: '"Mulish", sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          color: '#FFF',
          fontSize: '13px',
          textTransform: 'none'
        }
      }
    }
  }
});

export default theme;
