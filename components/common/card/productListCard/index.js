import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { Star } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';

export default function ProductListCard({ products = {} }) {
  const { title, description, price, rating, images = [] } = products;

  const theme = useTheme();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          maxWidth: 550,
          width: '100%',
          borderRadius: 5,
          py: 1,
        }}
      >
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
            src={'/images/contemplative-reptile.jpg'}
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
            width={150}
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
            {/* Rating */}
            <Box display={'flex'} gap={0.5} mt={2}>
              <Star style={{ color: yellow[500] }} fontSize={'small'} />
              <Typography variant='button'>{5}</Typography>
            </Box>

            {/* Price */}
            <Typography fontWeight={'bold'} my={'auto'}>
              ${price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
