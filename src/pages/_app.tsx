// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header/index';
import Banner from '@/components/Banner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Banner/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
