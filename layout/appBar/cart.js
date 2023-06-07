import ProductCart from '@/components/pages/products/produtcCart';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useState } from 'react';

export default function Cart({ badeTitle }) {
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
        <Badge badgeContent={badeTitle} color='error'>
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <ProductCart open={open} onClose={handleClose} />
    </>
  );
}
