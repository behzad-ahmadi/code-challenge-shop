import MyHead from '@/components/common/myHead';
import Home from '@/components/pages/home';
import Products from '@/components/pages/products';
import useUser from '@/hooks/useUser';
import { pageRoutes } from '@/lib/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user?.isLoggedIn) router.replace(pageRoutes.products);
    else router.replace(pageRoutes.login);
  }, []);

  return (
    <>
      <MyHead pageTitle={'Home'} />
      {/* <Home /> */}
    </>
  );
}
