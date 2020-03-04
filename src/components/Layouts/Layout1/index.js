import React from 'react';
import TopMenu from 'components/TopMenu';
import PropTypes from 'prop-types';
import useStyles from './style';

const Layout1 = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <TopMenu />
      <div className={classes.layout1}>
        <div className={classes.layout1Main}>
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
