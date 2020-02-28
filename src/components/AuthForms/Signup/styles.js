import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControlInline: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > *': {
      width: '49%',
    },
  },
  loaderWrapper: {
    display: 'flex',
    '& .MuiCircularProgress-root': {
      width: '25px',
    },
  },
  prompt: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

export default useStyles;
