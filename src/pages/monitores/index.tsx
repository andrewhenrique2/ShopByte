import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { products } from '../itens/index';
import { Product } from '../../utils/types'; // Importa a interface do novo local

const MonitorsPage = () => {
  const [monitorProducts, setMonitorProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filtra os produtos cujo ID começa com "Monitor"
    const filteredMonitors = products.filter(product =>
      product.id.startsWith("Monitor")
    );
    setMonitorProducts(filteredMonitors);
  }, []);

  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens rounded-md below-768:bg-container2 below-768:p-0" style={{ maxWidth: 'calc(100% - 10px)' }}>
      <h1 className="text-center text-2xl font-bold mb-6 text-verdao">Monitores Disponíveis</h1>
      <div className="grid gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 6xl:grid-cols-8">
        {monitorProducts.length > 0 ? (
          monitorProducts.map((product) => (
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
          <p className="text-center col-span-full text-red-700">Nenhum monitor disponível no momento.</p>
        )}
      </div>
    </section>
  );
};

export default MonitorsPage;
