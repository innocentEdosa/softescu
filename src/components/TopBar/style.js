import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .title-main': {
        color: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        '& > .MuiSvgIcon-root': {
          marginRight: '1rem',
        },
      },
    },
  },
  navButtonRoot: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default useStyles;
