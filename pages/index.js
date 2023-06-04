import Home from '@/components/pages/home';
import useAppBar from '@/hooks/useAppBar';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Shop - Index</title>
        <meta name='description' content='Geart Online Shop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Home />
    </>
  );
}
