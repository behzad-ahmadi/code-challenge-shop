import CartContext from '@/context/cartContext';
import { useContext } from 'react';

const useCart = () => useContext(CartContext);

export default useCart;
