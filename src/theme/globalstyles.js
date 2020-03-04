import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#d1c4e9',
    },
    sub: {
      main: '#F6F9FF',
    },
    button: {
      cart: '#212121',
      buyNow: '#6C63FF',
      preActive: '#ccc',
    },
    text: {
      light: '#fff',
      preActive: '#eeeeee',
    },

  },
  border: {
    main: '1px solid #e0e0e0',
  },
});

export default theme;
