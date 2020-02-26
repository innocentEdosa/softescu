import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequireAuth = (ComposedComponent) => {
  const ComposedComponentWrapper = (props) => {
    const { location: { pathname }, push } = useHistory();
    const { isAuthenticated, user: { exp } } = props;
    useEffect(() => {
      (
        () => {
          if (!isAuthenticated || exp < Date.now() / 1000) {
            push('/login', {
              redirectPath: pathname,
            });
          }
        }
      )();
    });
    return (<ComposedComponent {...props} />);
  };

  const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
    isAuthenticated,
    user,
  });

  ComposedComponentWrapper.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      exp: PropTypes.string,
    }).isRequired,
  };

  return connect(mapStateToProps, null)(ComposedComponentWrapper);
};

export default RequireAuth;
