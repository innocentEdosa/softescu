import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ProductsContainer from 'container/ProductsContainer';
import AdminLayout from 'components/AdminLayout';
import routes from 'fixtures/routes';

const AdminContainer = ({
  match: { path },
}) => (
  <AdminLayout>
    <Switch>
      <Route path={`${path}${routes.products}`} render={() => <ProductsContainer />} />
    </Switch>
  </AdminLayout>
);


AdminContainer.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default AdminContainer;
