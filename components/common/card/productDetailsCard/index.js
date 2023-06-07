import useCart from '@/hooks/useCart';
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
import { useEffect, useState } from 'react';

export default function ProductDetailsCard({
  product = {},
  showActions = true,
  mainSx,
  onClick,
}) {
  const { id, title, description, price, rating, images = [] } = product;
  const [count, setCount] = useState(0);
  const cart = useCart();

  useEffect(() => {
    setCount(1);
  }, [id]);

  const addHandler = () => setCount(count + 1);

  const removeHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 264,
          maxWidth: 370,
          boxShadow: 0,
          padding: 2,
          width: '100%',
          cursor: onClick ? 'pointer' : 'unset',
          ...mainSx,
        }}
        onClick={() => onClick && onClick()}
      >
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
                <IconButton onClick={removeHandler}>
                  <RemoveCircleOutline />
                </IconButton>

                <Typography sx={{ my: 'auto' }} fontWeight={'bold'}>
                  {count}
                </Typography>

                {/* add product */}
                <IconButton onClick={addHandler}>
                  <AddCircleOutline />
                </IconButton>
              </Box>

              {/* Add to card button */}
              <Button
                variant='contained'
                onClick={() => {
                  count > 0 ? cart.addToCard(product, count) : () => {};
                }}
              >
                Add To Card
              </Button>
            </Box>
          </CardActions>
        )}
      </Card>
    </>
  );
}
