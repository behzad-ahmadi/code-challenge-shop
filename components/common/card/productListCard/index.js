import { Box, Card, CardContent, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import Star from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { pageRoutes } from '@/lib/config';

export default function ProductListCard({ product = {}, onCloseDialog }) {
  const { id, title, description, price, rating, images = [] } = product;
  const router = useRouter();

  const cardClickHandler = () => {
    router.replace(pageRoutes.productDetails(id));
    onCloseDialog && onCloseDialog();
  };

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          maxWidth: 550,
          width: '100%',
          borderRadius: 5,
          minHeight: 150,
          cursor: 'pointer',
        }}
        onClick={cardClickHandler}
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
              minWidth: 120,
            }}
            alt='product image'
            quality={100}
            src={images[0]}
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
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

          <Box display={'flex'} justifyContent={'space-between'} mt={2}>
            {/* Rating */}
            <Box display={'flex'} gap={0.5}>
              <Star style={{ color: yellow[500] }} fontSize={'small'} />
              <Typography variant='button'>{rating}</Typography>
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
