import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { products } from '../itens/index';
import { Product } from '../../utils/types'; // Importa a interface do novo local

const MousepadsPage = () => {
  const [mousepadProducts, setMousepadProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filtra os produtos cujo ID começa com "Mousepad"
    const filteredMousepads = products.filter(product =>
      product.id.startsWith("Mousepad")
    );
    setMousepadProducts(filteredMousepads);
  }, []);

  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens rounded-md below-768:bg-container2 below-768:p-0" style={{ maxWidth: 'calc(100% - 10px)' }}>
      <h1 className="text-center text-2xl font-bold mb-6 text-verdao">Mousepads Disponíveis</h1>
      <div className="grid gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 6xl:grid-cols-8">
        {mousepadProducts.length > 0 ? (
          mousepadProducts.map((product) => (
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
          ))
        ) : (
          <p className="text-center col-span-full text-red-700">Nenhum mousepad disponível no momento.</p>
        )}
      </div>
    </section>
  );
};

export default MousepadsPage;
