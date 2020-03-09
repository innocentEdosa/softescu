import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import AdminContainer from 'container/AdminContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeContainer from 'container/homeContainer';
import LoginContainer from 'container/LoginContainer';
import React from 'react';
import routes from 'fixtures/routes';
import SignupContainer from 'container/SignupContainer';
import TopBar from 'components/TopBar';
import AccountContainer from 'container/AccountContainer';
import StoreContainer from 'container/StoreContainer';
import AboutContainer from 'container/AboutContainer';

import theme from '../theme/globalstyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <TopBar />
    <CssBaseline />
    <Switch>
      <Redirect exact from="/" to={routes.home} />
      <Route exact path={routes.login} component={LoginContainer} />
      <Route exact path={routes.signup} component={SignupContainer} />
      <Route exact path={routes.home} component={HomeContainer} />
      <Route exact path={routes.store} component={StoreContainer} />
      <Route exact path={routes.about} component={AboutContainer} />
      <Route exact path={routes.account} component={AccountContainer} />
      <Route path={routes.admin} component={AdminContainer} />

    </Switch>
  </ThemeProvider>
);


export default App;
