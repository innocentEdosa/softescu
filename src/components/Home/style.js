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
      '& .buyNowBtn': {
        background: theme.palette.button.cart,
        color: '#fff',
      },
      '& .strike': {
        textDecoration: 'line-through',
      },
    },
  },
  emp: {
    color: 'red',
    paddingLeft: theme.spacing(1),
    margin: '0px',
  },
}));

export default useStyles;
