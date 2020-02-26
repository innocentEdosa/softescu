import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  loaderWrapper: {
    display: 'flex',
    '& .MuiCircularProgress-root': {
      width: '25px',
    },
  },
  loginForm: {
    '& .MuiFormControl-marginNormal': {
      marginBottom: '1rem',
    },
  },
  prompt: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

export default useStyles;
