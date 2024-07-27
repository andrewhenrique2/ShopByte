import Card from '../../components/Card';
import fone from '../../../public/fone.jpg';
import fone2 from '../../../public/fone2.jpg';
import fone3 from '../../../public/fone3.jpg';
import AMD from '../../../public/AMD.png';
import umquatro from '../../../public/144.png';
import aorus from '../../../public/aorus.png';
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
import monitor from '../../../public/monitor.webp';    
import monitor2 from '../../../public/monitor2.webp';    
import monitor3 from '../../../public/monitor3.jpg';    
import monitor4 from '../../../public/monitor4.jpg';    
import monitor5 from '../../../public/monitor5.jpg';    
import monitor6 from '../../../public/monitor6.jpg';    
import gamimax1 from '../../../public/gamemax1.jpg';    
import gamimax2 from '../../../public/gamemax2.jpg';    
import gamimax3 from '../../../public/gamemax3.jpg';    
import gamimax4 from '../../../public/gamemax4.jpg';    
import teclado from '../../../public/teclado.jpg';
import teclado2 from '../../../public/teclado2.jpg';
import teclado3 from '../../../public/teclado3.jpg';
import teclado4 from '../../../public/teclado4.jpg';
import placa1 from '../../../public/plac.webp';
import placa2 from '../../../public/plc2.webp';
import placa3 from '../../../public/plc3.webp';
import not1 from '../../../public/not.jpg';
import not2 from '../../../public/not2.jpg';
import not3 from '../../../public/not3.jpg';
import not4 from '../../../public/not4.jpg';
import pad from '../../../public/pad.jpg';
import pad2 from '../../../public/pad2.jpg';  
import pad3 from '../../../public/pad3.jpg'; 
import mouse from '../../../public/mouse1.jpg';  
import mouse2 from '../../../public/mouse2.jpg';  
import mouse3 from '../../../public/mouse3.jpg';
import cadeira from '../../../public/caidera.webp';
import cadeira2 from '../../../public/caidera2.webp';
import cadeira3 from '../../../public/cadeira3.webp';
import fa from '../../../public/fa.jpg';
import fa2 from '../../../public/fa2.jpg';
import fa3 from '../../../public/fa3.jpg';
import fonte from '../../../public/fonte.webp';
import fonte2 from '../../../public/fonte2.webp';
import fonte3 from '../../../public/fonte3.webp';
import fonte4 from '../../../public/fonte3.webp';



