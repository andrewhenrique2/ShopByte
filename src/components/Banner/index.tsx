import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import banner1 from '../../assets/b1.jpg';
import banner2 from '../../assets/b2.jpg';
import banner3 from '../../assets/b3.jpg';

const images = [banner1, banner2, banner3]; // Lista de imagens

const transition = {
    duration: 1, // Duração da transição
    ease: "easeInOut", // Tipo de transição
};

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Troca a imagem a cada 6s segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    useEffect(() => {
        controls.start({
            x: `-${currentIndex * 100}vw`, // Mova a imagem corretamente
            transition,
        });
    }, [currentIndex, controls]);

    return (
        <div className="relative w-full overflow-hidden mt-[135px] cursor-pointer">
            <motion.div
                className="flex"
                animate={controls}
                initial={{ x: 0 }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: `${images.length * 100}vw`, // Ajuste a largura do contêiner
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            flexShrink: 0,
                            width: '100vw',
                            height: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={image}
                            alt={`banner-${index}`}
                            layout="responsive" // Ajusta a imagem para a largura do contêiner
                            width={1920} // Largura padrão da imagem
                            height={1080} // Altura padrão da imagem
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
