import Card from '../../components/Card';
import gabinete2 from '../../../public/assets/gabinete2.jpg';
import geforce from '../../../public/assets/geforce.webp';
import RYZEN from '../../../public/assets/Ryzen.png';
import INTEL from '../../../public/assets/intel.png';
import gabinete1 from '../../../public/assets/pc.jpg';


export default function Itens() {
  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens" style={{ maxWidth: 'calc(100% - 300px)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <Card
          id="computador-x-home-ryzen-5-5600x-nvidia-geforce-rtx-3060-16gb-ddr4-ssd-480gb"
          imageSrc={gabinete2}
          imageAlt="PC"
          title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
          oldPrice="R$ 4.500,00"
          newPrice="R$ 3.499,90"
          installment="10x de R$ 350,00 sem juros"
          additionalImages={[geforce, RYZEN ]}
        />
        <Card
          id="gabinete-t-gamer-hawk-intel-i5-10400f-amd-radeon-rx-550-8gb-ddr4-ssd-240gb"
          imageSrc={gabinete1}
          imageAlt="Gabinete"
          title="Gabinete T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
          oldPrice="R$ 3.658,09"
          newPrice="R$ 2.359,90"
          installment="12x de R$ 231,36 sem juros no cartão"
          additionalImages={[geforce, INTEL]}
        />
              <Card
          id="computador-x-home-ryzen-5-5600x-nvidia-geforce-rtx-3060-16gb-ddr4-ssd-480gb"
          imageSrc={gabinete2}
          imageAlt="PC"
          title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
          oldPrice="R$ 4.500,00"
          newPrice="R$ 3.499,90"
          installment="10x de R$ 350,00 sem juros"
          additionalImages={[geforce, RYZEN ]}
        />
          <Card
          id="gabinete-t-gamer-hawk-intel-i5-10400f-amd-radeon-rx-550-8gb-ddr4-ssd-240gb"
          imageSrc={gabinete1}
          imageAlt="Gabinete"
          title="Gabinete T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
          oldPrice="R$ 3.658,09"
          newPrice="R$ 2.359,90"
          installment="12x de R$ 231,36 sem juros no cartão"
          additionalImages={[geforce, INTEL]}
        />
              <Card
          id="computador-x-home-ryzen-5-5600x-nvidia-geforce-rtx-3060-16gb-ddr4-ssd-480gb"
          imageSrc={gabinete2}
          imageAlt="PC"
          title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
          oldPrice="R$ 4.500,00"
          newPrice="R$ 3.499,90"
          installment="10x de R$ 350,00 sem juros"
          additionalImages={[geforce, RYZEN ]}
        />
       
      </div>
    </section>
  );
}
