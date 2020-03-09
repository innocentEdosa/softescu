import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: '64px',
    padding: theme.spacing(5),
  },
  showcase: {
    height: theme.spacing(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '5rem',
    background: 'linear-gradient(to left, #434343, #000000)',
  },
  title: {
    display: 'none',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .title-main': {
        color: theme.palette.secondary.dark,
        display: 'flex',
        alignItems: 'center',
        '& > .MuiSvgIcon-root': {
          marginRight: '1rem',
        },
      },
    },
  },
  descriptions: {
    margin: theme.spacing(4),
    '& .description': {
      margin: theme.spacing(4),
    },
  },
}));

export default useStyles;
