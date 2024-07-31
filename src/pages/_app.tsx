// src/pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
import { FavoritosProvider } from '../utils/FavoritosContext';
import { CartProvider } from '../components/Card/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showBanner = router.pathname !== '/login';

  return (
    <FavoritosProvider>
      <CartProvider>
        <div className="relative">
          <Header />
          <main className="pt-[var(--header-height)] below-768:bg-container">
            {showBanner && <Banner />}
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="custom-toast-container"
        />
      </CartProvider>
    </FavoritosProvider>
  );
}

export default MyApp;
