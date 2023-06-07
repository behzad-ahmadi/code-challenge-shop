import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import { Drawer, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function ProductCart({ onClose, open }) {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={onClose}
        PaperProps={
          largeScreen
            ? {
                sx: { width: '100%' },
              }
            : {
                sx: { width: 'auto' },
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
        {/* {list(anchor)} */}
      </Drawer>
    </div>
  );
}