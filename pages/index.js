import MyHead from '@/components/common/myHead';
import Home from '@/components/pages/home';
import Products from '@/components/pages/products';

export default function HomePage() {
  return (
    <>
      <MyHead pageTitle={'Home'} />
      {/* <Home /> */}
      <Products />
    </>
  );
}
