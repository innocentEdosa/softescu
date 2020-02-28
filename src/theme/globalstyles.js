import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#d1c4e9',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
