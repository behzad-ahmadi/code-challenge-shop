import { useAppTheme } from '@/hooks/useAppTheme';
import useUser from '@/hooks/useUser';
import { logout } from '@/lib/api-utils';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import Flag from '@mui/icons-material/Flag';
import Login from '@mui/icons-material/Login';
import Phone from '@mui/icons-material/Phone';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import useTheme from '@mui/material/useTheme';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Profile() {
  const { toggleMode, theme } = useAppTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { user, mutateUser } = useUser();
  const mui_theme = useTheme();
  const largescreen = useMediaQuery(mui_theme.breakpoints.up('sm'));
  const [disabled, setDisabled] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    try {
      setDisabled(true);
      mutateUser(await logout());
      handleClose();
    } catch (error) {
      toast('Log out error', { type: 'error' });
    } finally {
      setDisabled(false);
    }
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
        <MenuItem
          onClick={logoutHandler}
          sx={{ display: 'flex', gap: 2 }}
          disabled={disabled}
        >
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
