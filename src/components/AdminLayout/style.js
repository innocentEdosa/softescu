import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    height: 'calc(100vh - 64px)',
    marginTop: '64px',
  },
  grow: {
    flexGrow: 1,
  },
  showSection: {
    flexGrow: 1,
    height: '100%',
  },
}));

export default useStyles;
