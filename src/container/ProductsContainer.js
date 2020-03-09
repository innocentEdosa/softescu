import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchProducts, editOneProduct, addProduct, deleteOneProduct,
} from 'store/actions/productActions';
import Layout1 from 'components/Layouts/Layout1';
import ProductList from 'components/Products/ProductList';
import AddOrEditProduct from 'components/Products/AddProduct';
import { useLocation, useHistory } from 'react-router-dom';
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
  editProduct,
}) => {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const deleteProductHandler = (productId) => {
    deleteProduct(productId);
  };

  const { search, state } = useLocation();
  const { goBack } = useHistory();
  const { mode } = qs.parse(search, { ignoreQueryPrefix: true });
  return (
    <Layout1>
      <ToggleComponent
        check={!mode}
        component={<ProductList products={products} fetchingProducts={fetchingProducts} />}
      />
      <ToggleComponent
        check={mode === 'addproduct' || mode === 'edit'}
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
                  validateOnSubmit,
                  setFormInput,
                }) => {
                  useEffect(() => {
                    if (mode === 'edit') {
                      setFormInput((prevFormInput) => ({
                        ...prevFormInput,
                        ...state,
                      }));
                    }
                  }, []);

                  const editProductHandler = (e) => {
                    e.preventDefault();
                    editProduct({
                      ...formInput,
                      imgUrl: formInput.imgUrl || imageUploadState.img,
                    });
                  };

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
                    goBack();
                  };
                  const addProductHandler = (e) => {
                    e.preventDefault();
                    const isError = validateOnSubmit();
                    if (!isError) {
                      return addNewProduct({
                        ...formInput,
                        imgUrl: imageUploadState.img,
                      });
                    }
                    return null;
                  };
                  return (
                    <AddOrEditProduct
                      mode={mode}
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
                      editProduct={editProductHandler}
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
  editProduct: (productData) => dispatch(editOneProduct(productData)),
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
  editProduct: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
