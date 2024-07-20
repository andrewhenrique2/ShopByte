// src/pages/index.tsx
import Header from '@/components/Header';
import Atrativos from '@/components/Atrativos';
import Itens from '@/pages/itens';

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
