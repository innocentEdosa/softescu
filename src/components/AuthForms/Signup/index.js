import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import AuthFormLayout from 'components/AuthForms/FormLayout';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';


const SignupForm = ({
  values: {
    email,
    username,
    phoneNumber,
    firstName,
    lastName,
    password,
    verifyPassword,
    error: {
      email: emailError,
      username: usernameError,
      phoneNumber: phoneNumberError,
      firstName: firstNameError,
      lastName: lastNameError,
      password: passwordError,
      verifyPassword: verifyPasswordError,
    },
  }, onChange, onBlur, onSubmit, formatInputError, signupLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();


  return (
    <AuthFormLayout>
      <Box flexGrow={1} px={8} py={3}>
        <Typography paragraph variant="h5" noWrap>
          {t('signup.greeting')}
        </Typography>
        <form>
          <TextField
            id="email"
            disabled={signupLoading}
            label={t('inputs.email')}
            type="email"
            value={email}
            onChange={onChange}
            variant="outlined"
            size="small"
            required
            fullWidth
            margin="normal"
            name="email"
            onBlur={onBlur}
            error={!!emailError}
            helperText={
            formatInputError(emailError)
            }
          />
          <TextField
            id="username"
            label={t('inputs.username')}
            type="text"
            variant="outlined"
            disabled={signupLoading}
            size="small"
            required
            fullWidth
            value={username}
            onChange={onChange}
            onBlur={onBlur}

            name="username"
            margin="normal"
            error={!!usernameError}
            helperText={
              formatInputError(usernameError)

            }
          />
          <TextField
            disabled={signupLoading}

            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label={t('inputs.phoneNumber')}
            type="tel"
            variant="outlined"
            size="small"
            margin="normal"
            value={phoneNumber}
            onChange={onChange}
            onBlur={onBlur}
            error={!!phoneNumberError}
            helperText={
              formatInputError(phoneNumberError)

            }

            required
          />
          <Box width="100%" className={classes.formControlInline}>
            <TextField
              disabled={signupLoading}

              id="firstName"
              label={t('inputs.firstName')}
              type="text"
              variant="outlined"
              size="small"
              margin="normal"
              required
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              name="firstName"
              error={!!firstNameError}
              helperText={
                formatInputError(firstNameError)
              }
            />
            <TextField
              disabled={signupLoading}

              id="lastName"
              name="lastName"
              label={t('inputs.lastName')}
              type="text"
              variant="outlined"
              size="small"
              margin="normal"
              value={lastName}
              onChange={onChange}
              onBlur={onBlur}
              error={!!lastNameError}
              required
              helperText={
                formatInputError(lastNameError)
              }
            />
          </Box>

          <Box width="100%" className={classes.formControlInline}>
            <TextField
              disabled={signupLoading}
              id="password"
              label={t('inputs.password')}
              type="password"
              variant="outlined"
              size="small"
              margin="normal"
              required
              value={password}
              onChange={onChange}
              onBlur={onBlur}
              name="password"
              error={!!passwordError}
              helperText={
                formatInputError(passwordError)
              }
            />
            <TextField
              disabled={signupLoading}
              id="verifyPassword"
              label={t('inputs.verifyPassword')}
              type="password"
              variant="outlined"
              margin="normal"
              size="small"
              required
              value={verifyPassword}
              onChange={onChange}
              onBlur={onBlur}
              name="verifyPassword"
              error={!!verifyPasswordError}
              helperText={
                formatInputError(verifyPasswordError)
              }
            />
          </Box>
          <p>
            {t('signup.policy')}
          </p>
          <Button
            onClick={onSubmit}
            size="medium"
            margin="normal"
            fullWidth
            disabled={signupLoading}
            variant="contained"
            color="primary"
          >
            {signupLoading ? (
              <div className={classes.loaderWrapper}>
                <CircularProgress size="small" color="secondary" />
              </div>
            ) : (
              t('signup.cta1')
            )}
          </Button>
          <h4 className={classes.prompt}>
            {t('signup.prompt')}
            <Link to="/login">
              <Button color="primary">
                {' '}
                {t('signup.cta2')}
              </Button>
            </Link>
          </h4>
        </form>
      </Box>
      <Box />
    </AuthFormLayout>
  );
};

SignupForm.propTypes = {
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    verifyPassword: PropTypes.string.isRequired,
    error: PropTypes.shape({
      username: PropTypes.shape([]).isRequired,
      password: PropTypes.shape([]).isRequired,
      phoneNumber: PropTypes.shape([]).isRequired,
      firstName: PropTypes.shape([]).isRequired,
      lastName: PropTypes.shape([]).isRequired,
      verifyPassword: PropTypes.shape([]).isRequired,
      email: PropTypes.shape([]).isRequired,
    }).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  formatInputError: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signupLoading: PropTypes.bool.isRequired,
};

export default SignupForm;
