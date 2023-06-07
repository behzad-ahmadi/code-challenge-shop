import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import {
  Box,
  Container,
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
        {/* {list(anchor)} */}
      </Drawer>
    </div>
  );
}
