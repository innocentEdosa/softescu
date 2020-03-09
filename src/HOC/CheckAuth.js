/* eslint-disable react/jsx-props-no-spreading */
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import routes from 'fixtures/routes';

const CheckAuth = (ComposedComponent) => {
  const WrapperComponent = (props) => {
    const {
      isAuthenticated,
      isStaff,
    } = props;

    // const { pathname, state } = useLocation();
    const { replace } = useHistory();

    useEffect(() => {
      (
        () => {
          setTimeout(() => {
            if (isAuthenticated && isStaff) {
              return replace(routes.admin);
            } if (isAuthenticated) {
              return replace(routes.home);
            }
            return null;
          }, 1000);
        }
      )();
    });


    return <ComposedComponent {...props} />;
  };

  const mapStateToProps = ({ auth: { isAuthenticated, user: { isStaff } } }) => ({
    isAuthenticated,
    isStaff,
  });


  return connect(mapStateToProps, null)(WrapperComponent);
};

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isStaff: PropTypes.bool.isRequired,
};

export default CheckAuth;
