import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ffc400',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
