import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SideNav from 'components/SideNav';
import useStyles from './style';

const AdminLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SideNav />
      <div className={classes.showSection}>
        {children}
      </div>
    </Box>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
