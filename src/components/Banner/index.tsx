import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import banner1 from '../../../public/b1.jpg';
import banner2 from '../../../public/b2.jpg';
import banner3 from '../../../public/b3.jpg';

const images = [banner1, banner2, banner3];

const transition = {
  duration: 1,
  ease: "easeInOut",
};

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}vw`,
      transition,
    });
  }, [currentIndex, controls]);

  return (
    <div className="banner-container relative mt-20 overflow-hidden"> {/* Ajuste a margem superior aqui */}
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: `${images.length * 100}vw`,
          transition: 'transform 1s ease-in-out', // Garantir transição
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="" // Ajuste para ocupar toda a largura da tela
          >
            <Image
              src={image}
              alt={`banner-${index}`}
              layout="responsive"
              width={1920}
              height={1080}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            style={{ transition: 'background-color 0.3s' }}
          />
        ))}
      </div>
    </div>
  );
}
