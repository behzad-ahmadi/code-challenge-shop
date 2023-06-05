import ProductCart from '@/components/pages/products/produtcCart';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useState } from 'react';

export default function Cart({ itemCount }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Badge badgeContent={itemCount} color='error'>
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <ProductCart open={open} onClose={handleClose} />
    </>
  );
}
