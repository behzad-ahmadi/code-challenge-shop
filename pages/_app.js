import { ThemeContextProvider } from '@/context/themeContext';
import Layout from '@/layout';
import '../assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBarProvider } from '@/context/appBarContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <AppBarProvider>
        <ToastContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppBarProvider>
    </ThemeContextProvider>
  );
}
