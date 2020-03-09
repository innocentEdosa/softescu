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
      flexGrow: 1,
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
