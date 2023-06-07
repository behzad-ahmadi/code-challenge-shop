export const pageRoutes = {
  home: '/',
  login: '/auth/login',
  products: '/products',
  products_search: '/products/search',
  productDetails_: '/products/[id]',
  productDetails: (id) => `/products/${id}`,
};

export const storageKeys = {
  app: 'code-challenge',
  themMode: 'code-challenge-themeMode',
};
