import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import AuthFormLayout from 'components/AuthForms/FormLayout';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';


const SignupForm = () => {
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
              // disabled={signUpLoading}
            label={t('inputs.email')}
            type="email"
            variant="outlined"
            size="small"
            required
            fullWidth
            margin="normal"
            name="email"
          />
          <TextField
            id="username"
            label={t('inputs.username')}
            type="text"
            variant="outlined"
              // disabled={signUpLoading}
            size="small"
            required
            fullWidth
            name="username"
            margin="normal"
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label={t('inputs.phoneNumber')}
            type="tel"
            variant="outlined"
            size="small"
            margin="normal"
            required
          />
          <Box width="100%" className={classes.formControlInline}>
            <TextField
              id="firstName"
              label={t('inputs.firstName')}
              type="text"
              variant="outlined"
              size="small"
              margin="normal"
              required
              name="firstName"
            />
            <TextField
              id="lastName"
              name="lastName"
              label={t('inputs.lastName')}
              type="text"
              variant="outlined"
              size="small"
              margin="normal"
              required
            />
          </Box>

          <Box width="100%" className={classes.formControlInline}>
            <TextField
                // error={passwordError}
              id="password"
              label={t('inputs.password')}
              type="password"
              variant="outlined"
              size="small"
              margin="normal"
              required
              name="psw"
            />
            <TextField
                // error={verifyPasswordError}
              id="verifyPassword"
              label={t('inputs.verifyPassword')}
              type="password"
              variant="outlined"
              margin="normal"
              size="small"
              required
              name="verifyPassword"
            />
          </Box>
          <p>
            {t('signup.policy')}
          </p>
          <Button
              // onClick={onRegisterUser}
            size="medium"
            margin="normal"
            fullWidth
              // disabled={signUpLoading}
            variant="contained"
            color="primary"
          >
            {false ? (
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

export default SignupForm;
