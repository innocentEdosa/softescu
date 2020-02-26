import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const HandleAuth = (ComposedComponent) => {
  const WrapperComponent = (props) => {
    const {
      isAuthenticated,
      signUpSuccess,
    } = props;

    const { pathname, state } = useLocation();
    const { push, replace } = useHistory();

    useEffect(() => {
      (
        () => {
          setTimeout(() => {
            if (isAuthenticated) {
              replace('/userdashboard');
            }
          }, 1000);
        }
      )();
    });

    useEffect(() => {
      (() => {
        setTimeout(() => {
          if (pathname === '/signup' && signUpSuccess) {
            replace('/login', {
              fromSignUpSuccess: signUpSuccess,
            });
          }
        }, 1000);
      })();

      // return clearInterval(signupLoginRedirect);
    });
    return <ComposedComponent {...props} />;
  };

  const mapStateToProps = ({ auth: { isAuthenticated, signUpSuccess } }) => ({
    isAuthenticated,
    signUpSuccess,
  });

  const mapDispatchToProps = (dispatch) => ({

  });


  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
};

export default HandleAuth;
