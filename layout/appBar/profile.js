import { useAppTheme } from '@/hooks/useAppTheme';
import useUser from '@/hooks/useUser';
import { logout } from '@/lib/api-utils';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  Avatar,
  Dialog,
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
          {!user?.isLoggedIn && (
            <MenuItem onClick={loginHandler}>Login</MenuItem>
          )}

          <MenuItem>
            <IconButton onClick={toggleMode} color='inherit'>
              {theme.palette.mode === 'dark' ? (
                <Brightness4 />
              ) : (
                <Brightness7 />
              )}
            </IconButton>
          </MenuItem>

          {user?.isLoggedIn && (
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          )}
        </Menu>
      )}

      {!largescreen && (
        <Drawer
          anchor={'bottom'}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Drawer>
      )}
    </>
  );
}
