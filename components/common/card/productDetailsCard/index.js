import {
  AddCircleOutline,
  RemoveCircleOutline,
  Star,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material';
import { yellow } from '@mui/material/colors';
import Image from 'next/image';

export default function ProductDetailsCard({
  product = {},
  showActions = true,
}) {
  const { title, description, price, rating, images = [] } = product;

  return (
    <>
      <Card sx={{ minWidth: 264, maxWidth: 370, boxShadow: 0, padding: 2 }}>
        {images[0] ? (
          <Image
            width={370}
            height={160}
            style={{ width: '100%', borderRadius: 20, objectFit: 'cover' }}
            alt={'product image'}
            src={images[0]}
          />
        ) : (
          <Skeleton variant='rounded' width={'100%'} height={160} />
        )}

        <CardContent sx={{ px: 0 }}>
          <Box display={'flex'} justifyContent={'space-between'}>
            {/* title */}
            <Typography fontWeight={'bold'} sx={{ mb: 0.4 }}>
              {title}
            </Typography>

            {/* Price */}
            <Typography fontWeight={'bold'}>${price}</Typography>
          </Box>

          {/* Description */}
          <Typography
            gutterBottom
            variant='body2'
            color='text.secondary'
            component='div'
          >
            {description}
          </Typography>

          {/* Rating */}
          <Box display={'flex'} gap={0.5} mt={2}>
            <Star style={{ color: yellow[500] }} />
            <Typography>{rating}</Typography>
          </Box>
        </CardContent>
        {showActions && (
          <CardActions sx={{ px: 0 }}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              width={'100%'}
            >
              {/* Total */}
              <Box display={'flex'}>
                <IconButton>
                  <RemoveCircleOutline />
                </IconButton>

                <Typography sx={{ my: 'auto' }} fontWeight={'bold'}>
                  1
                </Typography>

                <IconButton>
                  <AddCircleOutline />
                </IconButton>
              </Box>

              {/* Add to card button */}
              <Button variant='contained'>Add To Card</Button>
            </Box>
          </CardActions>
        )}
      </Card>
    </>
  );
}
