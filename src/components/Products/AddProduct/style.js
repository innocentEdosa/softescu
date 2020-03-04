import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addBookWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addBookForm: {
    borderRadius: theme.spacing(1),
    border: theme.border.main,
    width: '70%',
    padding: theme.spacing(4),
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  premiumTrack: {
    flexDirection: 'row-reverse',
    marginLeft: '4px',
  },
  addBookButtonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  addBookImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    overflowY: 'scroll',
    '& img': {
      width: '100%',
    },
  },

}));

export default useStyles;
