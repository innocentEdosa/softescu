import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AuthFormLayout from 'components/AuthForms/FormLayout';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import routes from 'fixtures/routes';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import useStyles from './style';

const LoginForm = ({
  values: {
    username,
    password,
    error: {
      username: usernameError,
      password: passwordError,
    },
  },
  onChange, onBlur, loginUser, formatInputError, loginLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();


  return (
    <AuthFormLayout>
      <Box flexGrow={1} px={10} py={3}>
        <Typography paragraph variant="h5" noWrap>
          {t('login.greeting')}
        </Typography>
        <Typography paragraph variant="h6" noWrap>
          {t('navigation.login')}
        </Typography>
        <form className={classes.loginForm}>
          <TextField
            id={t('inputs.username')}
            label={t('inputs.username')}
            type="text"
            variant="outlined"
            disabled={loginLoading}
            onBlur={onBlur}
            onChange={onChange}
            error={usernameError}
            helperText={
                formatInputError(usernameError)
                }
            size="medium"
            required
            fullWidth
            name="username"
            value={username}
          />
          <TextField
            id={t('inputs.password')}
            value={password}
            label={t('inputs.password')}
            type="password"
            variant="outlined"
            size="medium"
            required
            fullWidth
            margin="normal"
            name="password"
            disabled={loginLoading}
            onBlur={onBlur}
            onChange={onChange}
            error={passwordError}
            helperText={
              formatInputError(passwordError)
              }
          />
          <Button
            onClick={loginUser}
            size="medium"
            margin="normal"
            fullWidth
            disabled={loginLoading}
            variant="contained"
            color="primary"
          >
            {loginLoading ? (
              <div className={classes.loaderWrapper}>
                <CircularProgress size="small" color="secondary" />
              </div>
            ) : (
              t('login.cta1')
            )}
          </Button>
          <h4 className={classes.prompt}>
            {t('login.prompt')}
            <Link to={routes.signup}>
              <Button color="primary">{t('login.cta2')}</Button>
            </Link>
          </h4>
        </form>
      </Box>
    </AuthFormLayout>
  );
};

LoginForm.propTypes = {
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    error: PropTypes.shape({
      username: PropTypes.shape([]).isRequired,
      password: PropTypes.shape([]).isRequired,
    }).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  formatInputError: PropTypes.func.isRequired,
  loginLoading: PropTypes.bool.isRequired,
};

export default LoginForm;
