import LoginForm from 'components/AuthForms/Login/';
import React from 'react';
import PropTypes from 'prop-types';
import FormInputHandler from 'HOC/FormHandler';
import { connect } from 'react-redux';
import { logIn } from 'store/actions/authActions';
import CheckAuth from 'HOC/CheckAuth';

// this component would handle the login logic.
// it would be connect to the store

const LoginContainer = ({ loading, login }) => (
  <FormInputHandler values={{
    username: '',
    password: '',
    error: {},
  }}
  >
    {
      ({
        handleInputChange, handleOnBlur, formInput, validateOnSubmit, formatInputError,
      }) => {
        const loginUser = (e) => {
          e.preventDefault();
          const isError = validateOnSubmit();
          if (!isError) { login(formInput); }
        };

        return (
          <LoginForm
            formatInputError={formatInputError}
            values={formInput}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            loginUser={loginUser}
            loginLoading={loading}
          />
        );
      }
    }
  </FormInputHandler>

);

const mapStateToProps = ({ auth: { loading } }) => ({
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(logIn(userData)),
});

LoginContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth(LoginContainer));
