import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  showArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing(60),
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
  },
  deleteProductButtonWrapper: {
    width: '100%',
    display: 'flex',
    margin: theme.spacing(2),
    justifyContent: 'center',
    '& .firstButton': {
      marginRight: theme.spacing(2),
    },
  },
  emp: {
    color: '#a30808',
  },
}));

export default useStyles;
