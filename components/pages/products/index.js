import useCart from '@/hooks/useCart';
import { Button } from '@mui/material';

export default function Products() {
  const cart = useCart();

  console.log('c', cart.products);
  return (
    <>
      Products
      <Button
        onClick={() => {
          cart.add({ id: 1 });
        }}
        variant='outlined'
      >
        ADD
      </Button>
      <Button
        onClick={() => {
          cart.remove({ id: 1 });
        }}
        variant='outlined'
      >
        Remove
      </Button>
    </>
  );
}
