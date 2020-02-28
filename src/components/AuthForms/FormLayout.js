import React from 'react';
import PropTypes from 'prop-types';
import Alerts from 'components/Alerts';
import AlertEmitter from 'HOC/AlertEmitter';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ReactComponent as Booklover } from 'assets/booklover.svg';
import { ReactComponent as Reading } from 'assets/reading.svg';
import { ReactComponent as ReadingBook } from 'assets/readingBook.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: 'white',
  },
  formRoot: {
    padding: '3rem',
  },
  footer: {
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
  authSvgWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      transform: 'translateY(-12%)',
      width: '93%',
      height: '25rem',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const FormLayout = ({ children }) => {
  const icons = [Reading, Booklover, ReadingBook];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className={classes.formRoot}
        bgcolor="white"
      >
        <Box my={3}>
          <AlertEmitter emitterReference="mainNotification">
            {({
              show, content, severity, onClose,
            }) => (
              <Alerts
                open={show}
                content={content}
                severity={severity}
                onClose={onClose}
              />
            )}
          </AlertEmitter>
        </Box>
        <Box
          minWidth="50%"
          display="flex"
          border={1}
          boxShadow={2}
          borderColor="grey.200"
          borderRadius="borderRadius"
          padding={3}
          bgcolor="white"
        >
          <Box width="50%" padding={2}>
            <Box className={classes.authSvgWrapper} my={1}>
              <SvgIcon
                component={icons[Math.floor(Math.random() * 3)
                ]}
                viewBox="0 0 1100 700"
              />
            </Box>
            <Typography className={classes.heading} variant="h6" noWrap>
              ActiveLearning
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          {children}
        </Box>

      </Box>
      <div className={classes.footer} />
    </div>
  );
};

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default FormLayout;