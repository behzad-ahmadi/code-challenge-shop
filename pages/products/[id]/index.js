import MyHead from '@/components/common/myHead';
import ProductDetails from '@/components/pages/products/productDetails';
import { getProduct, getProducts } from '@/lib/api-utils';

export default function ProductDetailPage({ product }) {
  return (
    <>
      <MyHead pageTitle={'Product Details'} />
      <ProductDetails product={product} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  try {
    const { id } = params;

    console.log('pid', id);

    const product = await getProduct({ productId: id });

    return { props: { product }, revalidate: 20 };
  } catch (error) {
    console.log('error', error);
  }
};

export const getStaticPaths = async () => {
  const { products } = await getProducts();

  const paths = products?.map((p) => ({ params: { id: p.id.toString() } }));

  return { paths, fallback: 'blocking' };
};
