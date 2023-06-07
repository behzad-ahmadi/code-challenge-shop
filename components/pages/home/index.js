import useAppBar from '@/hooks/useAppBar';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const productsHandler = () => {
    router.push('/products');
  };

  const productDetailHandler = () => {
    router.push('/products/1');
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('products', ...products);
  }, [products]);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      maxWidth={300}
      mx={'auto'}
      gap={5}
      sx={{ textAlign: 'center', mt: 10 }}
    >
      <Button onClick={productsHandler} variant='outlined'>
        Goto Products
      </Button>

      <Button onClick={productDetailHandler} variant='outlined'>
        Goto Product Detail
      </Button>

      {products?.map((p) => p?.count)}
    </Box>
  );
}
