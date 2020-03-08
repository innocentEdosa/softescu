import axios from 'axios';
// import store from '../index';

const getAxiosInstance = (baseURL = '/api') => {
  const API_BASE_URL = baseURL;

  return axios.create({
    baseURL: API_BASE_URL,
  });
};

export const createApiService = (httpVerb, endpoint, baseURL = '/api') => {
  switch (httpVerb.toLowerCase()) {
    case 'post':
      return (params) => getAxiosInstance(baseURL).post(endpoint, params);
    default:
      return (params) => getAxiosInstance(baseURL).get(endpoint, params);
  }
};


export const signup = createApiService('post', '/signup');
export const login = createApiService('post', '/login');
export const fetchAllProducts = createApiService('get', '/products');
export const addNewProduct = createApiService('post', '/addproduct');
