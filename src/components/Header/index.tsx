import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch, FaUserCircle, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // Abre o menu
  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsMenuOpen(true);
  };

  // Fecha o menu com um atraso para evitar fechamento imediato
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setIsMenuOpen(false);
      }
    }, 100); // Delay para evitar fechamento imediato
  };

  // Fecha o menu ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Adiciona o listener de clique
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove o listener ao desmontar
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Atualiza o estado do menu ao sair do hover
    if (!isHovering) {
      setIsMenuOpen(false);
    }
  }, [isHovering]);

  return (
    <header className="bg-bg text-white py-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>

        <div className="flex-grow mx-4 flex justify-center">
          <div className="flex w-full max-w-[800px]">
            <input 
              className='border border-gray-300 rounded-l-md rounded-r-none p-2 text-black w-full focus:outline-none'
              placeholder='Pesquise o seu produto'
              type="text"
              id="search"
            />
            <button className="p-2 bg-white text-black rounded-r-md border border-gray-300 border-l-0 focus:outline-none">
              <FaSearch className="cursor-pointer"/>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mr-20">
          <FaUserCircle size={32} className="cursor-pointer"/>
          <div className="flex-col items-center space-x-1 hidden md:flex">
            <div className="text-xs flex items-start py-2">
              <span className="mx-1 text-[1.5em]">Olá,</span>
              <Link href="/login" className="hover:text-link text-[16px] font-black">Entre</Link>
              <span className="mx-1 text-[1.4em]">ou</span>
            </div>
            <Link href="/cadastro" className="hover:text-link text-[16px] font-black">Cadastre-se</Link>
          </div>
          <Link href="/favorites" className="hover:text-link relative">
            <FaHeart size={24}/>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
          </Link>
          <Link href="/cart" className="hover:text-link relative">
            <FaShoppingCart size={24}/>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
