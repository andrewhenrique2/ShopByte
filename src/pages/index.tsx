// src/pages/index.tsx
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Atrativos from '@/components/Atrativos';
import Itens from '@/components/Itens';

const Home = () => {
    return (
      <>
            <Header />
            <Banner />
            <Atrativos />
            <Itens />
            </>
    );
};

export default Home;
