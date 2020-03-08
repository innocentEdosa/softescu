import {
  DELETING_PRODUCT,
  DELETING_PRODUCT_SUCCESS,
  DELETING_PRODUCT_FAILED,
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_FAILED,
  ADDING_PRODUCTS,
  ADDING_PRODUCTS_FAILED,
  ADDING_PRODUCTS_SUCCESS,
} from 'store/actions/actionTypes';
import { addNewProduct, fetchAllProducts, deleteProduct } from 'api';
import { push } from 'connected-react-router';
import { notify } from 'utils/eventEmitter';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCHING_PRODUCTS });
  try {
    const { data: { products } } = await fetchAllProducts();
    dispatch({ type: FETCHING_PRODUCTS_SUCCESS, products });
  } catch (error) {
    dispatch({ type: FETCHING_PRODUCTS_FAILED });
  }
};

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: ADDING_PRODUCTS });
  try {
    const { data: { product } } = await addNewProduct(productData);
    dispatch({ type: ADDING_PRODUCTS_SUCCESS, product });
    notify('addProductNotification', 'Product created successfully', {
      autoClose: true,
      severity: 'success',
    });
    setTimeout(() => dispatch(push('/admin/products')), 1000);
  } catch (error) {
    dispatch({ type: ADDING_PRODUCTS_FAILED });
    notify('addProductNotification', 'We could not add your product!!! Please try again', {
      autoClose: false,
      severity: 'error',
    });
  }
};

export const deleteOneProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETING_PRODUCT });
  try {
    await deleteProduct(productId);
    dispatch({ type: DELETING_PRODUCT_SUCCESS, productId });
    setTimeout(() => dispatch(push('/admin/products')), 1000);
  } catch (error) {
    dispatch({ type: DELETING_PRODUCT_FAILED });
  }
};
