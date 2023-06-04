import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppTheme } from '@/hooks/useAppTheme';
import { Avatar, Menu, MenuItem } from '@mui/material';
import useUser from '@/hooks/useUser';
import { logout } from '@/lib/api-utils';
import { useRouter } from 'next/router';
import useAppBar from '@/hooks/useAppBar';

export default function AppBarSection() {
  const { toggleMode, theme } = useAppTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const { user, mutateUser } = useUser({ redirectTo: '/auth/login' });
  const appBar = useAppBar();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    mutateUser(await logout());
  };

  const loginHandler = () => {
    router.push('/auth/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {appBar?.title}
          </Typography>

          <IconButton onClick={toggleMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <IconButton>
            <Avatar
              src={user?.image}
              onClick={handleMenu}
              sx={{ backgroundColor: 'gray' }}
            ></Avatar>
          </IconButton>

          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
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

            {user?.isLoggedIn && (
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Space for fixed appbar */}
      <Box mt={8}></Box>
    </Box>
  );
}
