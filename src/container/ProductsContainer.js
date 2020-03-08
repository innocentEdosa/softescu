import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts, addProduct, deleteOneProduct } from 'store/actions/productActions';
import Layout1 from 'components/Layouts/Layout1';
import ProductList from 'components/Products/ProductList';
import AddProduct from 'components/Products/AddProduct';
import { useLocation } from 'react-router-dom';
import ToggleComponent from 'HOC/ToggleComponent';
import qs from 'qs';
import FormInputHandler from 'HOC/FormHandler';
import QuickUpload from 'HOC/QuickUpload';
import DeleteModal from 'components/DeleteModal';

const ProductsContainer = ({
  fetchAllProducts,
  fetchingProducts,
  addingProducts,
  products,
  addNewProduct,
  deleteProduct,
}) => {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const deleteProductHandler = (productId) => {
    deleteProduct(productId);
  };

  const { search } = useLocation();
  const { mode } = qs.parse(search, { ignoreQueryPrefix: true });
  return (
    <Layout1>
      <ToggleComponent
        check={!mode}
        component={<ProductList products={products} fetchingProducts={fetchingProducts} />}
      />
      <ToggleComponent
        check={mode === 'addproduct'}
        component={(
          <QuickUpload>
            {({ uploadImage, imageUploadState }) => (
              <FormInputHandler
                values={{
                  title: '',
                  author: '',
                  isPremium: false,
                  error: {},
                }}
              >
                {({
                  formInput,
                  handleOnBlur,
                  handleInputChange,
                  formatInputError,
                  // validateOnSubmit,
                  setFormInput,
                }) => {
                  const handlePremiumChoice = (e) => {
                    e.preventDefault();
                    const { checked, name } = e.target;
                    setFormInput((prevFormInput) => ({
                      ...prevFormInput,
                      [name]: checked,
                    }));
                  };

                  const onCancel = (e) => {
                    e.preventDefault();
                    setFormInput((prevFormInput) => ({
                      ...prevFormInput,
                      title: '',
                      author: '',
                      isPremium: false,
                      error: {},
                    }));
                  };
                  const addProductHandler = (e) => {
                    e.preventDefault();
                    addNewProduct({
                      ...formInput,
                      imgUrl: imageUploadState.img,
                    });
                  };
                  return (
                    <AddProduct
                      onCancel={onCancel}
                      addingProducts={addingProducts}
                      imageUploadState={imageUploadState}
                      uploadImage={uploadImage}
                      addProduct={addProductHandler}
                      onChangePremium={handlePremiumChoice}
                      values={formInput}
                      onBlur={handleOnBlur}
                      onChange={handleInputChange}
                      formatInputError={formatInputError}
                    />
                  );
                }}
              </FormInputHandler>
            )}
          </QuickUpload>
        )}
      />
      <DeleteModal onDelete={deleteProductHandler} />
    </Layout1>
  );
};

const mapStateToProps = ({ product: { addingProducts, fetchingProducts, products } }) => ({
  fetchingProducts,
  products,
  addingProducts,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (identifier) => dispatch(deleteOneProduct(identifier)),
  fetchAllProducts: () => dispatch(fetchProducts()),
  addNewProduct: (productData) => dispatch(addProduct(productData)),
});


ProductsContainer.propTypes = {
  fetchAllProducts: PropTypes.func.isRequired,
  fetchingProducts: PropTypes.bool.isRequired,
  addingProducts: PropTypes.bool.isRequired,
  products: PropTypes.shape([]).isRequired,
  addNewProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
