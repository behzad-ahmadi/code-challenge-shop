import MyHead from '@/components/common/myHead';
import Products from '@/components/pages/products';
import { getProducts } from '@/lib/api-utils';

export default function ProductsPage({ products }) {
  return (
    <>
      <MyHead pageTitle={'Products'} />
      <Products products={products} />;
    </>
  );
}
export const getStaticProps = async () => {
  const products = await getProducts({ authToken: '' });

  return { props: { products }, revalidate: 20 };
};
