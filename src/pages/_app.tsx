import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header/index';
import Banner from '@/components/Banner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Header />
      <main className="pt-[var(--header-height)]"> {/* Ajuste o padding-top baseado na altura do header */}
        <Banner />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