const products = [

  {
    id: "Monitor-Gamer-SuperFrame-Vision",
    imageSrc: monitor,
    imageAlt: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
    title: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
    oldPrice: "R$ 2.067,59 ",
    newPrice: "R$ 799,90",
    isOnPromotion: true,
    promotionEndTime: "2024-10-01T23:59:59Z",

    moreImages: [monitor, monitor2, monitor3, monitor4, monitor5, monitor6],
  },

  {
    id: "Gamer-T-Gamer",
    imageSrc: gabinete3,
    imageAlt: "Computador X-Home",
    title: "Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB",
    oldPrice: "R$ 9.250,00",
    newPrice: "R$ 5.789,90",
    processor: "Ryzen 7 5700",
    memory: "16GB",
    storage: "SSD 1TB",
    additionalImages: [rtxbanner],
    moreImages: [gabinete3, gamimax1, gamimax2, gamimax3, gamimax4],
  },


  {
    id: "RTX-3080-10GB",
    imageSrc: geforce,
    imageAlt: "GeForce RTX",
    title: "GeForce RTX 3080 10GB",
    oldPrice: "R$ 6.000,00",
    newPrice: "R$ 4.500,00",
    additionalImages: [rtxbanner],
    moreImages: [geforce, placa1, placa2, placa3],

  },


  {
    id: "Teclado-Gamer-Mecânico-Akko-5075S",
    imageSrc: teclado,
    imageAlt: "Teclado Gamer Mecânico Akko 5075S Steam Engine, RGB, ABNT2, White, Switch Cream Yellow V3 Pro",
    title: "Teclado Gamer Mecânico Akko 5075S Steam Engine, RGB, ABNT2, White, Switch Cream Yellow V3 Pro",
    oldPrice: "R$ 779,99",
    newPrice: "R$ 529,90",
    isOnPromotion: true,
    promotionEndTime: "2024-11-01T23:59:59Z",

    moreImages: [teclado, teclado2, teclado3, teclado4],
  },

  {
    id: "Notebook Gamer Gigabyte Aorus 15",
    imageSrc: not1,
    imageAlt: "Notebook Gamer Gigabyte Aorus 15 Intel Core i5 12500H / RTX 4050 6GB / 8 GB DDR5 / SSD 512GB / Win 11 home / Preto, 9MF-E2BR383SH",
    title: "Notebook Gamer Gigabyte Aorus 15 Intel Core i5 12500H / RTX 4050 6GB / 8 GB DDR5 / SSD 512GB / Win 11 home / Preto, 9MF-E2BR383SH",
    oldPrice: "R$ 12.999,99 ",
    newPrice: "R$ 7.199,99",
    isOnPromotion: true,
    promotionEndTime: "2024-11-01T23:59:59Z",
    moreImages: [ not1,  not2, not3, not4],
    additionalImages: [rtxbanner],


  },
  {
    id: "Fonte Gigabyte Aorus AP1200PM",
    imageSrc: fonte,
    imageAlt: "Fonte Gigabyte Aorus AP1200PM",
    title: "Fonte Gigabyte Aorus AP1200PM 1200W, 80 PLUS Platinum, PFC Ativo, Full Modular, GP-AP1200PM",
    oldPrice: "R$ 3.259,90 ",
    newPrice: "R$ 2.180,00",
    additionalImages: [aorus],
    moreImages: [fonte, fonte2, fonte3, fonte4,],
  },


  {
    id: "Monitor-Full-HD-144",
    imageSrc: monitor2,
    imageAlt: "Monitor-144-1ms",
    title: "Monitor Full HD 1080P 144Hz 1ms",
    oldPrice: "R$ 1.500,00",
    newPrice: "R$ 600,00",
    isOnPromotion: true,
    promotionEndTime: "2024-08-01T23:59:59Z",
    additionalImages: [umquatro],
    moreImages: [ monitor2,  monitor5, monitor6],
  },


  {
    id: "Mousepad Gamer Force One",
    imageSrc: pad,
    imageAlt: "Mousepad Gamer Force One Skyhawk Fluxo Edition, 3XL (1200x550x3mm), FR.MP.SH.09",
    title: "Mousepad Gamer Force One Skyhawk Fluxo Edition, 3XL (1200x550x3mm), FR.MP.SH.09",
    oldPrice: "R$ 189,90   ",
    newPrice: "R$ 119,90",
    isOnPromotion: true,
    promotionEndTime: "2024-09-01T23:59:59Z",
    moreImages: [ pad,  pad2, pad3],

  },


  {
    id: "Mouse Gamer SuperFrame Magnus",
    imageSrc: mouse,
    imageAlt: "Mouse Gamer SuperFrame Magnus, RGB, Sensor PAW 3333, 19000 DPI, 7 Botões, Pink",
    title: "Mouse Gamer SuperFrame Magnus, RGB, Sensor PAW 3333, 19000 DPI, 7 Botões, Pink",
    oldPrice: "R$ 39,90  ",
    newPrice: "R$ 29,90",
    isOnPromotion: true,
    promotionEndTime: "2024-09-01T23:59:59Z",
    moreImages: [ mouse,  mouse2, mouse3,],

  },

  {
    id: "Headset Gamer Fifine",
    imageSrc: fone,
    imageAlt: "Headset Gamer Fifine SuperFrame Edition SFH6, 7.1 Surround, Drivers de 50mm, RGB, USB, White",
    title: "Headset Gamer Fifine SuperFrame Edition SFH6, 7.1 Surround, Drivers de 50mm, RGB, USB, White",
    oldPrice: "R$ 569,00   ",
    newPrice: "R$ 179,90",
    isOnPromotion: true,
    promotionEndTime: "2024-09-01T23:59:59Z",
    moreImages: [ fone,  fone2, fone3,],

  },

  {
    id: "Cadeira Gamer SuperFrame ",
    imageSrc: cadeira,
    imageAlt: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
    title: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
    oldPrice: "R$ 799,99 ",
    newPrice: "R$ 559,90",
    moreImages: [cadeira, cadeira2, cadeira3,],
  },

  {
    id: "Kit Fan Com 3 Unidades Gamer Ninja",
    imageSrc: fa,
    imageAlt: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
    title: "Kit Fan Com 3 Unidades Gamer Ninja Fuuton, ARGB, 120mm, Black",
    oldPrice: "R$ 249,99  ",
    newPrice: "R$ 79,90",
    moreImages: [fa, fa2, fa3,],
  },

  
  {
    id: "Gabinetegamer",
    imageSrc: gabinete1,
    imageAlt: "Gabinete Gamer",
    title: "Gabinete Gamer RGB",
    oldPrice: "R$ 500,00",
    newPrice: "R$ 450,00",
  },

 
  {
    id: "Ryzen-7-5800X",
    imageSrc: ryzen,
    imageAlt: "Ryzen 7 5800X",
    title: "AMD Ryzen 7 5800X",
    oldPrice: "R$ 2.500,00",
    newPrice: "R$ 2.300,00",
  },

 
  {
    id: "intelcorei7",
    imageSrc: intel,
    imageAlt: "Intel Core i7",
    title: "Intel Core i7 12700K",
    oldPrice: "R$ 3.200,00",
    newPrice: "R$ 3.000,00",
  },

];

const Itens = () => {
  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens rounded-md below-768:bg-container2 below-768:p-0" style={{ maxWidth: 'calc(100% - 50px)' }}>
    <div className="grid gap-4 p-4    lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 6xl:grid-cols-8  ">
    {products.map((product) => (
          <Card 
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            isOnPromotion={product.isOnPromotion}
            promotionEndTime={product.promotionEndTime}
            processor={product.processor}
            memory={product.memory}
            storage={product.storage}
            additionalImages={product.additionalImages || []}
            moreImages={product.moreImages || []}
          />
        ))}
      </div>
    </section>
  );
};

export default Itens;
