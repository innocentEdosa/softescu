import React, { useEffect } from 'react';
import Home from 'components/Home';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from 'store/actions/productActions';
import PurchaseConfirmation from 'HOC/PurchaseConfirmation';

const HomeContainer = ({ fetchAllProducts, products, fetchingProducts }) => {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <PurchaseConfirmation
        render={({ openPurchaseConfirmation }) => (
          <Home
            openConfirmation={openPurchaseConfirmation}
            products={products}
            fetchingProducts={fetchingProducts}
          />
        )}
      />
    </>
  );
};

const mapStateToProps = ({
  product: {
    fetchingProducts, products,
  },
}) => ({
  fetchingProducts,
  products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchProducts()),
});

HomeContainer.propTypes = {
  fetchAllProducts: PropTypes.func.isRequired,
  products: PropTypes.shape([]).isRequired,
  fetchingProducts: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
