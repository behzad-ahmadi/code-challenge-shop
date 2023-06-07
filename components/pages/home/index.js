import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const productsHandler = () => {
    router.push('/products');
  };

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
    </Box>
  );
}
