import useAppBar from '@/hooks/useAppBar';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const appBr = useAppBar();

  const productsHandler = () => {
    router.push('/products');
  };
  const productDetailHandler = () => {
    // router.push('/products/1');
    appBr.setTitle('Home');
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      maxWidth={300}
      mx={'auto'}
      gap={5}
      sx={{ textAlign: 'center', mt: 40 }}
    >
      <Button onClick={productsHandler} variant='outlined'>
        Goto Products
      </Button>
      <Button onClick={productDetailHandler} variant='outlined'>
        Goto Product Detail
      </Button>
    </Box>
  );
}
