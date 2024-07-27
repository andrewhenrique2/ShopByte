// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
import { FavoritosProvider } from '../pages/favoritos/FavoritosContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritosProvider>
      <div className="relative">
        <main className="pt-[var(--header-height)] below-768:bg-container">
        <Header/>
        <Banner />
        <Component {...pageProps} />
        </main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="custom-toast-container"
        />
      </div>
    </FavoritosProvider>
  );
}

export default MyApp;
