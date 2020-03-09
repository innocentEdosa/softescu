import React, { useEffect } from 'react';
import Store from 'components/Store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from 'store/actions/productActions';
import PurchaseConfirmation from 'HOC/PurchaseConfirmation';

const StoreContainer = ({ fetchAllProducts, products, fetchingProducts }) => {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <PurchaseConfirmation
        render={({ openPurchaseConfirmation }) => (
          <Store
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

StoreContainer.propTypes = {
  fetchAllProducts: PropTypes.func.isRequired,
  products: PropTypes.shape([]).isRequired,
  fetchingProducts: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);
