/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequireAuth = (ComposedComponent) => {
  const ComposedComponentWrapper = (props) => {
    const { location: { pathname }, push } = useHistory();
    const { isAuthenticated } = props;
    useEffect(() => {
      (
        () => {
          if (!isAuthenticated) {
            push('/login', {
              redirectPath: pathname,
            });
          }
        }
      )();
    });
    return (<ComposedComponent {...props} />);
  };

  const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated,
  });

  ComposedComponentWrapper.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, null)(ComposedComponentWrapper);
};

export default RequireAuth;
