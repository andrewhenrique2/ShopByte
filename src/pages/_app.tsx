// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header/index'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
