import ProductSearch from '@/components/pages/products/productSeatch';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function SearchIcon() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Search fontSize='medium' />
      </IconButton>

      <ProductSearch onClose={handleClose} open={open} />
    </>
  );
}
