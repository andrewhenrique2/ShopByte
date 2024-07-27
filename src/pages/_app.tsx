import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Header />
      <main className="pt-[var(--header-height)] below-768:bg-container"> {/* Ajuste o padding-top baseado na altura do header */}
        <Banner />
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  );
}

export default MyApp;
