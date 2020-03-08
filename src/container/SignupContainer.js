import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from 'components/AuthForms/Signup';
import FormInputHandler from 'HOC/FormHandler';
import { connect } from 'react-redux';
import { signUp } from 'store/actions/authActions';
import CheckAuth from 'HOC/CheckAuth';

const SignupContainer = ({ signup, loading }) => (
  <FormInputHandler values={{
    email: '',
    username: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    verifyPassword: '',
    error: {},
  }}
  >
    {
      ({
        handleInputChange, formInput, handleOnBlur, formatInputError, validateOnSubmit,
      }) => {
        const userSignup = (e) => {
          e.preventDefault();
          const isError = validateOnSubmit();
          return signup(formInput);
        };

        return (
          <SignupForm
            signupLoading={loading}
            onSubmit={userSignup}
            values={formInput}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            formatInputError={formatInputError}
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
  signup: (userData) => dispatch(signUp(userData)),
});

SignupContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth(SignupContainer));
