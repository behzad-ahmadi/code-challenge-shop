import { useAppTheme } from '@/hooks/useAppTheme';
import useUser from '@/hooks/useUser';
import { logout } from '@/lib/api-utils';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Profile() {
  const { toggleMode, theme } = useAppTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { user, mutateUser } = useUser();

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
      <IconButton onClick={handleMenu} sx={{ ml: 1 }}>
        <Avatar src={user?.image} sx={{ backgroundColor: 'gray' }} />
      </IconButton>

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
        {!user?.isLoggedIn && <MenuItem onClick={loginHandler}>Login</MenuItem>}

        <MenuItem>
          <IconButton onClick={toggleMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </MenuItem>

        {user?.isLoggedIn && (
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        )}
      </Menu>
    </>
  );
}
