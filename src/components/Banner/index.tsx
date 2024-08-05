import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import banner1 from '../../../public/b1.jpg';
import banner2 from '../../../public/b2.jpg';
import banner3 from '../../../public/b3.jpg';

interface BannerProps {
  headerHeight: number;
}

const images = [banner1, banner2, banner3];

const transition = {
  duration: 1,
  ease: 'easeInOut',
};

const Banner: React.FC<BannerProps> = ({ headerHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once immediately to set initial width
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div
      className="banner-container relative overflow-hidden shadow-md mt-[25px] below-1000:mt-[-20px]"
    >
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: `${images.length * 100}vw`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
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
};

export default Banner;
