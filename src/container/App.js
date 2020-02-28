import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import routes from 'fixtures/routes';
import TopBar from 'components/TopBar';
import SignupContainer from 'container/SignupContainer';
import LoginContainer from 'container/LoginContainer';
import theme from '../theme/globalstyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <TopBar />
    <CssBaseline />
    <Switch>
      <Redirect exact from="/" to={routes.login} />
      <Route exact path={routes.login} component={LoginContainer} />
      <Route exact path={routes.signup} component={SignupContainer} />

    </Switch>
  </ThemeProvider>
);


export default App;
