// src/pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
import { FavoritosProvider } from '../utils/FavoritosContext';
import { CartProvider } from '../components/Card/CartContext'; // Adicione a importação do CartProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritosProvider>
      <CartProvider> {/* Envolva tudo com CartProvider */}
        <div className="relative">
          <Header />
          <main className="pt-[var(--header-height)] below-768:bg-container">
            <Banner />
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <ToastContainer
          position="top-center" // Define a posição para o centro superior
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="custom-toast-container" // Adiciona a classe personalizada
        />
      </CartProvider>
    </FavoritosProvider>
  );
}

export default MyApp;
