import Card from '../../components/Card';
import gabinete2 from '../../../public/gabinete2.jpg';
import geforce from '../../../public/Gforce.webp';
import ryzen from '../../../public/ryzen7.jpg';
import intel from '../../../public/intel.jpg';
import gabinete1 from '../../../public/pc.jpg';
import amdLogo from '../../../public/ryzen.png';
import nvidiaLogo from '../../../public/geforce.webp';
import intellogo from '../../../public/intel.png';
import ryzenProcessor from '../../../public/RyzenProcessor.webp';
import gabinete3 from '../../../public/gabinete3.jpg';
import rtxbanner from '../../../public/rtxbanner.webp';

const products = [
  {
    id: "PC-Gamer-T-GAMER-Hawk",
    imageSrc: gabinete2,
    imageAlt: "PC Gamer T-GAMER Hawk",
    title: "PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB",
    oldPrice: "R$ 4.500,00",
    newPrice: "R$ 3.499,90",
    installment: "",
    processor: "i5 10400F",
    memory: "8GB ",
    storage: "SSD 240GB",
  },
  {
    id: "Gamer-T-Gamer",
    imageSrc: gabinete3,
    imageAlt: "Computador X-Home",
    title: "Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB",
    oldPrice: "R$ 9.250,00",
    newPrice: "R$ 5.789,90",
    installment: "",
    processor: "Ryzen 7 5700",
    memory: "16GB ",
    storage: "SSD 1TB",
    additionalImages: [rtxbanner],
  },
  {
    id: "RTX-3080-10GB",
    imageSrc: geforce,
    imageAlt: "GeForce RTX",
    title: "GeForce RTX 3080 10GB",
    oldPrice: "R$ 6.000,00",
    newPrice: "R$ 5.500,00",
    installment: "",
    additionalImages: [nvidiaLogo],
  },
  {
    id: "Ryzen-7-5800X",
    imageSrc: ryzen,
    imageAlt: "Ryzen 7 5800X",
    title: "AMD Ryzen 7 5800X",
    oldPrice: "R$ 2.500,00",
    newPrice: "R$ 2.300,00",
    installment: "",
  },
  {
    id: "produto4",
    imageSrc: intel,
    imageAlt: "Intel Core i7",
    title: "Intel Core i7 12700K",
    oldPrice: "R$ 3.200,00",
    newPrice: "R$ 3.000,00",
    installment: "",
  },
  {
    id: "produto5",
    imageSrc: gabinete1,
    imageAlt: "Gabinete Gamer",
    title: "Gabinete Gamer RGB",
    oldPrice: "R$ 500,00",
    newPrice: "R$ 450,00",
    installment: "",
  },
];

export default function Itens() {
  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens" style={{ maxWidth: 'calc(100% - 300px)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            installment={product.installment}
            processor={product.processor}
            memory={product.memory}
            storage={product.storage}
            additionalImages={product.additionalImages || []}
          />
        ))}
      </div>
    </section>
  );
}
