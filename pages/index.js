import MyHead from '@/components/common/myHead';
import Home from '@/components/pages/home';
import Products from '@/components/pages/products';
import useUser from '@/hooks/useUser';
import { pageRoutes } from '@/lib/config';

export default function HomePage() {
  useUser({
    redirectIfFound: true,
    redirectTo: pageRoutes.login,
  });

  return (
    <>
      <MyHead pageTitle={'Home'} />
      {/* <Home /> */}
    </>
  );
}
