import {
  Box,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import useCart from '@/hooks/useCart';

export default function ProductCartCard({ product = {} }) {
  const { id, title, description, price, quantity, images = [] } = product;

  const cart = useCart();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          maxWidth: 550,
          width: '100%',
          borderRadius: 5,
          py: 1,
          boxShadow: 'none',
          bgcolor: 'transparent',
        }}
      >
        {/* Image */}
        {images[0] ? (
          <Image
            width={120}
            height={120}
            style={{
              objectFit: 'cover',
              borderRadius: 23,
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: 9,
            }}
            quality={100}
            src={images[0]}
            alt='product image'
          />
        ) : (
          <Skeleton
            variant='rounded'
            style={{
              borderRadius: 23,
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: 9,
            }}
            width={200}
            height={120}
          ></Skeleton>
        )}

        <CardContent sx={{ pl: 2, width: '100%' }}>
          {/* title */}
          <Typography fontWeight={'bold'} sx={{ mb: 0.4 }}>
            {title}
          </Typography>

          {/* Description */}
          <Typography
            gutterBottom
            variant='body2'
            color='text.secondary'
            component='div'
          >
            {description}
          </Typography>

          <Box display={'flex'} justifyContent={'space-between'}>
            {/* Price */}
            <Typography fontWeight={'bold'} my={'auto'}>
              ${price}
            </Typography>

            {/* Total */}
            <Box display={'flex'}>
              <IconButton onClick={() => cart.remove(product)}>
                <RemoveCircleOutline />
              </IconButton>

              <Typography sx={{ my: 'auto' }} fontWeight={'bold'}>
                {quantity}
              </Typography>

              <IconButton onClick={() => cart.add(product)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
