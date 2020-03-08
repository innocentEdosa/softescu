import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ProductsContainer from 'container/ProductsContainer';
import AdminLayout from 'components/AdminLayout';
import routes from 'fixtures/routes';
import RequireAuth from 'HOC/RequireAuth';

const AdminContainer = ({
  match: { path },
}) => (
  <AdminLayout>
    <Switch>
      <Redirect exact from={routes.admin} to={`${path}${routes.products}`} />
      <Route path={`${path}${routes.products}`} render={() => <ProductsContainer />} />
    </Switch>
  </AdminLayout>
);


AdminContainer.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default AdminContainer;
