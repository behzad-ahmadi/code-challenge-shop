import ProductCart from '@/components/pages/products/produtcCart';
import useCart from '@/hooks/useCart';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Cart({ badeTitle }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('error');
  const router = useRouter();
  const cart = useCart();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setColor('success');

    const timer = setTimeout(() => {
      setColor('error');
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.totalPrice]);

  useEffect(() => {
    if (open) setOpen(false);
  }, [router.asPath]);

  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Badge badgeContent={badeTitle} color={color}>
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <ProductCart open={open} onClose={handleClose} />
    </>
  );
}
