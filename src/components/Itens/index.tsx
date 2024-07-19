import Card from './../Card/index';
import pc from '../../assets/pc.jpg';
import nvidia from '../../assets/geforce.webp';
import ryzen from '../../assets/ryzen.png';
import AMD from '../../assets/AMD.png';
import INTEL from '../../assets/intel.webp';
import gabinete2 from '../../assets/gabinete2.jpg';

export default function Itens() {
    return (
        <section className="mt-24 mx-auto p-8 bg-bgitens" style={{ maxWidth: 'calc(100% - 300px)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <Card
                    imageSrc={pc}
                    imageAlt="PC"
                    title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
                    oldPrice="R$ 4.500,00"
                    newPrice="R$ 3.499,90"
                    installment="10x de R$ 350,00 sem juros"
                    additionalImages={[nvidia, ryzen]} 
                />
                <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                 <Card
                    imageSrc={pc}
                    imageAlt="PC"
                    title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
                    oldPrice="R$ 4.500,00"
                    newPrice="R$ 3.499,90"
                    installment="10x de R$ 350,00 sem juros"
                    additionalImages={[nvidia, ryzen]} 
                />
                   <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                    <Card
                    imageSrc={pc}
                    imageAlt="PC"
                    title="Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB"
                    oldPrice="R$ 4.500,00"
                    newPrice="R$ 3.499,90"
                    installment="10x de R$ 350,00 sem juros"
                    additionalImages={[nvidia, ryzen]} 
                />
                       <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                       <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                       <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                       <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                       <Card
                    imageSrc={gabinete2}
                    imageAlt="Gabinete"
                    title="PC Gamer T-GAMER Hawk Intel i5 10400F / AMD Radeon RX 550 / 8GB DDR4 / SSD 240GB"
                    oldPrice="R$ 3.658,09 por:"
                    newPrice="R$ 2.359,90"
                    installment="12x de R$ 231,36 sem juros no cartão"
                    additionalImages={[INTEL, AMD]} 
                />
                
            </div>
        </section>
    );
}
