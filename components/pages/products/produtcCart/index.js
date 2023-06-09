import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import ProductCartCard from '@/components/common/card/productCartCard';
import useCart from '@/hooks/useCart';

export default function ProductCart({ onClose, open }) {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const cart = useCart();

  return (
    <div>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={onClose}
        PaperProps={
          largeScreen
            ? {
                sx: { width: 'auto', minWidth: 350 },
              }
            : {
                sx: { width: '100%' },
              }
        }
      >
        <AppBar sx={{ position: 'sticky' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={onClose}>
              <ArrowBackIos />
            </IconButton>

            <Typography> My Cart </Typography>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          {cart.products?.map((p, idx) => (
            <Box mb={2} key={idx}>
              <ProductCartCard product={p} />
            </Box>
          ))}
        </Container>

        <Box mt={4} mx={2}>
          <Divider />

          {/* Product count */}
          <Box display={'flex'} justifyContent={'space-between'} mt={2}>
            <Typography mt={1}>Product count: </Typography>
            {cart.products.length}
          </Box>

          {/* Toatal */}
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography mt={1}>Toatal: </Typography>

            <Typography>${cart.totalPrice}</Typography>
          </Box>
        </Box>

        {/* Pay button */}
        <Box textAlign={'center'}>
          <Button
            sx={{ mt: 4, textTransform: 'capitalize' }}
            variant='contained'
          >
            Pay via papal
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
