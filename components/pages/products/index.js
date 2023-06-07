import ProductDetailsCard from '@/components/common/card/productDetailsCard';
import { pageRoutes } from '@/lib/config';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

export default function Products({ products }) {
  const router = useRouter();

  const cardClickHandler = (id) => {
    router.push(pageRoutes.productDetails(id));
  };

  return (
    <Box alignItems={'center'} display={'flex'} flexDirection={'column'} pt={3}>
      {products.products?.map((p, idx) => (
        <ProductDetailsCard
          product={p}
          showActions={false}
          mainSx={{ mb: 3 }}
          onClick={() => cardClickHandler(p.id)}
          key={idx}
        />
      ))}
    </Box>
  );
}
