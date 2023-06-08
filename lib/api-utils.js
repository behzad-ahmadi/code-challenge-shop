import Axios, { AxiosError } from 'axios';

export const apiBaseUrl = 'https://dummyjson.com';

const axios = Axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ---------------------Product----------------------

// ----get all products---
export const getProducts = async ({ authToken, limit = 12, skip = 0 } = {}) => {
  // fake Error, because of API doesn't handle it
  // if (!authToken || authToken.length == 0)
  //   throw new AxiosError('Unauthorized', 401, {}, {}, { data: 'Unauthorized' });

  const { data } = await axios.get('/products', {
    headers: {
      Authorization: authToken ? 'Bearer ' + authToken : '',
    },
    params: { limit, skip },
  });

  return data;
};

// ----get product---
export const getProduct = async ({
  productId,
  authToken,
  limit = 12,
  skip = 0,
}) => {
  // fake Error, because of API doesn't handle it
  // if (!authToken || authToken.length == 0)
  //   throw new AxiosError('Unauthorized', 401, {}, {}, { data: 'Unauthorized' });

  const { data } = await axios.get(`/product/${productId}`, {
    headers: {
      Authorization: 'Bearer ' + authToken,
    },
    params: { limit, skip },
  });

  return data;
};

// ---------------- Cart --------------------------

const addToCart = async () => {};

// ----------------Auth Next api-------------------

// ----Login----
export const login = async ({ username, password }) => {
  const { data } = await Axios.post('/api/auth/login', {
    username: username,
    password: password,
  });

  return data;
};

// Logout
export const logout = async () => {
  const { data } = await Axios.post('/api/auth/logout');

  return data;
};

// ----get logged in user----
export const getUser = async () => {
  const { data } = await Axios.get('/api/user');

  return data;
};
