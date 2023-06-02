import { ThemeContextProvider } from '@/context/themeContext';
import Layout from '@/layout';
import '../assets/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
