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
import { pageRoutes } from '@/lib/config';
import { useRouter } from 'next/router';

export default function AppBarSection() {
  const { user } = useUser({ redirectTo: '/auth/login' });
  const router = useRouter();
  const appBar = useAppBar();
  const [visibleItems, setVisibleItems] = React.useState({
    showAppBar: false,
    title: false,
    cart: false,
    profile: false,
    searchIcon: false,
    searchbox: false,
    backButton: false,
  });

  const path = router.pathname;

  React.useEffect(() => {
    switch (path) {
      case pageRoutes.login:
        setVisibleItems({
          showAppBar: false,
          profile: false,
          cart: false,
          searchIcon: false,
          searchbox: false,
          title: false,
          backButton: false,
        });
        break;
      case pageRoutes.home:
        setVisibleItems({
          showAppBar: true,
          profile: true,
          cart: false,
          searchIcon: false,
          searchbox: false,
          title: true,
          backButton: false,
        });
        break;
      case pageRoutes.products:
        setVisibleItems({
          showAppBar: true,
          profile: true,
          cart: true,
          searchIcon: true,
          searchbox: false,
          title: true,
          backButton: true,
        });
        break;
      case pageRoutes.productDetails:
        setVisibleItems({
          showAppBar: true,
          profile: true,
          cart: true,
          searchIcon: true,
          searchbox: false,
          title: true,
          backButton: true,
        });
        break;
      default:
        setVisibleItems({
          showAppBar: true,
          title: false,
          cart: false,
          profile: true,
          searchIcon: false,
          searchbox: false,
          backButton: false,
        });
        break;
    }
  }, [path]);

  if (!visibleItems.showAppBar) return <></>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          {visibleItems.backButton && <BackButton path={''} />}

          {/* Page title */}
          {visibleItems.title && <Title title={appBar?.title || 'Shop'} />}

          {/* Search icon */}
          {visibleItems.searchIcon && <SearchIcon />}

          {/* Cart */}
          {visibleItems.cart && <Cart />}

          {/* Avatar */}
          {visibleItems.profile && <Profile />}
        </Toolbar>
      </AppBar>

      {/* Space for fixed appbar */}
      <Box mt={8}></Box>
    </Box>
  );
}
