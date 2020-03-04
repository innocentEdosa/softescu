import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: '64px',
    padding: theme.spacing(5),
  },
  // showCase: {
  //   height: '40vh',
  //   background: 'linear-gradient(to right, rgb(67, 67, 67), rgb(0, 0, 0))',
  //   display: 'flex',
  //   position: 'relative',

  //   '&::before': {
  //     content: "''",
  //     background: "url('/assets/07.png')",
  //     opacity: 0.4,
  //     top: 0,
  //     left: 0,
  //     bottom: 0,
  //     right: 0,
  //     position: 'absolute',
  //     zIndex: 1,
  //     backgroundSize: '100%',
  //     backgroundPosition: 'center',
  //     backgroundRepeat: 'no-repeat',
  //   },
  // },
  // showCaseImg: {
  //   zIndex: 2,
  //   flexBasis: '50%',
  //   height: '100%',
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(4),
  //   '& img': {
  //     width: '50%',
  //   },
  // },
  // bookDetails: {
  //   color: 'white',
  //   display: 'flex',
  //   alignItems: 'center',
  //   flexGrow: 1,

  // },
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
