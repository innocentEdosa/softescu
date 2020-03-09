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

const initialState = {
  addingProducts: false,
  fetchingProducts: false,
  editingProduct: false,
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
  products: products.reverse(),
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

const editingProduct = (state) => ({
  ...state,
  editingProduct: true,
});

const editProductSuccess = (state, { product: editedProduct }) => {
  const updatedProductList = state.products.map((product) => {
    if (product.id === editedProduct.id) {
      return editedProduct;
    }
    return product;
  });
  return ({
    ...state,
    products: updatedProductList,
    editingProduct: false,
  });
};

const editProductFailed = (state) => ({
  ...state,
  editingProduct: false,
});

const purchaseProduct = (state, { productId }) => {
  const updatedProducts = state.products.map((product) => {
    if (product.id === productId) {
      const updatedProduct = { ...product };
      updatedProduct.isPurchased = true;
      return updatedProduct;
    }
    return product;
  });

  return ({
    ...state,
    products: updatedProducts,
  });
};

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
    case EDITING_PRODUCT: return editingProduct(state);
    case EDITING_PRODUCT_SUCCESS: return editProductSuccess(state, action);
    case EDITING_PRODUCT_FAILED: return editProductFailed(state);
    case PURCHASE_PRODUCT: return purchaseProduct(state, action);
    default:
      return state;
  }
};

export default productReducer;
