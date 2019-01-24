import { createMuiTheme } from '@material-ui/core/styles';

export const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#0275d8'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  },
  sidebarWidth: 240
});
