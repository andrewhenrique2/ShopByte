import Card from '../../components/Card';
import gabinete2 from '../../../public/gabinete2.jpg';
import geforce from '../../../public/geforce.webp';
import RYZEN from '../../../public/Ryzen.png';
import INTEL from '../../../public/intel.png';
import gabinete1 from '../../../public/pc.jpg';


export default function Itens() {
  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens" style={{ maxWidth: 'calc(100% - 300px)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <Card
          id="produto1"
          imageSrc={gabinete2}
          imageAlt="Computador X-Home"
          title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
          oldPrice="R$ 4.500,00"
          newPrice="R$ 3.499,90"
          installment="10x de R$ 350,00 sem juros"
        />
        <Card
          id="produto2"
          imageSrc={geforce}
          imageAlt="GeForce RTX"
          title="GeForce RTX 3080 10GB"
          oldPrice="R$ 6.000,00"
          newPrice="R$ 5.500,00"
          installment="12x de R$ 460,00 sem juros"
        />
        <Card
          id="produto3"
          imageSrc={RYZEN}
          imageAlt="Ryzen 7 5800X"
          title="AMD Ryzen 7 5800X"
          oldPrice="R$ 2.500,00"
          newPrice="R$ 2.300,00"
          installment="8x de R$ 300,00 sem juros"
        />
        <Card
          id="produto4"
          imageSrc={INTEL}
          imageAlt="Intel Core i7"
          title="Intel Core i7 12700K"
          oldPrice="R$ 3.200,00"
          newPrice="R$ 3.000,00"
          installment="10x de R$ 300,00 sem juros"
        />
        <Card
          id="produto5"
          imageSrc={gabinete1}
          imageAlt="Gabinete Gamer"
          title="Gabinete Gamer RGB"
          oldPrice="R$ 500,00"
          newPrice="R$ 450,00"
          installment="5x de R$ 90,00 sem juros"
        />
      </div>
    </section>
  );
}
