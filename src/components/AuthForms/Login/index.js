import { Link } from 'react-router-dom';
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

const LoginForm = () => {
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
              // disabled={loading}
            size="medium"
            required
            fullWidth
            name="username"
          />
          <TextField
            id={t('inputs.password')}
              // disabled={loading}
            label={t('inputs.password')}
            type="password"
            variant="outlined"
            size="medium"
            required
            fullWidth
            margin="normal"
            name="password"
          />
          <Button
              // onClick={loginUser}
            size="medium"
            margin="normal"
            fullWidth
              // disabled={loading}
            variant="contained"
            color="primary"
          >
            {false ? (
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

export default LoginForm;
