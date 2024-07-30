import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch, FaUserCircle, FaBars, FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'; // Adicionado FaPlus e FaMinus
import logo from '../../../public/shopbyte.jpg';
import { useFavoritos } from '../../utils/FavoritosContext';
import { useCart } from '../../components/Card/CartContext';
import { formatCurrency, calculateTotal } from '../../utils/formatPrice';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const { contagemFavoritos, favoritos } = useFavoritos();
  const { cartItems, toggleCart, updateItemQuantity, removeFromCart } = useCart();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)) ||
      (cartRef.current && !cartRef.current.contains(event.target as Node))
    ) {
      setIsMenuOpen(false);
      setIsCartOpen(false);
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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleQuantityChange = (itemId: string, delta: number) => {
    updateItemQuantity(itemId, delta);
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  return (
    <>
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
              <FaHeart size={24} className={`cursor-pointer transition-colors duration-300 ${contagemFavoritos > 0 ? 'text-red-500' : 'text-orange-400'}`} />
              {contagemFavoritos > 0 && (
                <span className="absolute top-[-4px] left-4 inline-block w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {contagemFavoritos}
                </span>
              )}
            </Link>
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative hover:text-link">
              <FaShoppingCart size={24}/>
              {cartItems.length > 0 && (
                <span className="absolute top-[-4px] right-[-4px] inline-block w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
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
                <FaHeart size={24} className={`cursor-pointer transition-colors duration-300 ${contagemFavoritos > 0 ? 'text-red-500' : 'text-orange-400'}`} />
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
    
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div ref={cartRef} className="fixed right-0 top-0 w-80 h-full bg-white shadow-md p-4 z-50">
            <h2 className="text-lg font-black text-gray-500">Resumo de Compras</h2>
            <button onClick={() => setIsCartOpen(false)} className="absolute top-4 right-4 text-black">
              <FaTimes size={24} />
            </button>
            <div className="mt-4">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 mb-4">
                    <Image className="mb-12" src={item.imageSrc} alt={item.title} width={50} height={50} />
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold text-black border-b border-gray-300 pb-1 mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between ">
                        <p className="text-[16px] bg-green-500 text-white px-2 py-1 rounded-md">{item.newPrice}</p>
                        <div className="flex items-center text-bg space-x-2">
                          <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded-sm">
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded-sm">
                            <FaPlus />
                          </button>
                          <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
              )}
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2">
              <p className="font-bold text-bg">Total:</p>
              <p className="font-bold text-bg">{formatCurrency(calculateTotal(cartItems))}</p>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded">Finalizar Compra</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
