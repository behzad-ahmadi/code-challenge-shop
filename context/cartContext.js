const { createContext, useState } = require('react');

const CartContext = createContext({
  add: (product) => {},
  addToCard: (product, count) => {},
  remove: (product) => {},
  products: [],
  productCount: (id) => {},
  totalPrice: 0,
});

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // add product to cart
  const add = (product) => {
    //check if produtc is added before
    const _product = products?.find((p) => p?.id === product.id);

    if (!_product) {
      // add product to list
      product.quantity = 1;
      setProducts((current) => [...current, product]);
    }

    // update product quantity in list
    else
      setProducts((prevState) => {
        const newState = prevState.map((p) => {
          if (p.id === product.id) return { ...p, quantity: p.quantity + 1 };

          return p;
        });

        return newState;
      });

    // total price
    setTotalPrice(totalPrice + product.price);
  };

  // remove product from cart
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

        return newState;
      });
    }

    // if quantity ==1 remove it from list
    else if (_product && _product.quantity === 1) {
      setProducts((prevState) => prevState.filter((p) => p.id != product.id));
    }

    // total price
    setTotalPrice(totalPrice - product.price);
  };

  const addToCard = (product, count) => {
    //check if produtc is added before
    const _product = products?.find((p) => p?.id === product.id);

    if (!_product) {
      // add product to list
      product.quantity = count;
      setProducts((current) => [...current, product]);
    }

    // update product quantity in list
    else
      setProducts((prevState) => {
        const newState = prevState.map((p) => {
          if (p.id === product.id)
            return { ...p, quantity: p.quantity + count };

          return p;
        });

        return newState;
      });

    // total price
    setTotalPrice(totalPrice + product.price * count);
  };

  // one product count
  const productCount = (id) => {
    return products.find((p) => p.id === id)?.quantity || 0;
  };

  const contextValue = {
    add,
    remove,
    addToCard,
    products,
    productCount,
    totalPrice,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
