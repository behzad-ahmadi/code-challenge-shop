import Head from 'next/head';

export default function MyHead({ pageTitle = '' }) {
  return (
    <Head>
      <title>{`Shop - ${pageTitle}`}</title>
      <meta name='description' content='Geart Online Shop' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
    </Head>
  );
}
