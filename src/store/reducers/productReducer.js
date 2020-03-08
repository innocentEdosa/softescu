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

const initialState = {
  addingProducts: false,
  fetchingProducts: false,
  deletingProduct: false,
  products: [],
  error: false,
};

const fetchingProducts = (state) => ({
  ...state,
  fetchingProducts: true,
  error: false,
});

const fetchingProductsSuccess = (state, { products }) => ({
  ...state,
  fetchingProducts: false,
  products,
});

const fetchingProductsFailed = (state) => ({
  ...state,
  fetchingProducts: false,
  error: true,
});

const addingProducts = (state) => ({
  ...state,
  addingProducts: true,
});

const addingProductSuccess = (state, { product }) => ({
  ...state,
  addingProducts: false,
  products: [product, ...state.products],
});

const addingProductFailed = (state) => ({
  ...state,
  addingProducts: false,
});

const deletingProduct = (state) => ({
  ...state,
  deletingProduct: true,
});

const deletingProductSuccess = (state, { productId }) => ({
  ...state,
  deletingProduct: false,
  products: state.products.filter((product) => product.id !== productId),
});

const deletingProductFailed = (state) => ({
  ...state,
  deletingProduct: false,
});


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS: return fetchingProducts(state);
    case FETCHING_PRODUCTS_SUCCESS: return fetchingProductsSuccess(state, action);
    case FETCHING_PRODUCTS_FAILED: return fetchingProductsFailed(state);
    case ADDING_PRODUCTS: return addingProducts(state);
    case ADDING_PRODUCTS_SUCCESS: return addingProductSuccess(state, action);
    case ADDING_PRODUCTS_FAILED: return addingProductFailed(state);
    case DELETING_PRODUCT: return deletingProduct(state);
    case DELETING_PRODUCT_SUCCESS: return deletingProductSuccess(state, action);
    case DELETING_PRODUCT_FAILED: return deletingProductFailed(state);
    default:
      return state;
  }
};

export default productReducer;