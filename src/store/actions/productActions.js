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
  EDITING_PRODUCT,
  EDITING_PRODUCT_SUCCESS,
  EDITING_PRODUCT_FAILED,
  PURCHASE_PRODUCT,
} from 'store/actions/actionTypes';
import {
  editProduct,
  addNewProduct,
  fetchAllProducts,
  deleteProduct,
} from 'api';
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
    dispatch(push('/admin/products'));
    notify('layoutNotification', 'Product deleted successfully', {
      autoClose: true,
      severity: 'success',
    });
  } catch (error) {
    dispatch({ type: DELETING_PRODUCT_FAILED });
    dispatch(push('/admin/products'));
    notify('layoutNotification', 'Product delete failed', {
      autoClose: false,
      severity: 'error',
    });
  }
};

export const editOneProduct = (params) => async (dispatch) => {
  dispatch({ type: EDITING_PRODUCT });
  try {
    const { data: { product } } = await editProduct(params);
    dispatch({ type: EDITING_PRODUCT_SUCCESS, product });
    notify('addProductNotification', 'Product edited successfully', {
      autoClose: true,
      severity: 'success',
    });
    setTimeout(() => dispatch(push('/admin/products')), 1000);
  } catch (error) {
    dispatch({ type: EDITING_PRODUCT_FAILED });
    notify('addProductNotification', 'we could not edit your product, please try again', {
      autoClose: false,
      severity: 'success',
    });
  }
};

export const purchaseProduct = (productId) => async (dispatch) => {
  dispatch({ type: PURCHASE_PRODUCT, productId });
  notify('purchaseNotification', 'Thanks for buying (--)', {
    autoClose: true,
    severity: 'success',
  });
};
