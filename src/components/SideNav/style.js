import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    '& .MuiIconButton-root': {
      color: '#fff',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100%',
    top: 'auto',

    '& .MuiDrawer-paper': {
      position: 'relative',
      background: theme.palette.primary.dark,
      color: theme.palette.text.preActive,
    },
    '& .MuiListItem-root': {
      color: 'inherit',
      '&:hover': {
        color: theme.palette.text.light,
        background: theme.palette.primary.light,
      },
    },
    '& .MuiListItemIcon-root': {
      color: 'inherit',
    },
    '& .activeList': {
      color: theme.palette.text.light,
      background: theme.palette.primary.light,
    },

  },
  drawerOpen: {
    overflowX: 'hidden',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  listIconWrapper: {
    fontSize: '1.5rem',
    paddingLeft: '5px',
  },
  listText: {
    fontSize: '1rem',
  },
}));

export default useStyles;
