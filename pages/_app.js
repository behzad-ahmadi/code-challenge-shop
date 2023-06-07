import { ThemeContextProvider } from '@/context/themeContext';
import Layout from '@/layout';
import '../assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBarProvider } from '@/context/appBarContext';
import { CartContextProvider } from '@/context/cartContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <AppBarProvider>
        <CartContextProvider>
          <ToastContainer position='top-center' style={{ fontSize: 15 }} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </AppBarProvider>
    </ThemeContextProvider>
  );
}
