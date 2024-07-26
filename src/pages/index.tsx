// src/pages/index.tsx
import Header from '@/components/Header';
import Atrativos from '@/components/Atrativos';
import Itens from '@/pages/itens';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    return (
      <>
            <Header />
            <Atrativos />
            <Itens />
            </>
    );
};

export default Home;
