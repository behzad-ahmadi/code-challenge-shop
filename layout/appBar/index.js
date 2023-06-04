import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useUser from '@/hooks/useUser';
import useAppBar from '@/hooks/useAppBar';
import Title from './title';
import Profile from './profile';
import SearchIcon from './searchIcon';
import Cart from './cart';
import BackButton from './backButton';

export default function AppBarSection() {
  const { user } = useUser({ redirectTo: '/auth/login' });
  const appBar = useAppBar();
  const [itemsVisible, setItemsVisible] = React.useState({
    title: false,
    card: false,
    avatar: false,
    searchIcon: false,
    searchbox: false,
    backButton: false,
  });

  // const path = router.pathname;

  // switch (path) {
  //   case pageRoutes.login:
  //     return <></>;
  //   default:
  //     break;
  // }

  // React.useMemo( () => {  })

  // if (!appBar.showAppBar()) return <></>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <BackButton />

          {/* Page title */}
          <Title title={appBar?.title || 'Shop'} />

          {/* Search icon */}
          <SearchIcon />

          {/* Cart */}
          <Cart />

          {/* Avatar */}
          <Profile />
        </Toolbar>
      </AppBar>

      {/* Space for fixed appbar */}
      <Box mt={8}></Box>
    </Box>
  );
}
