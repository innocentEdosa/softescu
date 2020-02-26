import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import routes from 'fixtures/routes';
import TopBar from 'components/TopBar';

import LoginContainer from './LoginContainer';
import theme from '../theme/globalstyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <TopBar />
    <CssBaseline />
    <Switch>
      <Redirect exact from="/" to={routes.login} />
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
  </ThemeProvider>
);


export default App;
