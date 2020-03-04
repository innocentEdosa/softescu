import axios from 'axios';
// import store from '../index';

const getAxiosInstance = (baseURL = 'https://saasimplweb2.herokuapp.com') => {
  const API_BASE_URL = baseURL;
  // const state = store.getState();
  // const { token } = state.auth;
  return axios.create({
    baseURL: API_BASE_URL,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
  });
};

export const createApiService = (httpVerb, endpoint, baseURL = 'https://saasimplweb2.herokuapp.com') => {
  switch (httpVerb.toLowerCase()) {
    case 'post':
      return (params) => getAxiosInstance(baseURL).post(endpoint, params);
    default:
      return (params) => getAxiosInstance(baseURL).get(endpoint, params);
  }
};


export const signup = createApiService('post', '/api/signup');
