import React from 'react';
import Alerts from 'components/Alerts';
import AlertEmitter from 'HOC/AlertEmitter';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '93.43vh',
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
}));

const FormLayout = ({ children }) => {
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
        {children}
      </Box>
      <div className={classes.footer} />
    </div>
  );
};

export default FormLayout;
