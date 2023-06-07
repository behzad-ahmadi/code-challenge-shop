import { useAppTheme } from '@/hooks/useAppTheme';
import useUser from '@/hooks/useUser';
import { logout } from '@/lib/api-utils';
import {
  Brightness4,
  Brightness7,
  Flag,
  Login,
  Phone,
  PowerSettingsNew,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Profile() {
  const { toggleMode, theme } = useAppTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { user, mutateUser } = useUser();
  const mui_theme = useTheme();
  const largescreen = useMediaQuery(mui_theme.breakpoints.up('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    mutateUser(await logout());
    handleClose();
  };

  const loginHandler = () => {
    router.push('/auth/login');
    handleClose();
  };

  const MenuItems = () => (
    <>
      <MenuItem onClick={toggleMode}>
        <IconButton color='inherit'>
          {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </MenuItem>

      <Divider />

      <MenuItem sx={{ display: 'flex', gap: 2 }}>
        <Flag />
        About Us
      </MenuItem>

      <Divider />

      <MenuItem sx={{ display: 'flex', gap: 2 }}>
        <Phone />
        Contact Us
      </MenuItem>

      <Divider />

      {!user?.isLoggedIn && (
        <MenuItem onClick={loginHandler} sx={{ display: 'flex', gap: 5 }}>
          <Login />
          Login
        </MenuItem>
      )}

      {user?.isLoggedIn && (
        <MenuItem onClick={logoutHandler} sx={{ display: 'flex', gap: 2 }}>
          <PowerSettingsNew />
          Logout
        </MenuItem>
      )}
    </>
  );

  return (
    <>
      <IconButton onClick={handleMenu}>
        <Avatar src={user?.image} sx={{ backgroundColor: 'gray' }} />
      </IconButton>

      {largescreen && (
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItems />
        </Menu>
      )}

      {!largescreen && (
        <Drawer
          anchor={'bottom'}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItems />
        </Drawer>
      )}
    </>
  );
}
