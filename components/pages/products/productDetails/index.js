import ProductDetailsCard from '@/components/common/card/productDetailsCard';
import { Box } from '@mui/material';

export default function ProductDetails({ product }) {
  return (
    <Box display={'flex'} justifyContent={'center'} mt={10}>
      <ProductDetailsCard product={product} />
    </Box>
  );
}
