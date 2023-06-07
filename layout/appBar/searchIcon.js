import ProductSearch from '@/components/pages/products/productSeatch';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SearchIcon() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) setOpen(false);
  }, [router.asPath]);

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Search fontSize='medium' />
      </IconButton>

      <ProductSearch onClose={handleClose} open={open} />
    </>
  );
}
