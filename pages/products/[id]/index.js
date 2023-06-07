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
  const { id } = params;

  const product = await getProduct({ productId: id });

  return { props: { product }, revalidate: 20 };
};

export const getStaticPaths = async () => {
  const { products } = await getProducts({ authToken: '' });

  const ids = products?.map((p) => ({ params: { id: p.id.toString() } }));

  return {
    paths: ids,

    fallback: true,
  };
};
