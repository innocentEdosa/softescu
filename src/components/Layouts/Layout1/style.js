import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  layout1: {
    display: 'flex',
    background: theme.palette.sub.main,
    height: 'calc(100% - 48px)',
  },
  layout1Main: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
}));

export default useStyles;
