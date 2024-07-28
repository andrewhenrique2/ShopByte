import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/shopbyte.jpg';
import { useFavoritos } from '../../utils/FavoritosContext'; // Ajuste o caminho conforme necessário

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const { contagemFavoritos } = useFavoritos(); // Obtenha a contagem de favoritos

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um item
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="bg-bg text-white py-4 fixed w-full top-0 left-0 z-50 shadow-md min-h-[80px]"
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-32">
        <Link href='/' className='flex items-center gap-2'>
          <Image 
            src={logo} 
            alt="Logo" 
            width={80} 
            height={120} 
            style={{ objectFit: 'contain' }} 
          />
          <span className='hidden md:flex text-3xl' style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}>
            Shop
            <span className='text-2xl text-orange-700' style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}>
              Byte
            </span>
          </span>
        </Link>

        <div className="flex-grow mx-4 flex justify-center">
          <div className="flex w-full max-w-[800px]">
            <input 
              className='border border-gray-300 rounded-l-md rounded-r-none p-1 text-black w-full text-sm focus:outline-none'
              placeholder='Pesquise o seu produto'
              type="text"
              id="search"
            />
            <button className="p-2 bg-white text-black rounded-r-md border border-gray-300 border-l-0 focus:outline-none">
              <FaSearch className="cursor-pointer"/>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <FaUserCircle size={32} className="cursor-pointer"/>
          <div className="flex-col items-center space-x-1">
            <div className="text-xs flex items-start py-2">
              <span className="mx-1 text-[1.5em]">Olá,</span>
              <Link href="/login" className="hover:text-link text-[16px] font-black">Entre</Link>
              <span className="mx-1 text-[1.4em]">ou</span>
            </div>
            <Link href="/cadastro" className="hover:text-link text-[16px] font-black">Cadastre-se</Link>
          </div>
          <Link href="/favoritos" className="hover:text-link relative">
            <FaHeart size={24}/>
            {contagemFavoritos > 0 && (
              <span className="absolute top-[-4px] left-4 inline-block w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {contagemFavoritos}
              </span>
            )}
          </Link>
          <Link href="/cart" className="hover:text-link relative">
            <FaShoppingCart size={24}/>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            ref={buttonRef}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-bg text-white px-4 py-2 absolute top-[80px] left-0 w-full shadow-md z-40">
          <div className="flex flex-col space-y-4">
            <input 
              className='border border-gray-300 rounded-md p-2 text-black w-full text-sm focus:outline-none'
              placeholder='Pesquise o seu produto'
              type="text"
              id="search"
            />
            <Link href="/login" className="hover:text-link text-[16px] font-black" onClick={handleMenuItemClick}>Entre</Link>
            <Link href="/cadastro" className="hover:text-link text-[16px] font-black" onClick={handleMenuItemClick}>Cadastre-se</Link>
            <Link href="/favoritos" className="hover:text-link flex items-center space-x-2" onClick={handleMenuItemClick}>
              <FaHeart size={24}/>
              <span>Favoritos</span>
              {contagemFavoritos > 0 && (
                <span className="inline-block w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center ml-2">
                  {contagemFavoritos}
                </span>
              )}
            </Link>
            <Link href="/cart" className="hover:text-link flex items-center space-x-2" onClick={handleMenuItemClick}>
              <FaShoppingCart size={24}/>
              <span>Carrinho</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
