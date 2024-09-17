import { createTheme } from '@mui/material/styles';

export const globalTheme = (mode) => createTheme({
  palette: {
    mode: mode,
  },
  components: {

  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1368,
      xl: 1536,
    },
  }
});
