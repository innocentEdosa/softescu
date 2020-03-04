import Layout1 from 'components/Layouts/Layout1';
import ProductList from 'components/Products/ProductList';
import React from 'react';
import AddProduct from 'components/Products/AddProduct';

import useStyles from './style';

const ProductComponent = () => {
  const classes = useStyles();

  return (
    <Layout1>
      {/* <ProductList /> */}
      <AddProduct />
    </Layout1>
  );
};

export default ProductComponent;
