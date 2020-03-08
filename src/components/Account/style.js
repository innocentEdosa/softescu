import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    height: 'calc(100vh - 64px)',
    marginTop: '64px',
    padding: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'start',
  },
  accountWrapper: {
    border: theme.border.main,
    width: '50%',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  avatar: {
    background: theme.palette.primary.dark,
    height: theme.spacing(15),
    width: theme.spacing(15),
    fontSize: theme.spacing(8),
  },
  label: {
    marginRight: theme.spacing(3),
  },
  details: {
    display: 'flex',

  },
}));

export default useStyles;
