import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  productListWrapper: {
    padding: theme.spacing(2),
    width: '80%',
  },
  listIconWrapper: {
    fontSize: '18px',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    color: theme.palette.button.preActive,

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
