const { createContext, useState } = require('react');

const CartContext = createContext({
  add: (product) => {},
  remove: (product) => {},
  products: [],
  total: 0,
});

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  //   add product to cart
  const add = (product) => {
    console.log('ppp', product);
    //check if produtc is added before
    const _product = products?.find((p) => p?.id === product.id);

    if (!_product) {
      // add product to list
      product.quantity = 1;
      setProducts((current) => [...current, product]);

      setTotal(total + 1);

      return;
    }

    // update product quantity in list
    setProducts((prevState) => {
      const newState = prevState.map((p) => {
        if (p.id === product.id) return { ...p, quantity: p.quantity + 1 };

        return p;
      });

      setTotal(total + 1);

      return newState;
    });
  };

  //   remove product from cart
  const remove = (product) => {
    //check if product exsits in list
    const _product = products?.find((p) => p?.id);

    //
    if (_product && _product.quantity > 1) {
      setProducts((prevState) => {
        const newState = prevState.map((p) => {
          if (p.id === product.id) return { ...p, quantity: p.quantity - 1 };

          return p;
        });

        setTotal(total - 1);

        return newState;
      });

      return;
    }

    // if quantity ==1 remove it from list
    if (_product && _product.quantity === 1) {
      setProducts((prevState) => prevState.filter((p) => p.id != product.id));

      setTotal(total - 1);

      return;
    }
  };

  const contextValue = { add, remove, products, total };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
