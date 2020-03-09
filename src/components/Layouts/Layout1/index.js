import AlertEmitter from 'HOC/AlertEmitter';
import Alerts from 'components/Alerts';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import TopMenu from 'components/TopMenu';

import useStyles from './style';

const Layout1 = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <TopMenu />
      <div className={classes.layout1}>
        <div className={classes.layout1Main}>
          <Box my={3}>
            <AlertEmitter emitterReference="layoutNotification">
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
          { children}
        </div>
      </div>
    </>
  );
};

Layout1.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout1;
