import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { ArrowBackIos } from '@mui/icons-material';
import SearchBox from './searchbox';
import ProductListCard from '@/components/common/card/productListCard';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function ProductSearch({ open, onClose }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'sticky' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={onClose}>
              <ArrowBackIos />
            </IconButton>

            <SearchBox />
          </Toolbar>
        </AppBar>

        <Box display={'flex'} justifyContent={'center'} mt={1}>
          <ProductListCard />
        </Box>

        <Box display={'flex'} justifyContent={'center'} mt={1}>
          <ProductListCard />
        </Box>
      </Dialog>
    </div>
  );
}
