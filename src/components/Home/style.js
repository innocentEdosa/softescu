import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: '64px',
    padding: theme.spacing(5),
  },
  showCase: {
    display: 'flex',

    '& .bookList': {
      padding: theme.spacing(2),
      flexBasis: '75%',

      '& .bookDescription': {
        paddingBottom: '0px',
      },

      '& .addToCartBtn': {
        fontSize: '17px',
        background: theme.palette.button.cart,
        color: '#fff',
      },
      '& .buyNowBtn': {
        background: theme.palette.button.buyNow,
        color: '#fff',
      },
      '& .book': {
        background: 'tomato',
        width: '100%',
      },
    },
    '& .premiumBooks': {
      margin: theme.spacing(2),
      marginLeft: theme.spacing(4),
      padding: theme.spacing(2),
      flexBasis: '25%',
      border: '1px solid #ccc',
    },
  },
}));

export default useStyles;
