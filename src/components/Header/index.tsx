import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaRegHeart,
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaTrash,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';

import logo from '../../../public/shopbyte.png';
import { useFavoritos } from '../../utils/FavoritosContext';
import { useCart } from '../../components/Card/CartContext';
import { formatCurrency, calculateTotal } from '../../utils/formatPrice';
import { products } from '../../pages/itens'; // Importa a lista de produtos
import { useRouter } from 'next/router';
import { handleProductNavigation } from '../../utils/navigationUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cep, setCep] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de busca
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para os produtos filtrados

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null); // Ref para a área de busca

  const { contagemFavoritos } = useFavoritos();
  const { cartItems, updateItemQuantity, removeFromCart } = useCart();
  const router = useRouter(); // Adicione o hook useRouter

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)) ||
      (cartRef.current && !cartRef.current.contains(event.target as Node)) ||
      (searchRef.current && !searchRef.current.contains(event.target as Node))
    ) {
      setIsMenuOpen(false);
      setIsCartOpen(false);
      setSearchTerm(''); // Fecha o dropdown de busca
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Atualiza os produtos filtrados sempre que o termo de busca muda
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm]);

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

  const handleAddCep = () => {
    console.log('CEP adicionado:', cep);
  };

  const handleSearchItemClick = (product: any) => {
    console.log("Produto selecionado:", product);
    handleProductNavigation(router, product);
    setSearchTerm('');
    // Reinicia os produtos filtrados para forçar a re-renderização
    setFilteredProducts([]);
    setTimeout(() => setFilteredProducts(products.filter(p => p.id !== product.id)), 50);
  };
  
  
  
  

  return (
    <>
      <header
        ref={headerRef}
        className="bg-bg text-white fixed w-full z-50 h-auto flex top-0 px-4 md:px-10 lg:px-80 gap-12 below-1600:lg:px-10 "
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 gap-8 below-1000:px-0 below-1000:gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={60}
              style={{ objectFit: 'contain' }}
            />
            <span
              className="hidden md:flex text-3xl ml-2"
              style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Shop
              <span
                className="text-2xl text-orange-700"
                style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}
              >
                Byte
              </span>
            </span>
          </Link>

          <div className="flex justify-center flex-1 max-w-[600px] sm:flex" ref={searchRef}>
            <div className="flex w-full h-[45px] relative">
              <input
                className={`w-full p-1 text-sm focus:outline-none border-none ${
                  isScrolled
                    ? 'bg-dark text-white'
                    : 'border-gray-300 text-black'
                } ${
                  searchTerm ? 'rounded-t-md' : 'rounded-l-md'
                }`} // Condicional para o border-radius
                placeholder="Pesquise o seu produto"
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className={`p-2 focus:outline-none ${
                  isScrolled ? 'bg-dark text-white' : 'bg-white text-black'
                } ${searchTerm ? 'rounded-t-md' : 'rounded-r-md'}`} // Condicional para o border-radius
              >
                <FaSearch className="cursor-pointer" />
              </button>

              {/* Exibição dos resultados da busca */}
              {searchTerm && (
              <div className="absolute top-full left-0 right-0 bg-white text-black shadow-lg max-h-60 overflow-y-auto z-50">
                <h3 className="text-lg font-semibold p-2">Resultados da Busca</h3>
                {filteredProducts.length > 0 ? (
                  <ul>
                    {filteredProducts.map((product) => (
                      <li
                        key={`${product.id}-${new Date().getTime()}`} // chave única com timestamp
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSearchItemClick(product)}
                      >
                      <Image
                              src={product.imageSrc.src}
                              alt={product.title}
                              width={50}
                              height={50}
                              unoptimized={true}
                              key={`${product.imageSrc.src}-${new Date().getTime()}`} // Chave dinâmica para forçar atualização
                            />
                        <span className="ml-4">{product.title}</span>
                      </li>
                    ))}

                    </ul>
                  ) : (
                    <p className="text-gray-500 p-2">Nenhum produto encontrado.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <FaUserCircle size={32} className="cursor-pointer mr-2 text-white" />
            <div className="flex-col items-center space-x-1">
              <div className="text-xs flex items-start py-2 mr-8">
                <span className="mx-1 text-[1.5em]">Olá,</span>
                <Link
                  href="/login"
                  className="hover:text-link text-[16px] font-black"
                >
                  Entre
                </Link>
                <span className="mx-1 text-[1.4em]">ou</span>
              </div>
              <Link
                href="/cadastro"
                className="hover:text-link text-[16px] font-black"
              >
                Cadastre-se
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="/favoritos" className="hover:text-link relative">
                <FaRegHeart
                  size={24}
                  className="cursor-pointer transition-colors duration-300"
                />
                {contagemFavoritos >= 0 && (
                  <span className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {contagemFavoritos}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative hover:text-link"
              >
                <FaShoppingCart size={24} />
                {cartItems.length >= 0 && (
                  <span className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              ref={buttonRef}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="ml-4 focus:outline-none relative hover:text-link"
            >
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute top-[-4px] right-[-4px] w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-bg text-white px-4 py-2 absolute left-0 w-full shadow-md z-40"
          >
            <div className="flex flex-col space-y-4">
              <input
                className="border-none rounded-md p-2 text-black w-full text-sm focus:outline-none"
                placeholder="Pesquise o seu produto"
                type="text"
                id="search"
              />
              <Link
                href="/login"
                className="hover:text-link text-[16px] font-black"
                onClick={handleMenuItemClick}
              >
                Entre
              </Link>
              <Link
                href="/cadastro"
                className="hover:text-link text-[16px] font-black"
                onClick={handleMenuItemClick}
              >
                Cadastre-se
              </Link>
              <Link
                href="/favoritos"
                className="hover:text-link flex items-center space-x-2"
                onClick={handleMenuItemClick}
              >
                <FaRegHeart
                  size={24}
                  className={`cursor-pointer transition-colors duration-300 ${
                    contagemFavoritos > 0 ? 'text-red-500' : 'text-orange-400'
                  }`}
                />
                <span>Favoritos</span>
                <span className="w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center ml-2">
                  {contagemFavoritos}
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>

      <nav
        ref={navRef}
        className="bg-bg text-white fixed w-full top-[80px] pb-2 pt-1 z-40 justify-center items-center flex text-sm sm:gap-4 lg:gap-8 below-1000:hidden"
      >
        <div className="container flex items-center w-full justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start mr-4 lg:mr-[74px]">
            <Link
              href="/"
              className="hover:text-orange-500 flex items-center space-x-2 bg-black p-2 rounded-lg"
            >
              <FaBars size={20} />
              <span>DEPARTAMENTOS</span>
            </Link>
          </div>

          <div className="flex justify-start flex-wrap gap-2 md:gap-4 lg:gap-8 w-full md:w-auto">
            <Link
              href="/promocoes"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>PROMOÇÕES</span>
            </Link>
            <Link
              href="/mouse"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>MOUSE</span>
            </Link>
            <Link
              href="/teclado"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>TECLADO</span>
            </Link>
            <Link
              href="/mousepad"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>MOUSEPAD</span>
            </Link>
            <Link
              href="/monitores"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>MONITORES</span>
            </Link>
            <Link
              href="/notbook"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>NOTEBOOKS</span>
            </Link>
            <Link
              href="/computador"
              className="hover:text-orange-500 flex items-center space-x-2"
            >
              <span>PC GAMER</span>
            </Link>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={cartRef}
            className="fixed inset-y-0 right-0 w-full sm:w-80 h-full bg-white shadow-md p-4 z-50 overflow-y-auto"
          >
            <h2 className="text-lg font-black text-gray-500">Resumo de Compras</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 text-black"
            >
              <FaTimes size={24} />
            </button>
            <div className="mt-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 mb-4"
                  >
                    <Image
                      className="mb-12"
                      src={item.imageSrc}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold text-black border-b border-gray-300 pb-1 mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-[16px] bg-green-500 text-white px-2 py-1 rounded-md">
                          {item.newPrice}
                        </p>
                        <div className="flex items-center text-bg space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-2 py-1 bg-gray-200 rounded-sm"
                          >
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-2 py-1 bg-gray-200 rounded-sm"
                          >
                            <FaPlus />
                          </button>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  Seu carrinho está vazio.
                </p>
              )}
            </div>
            <div className="flex flex-col justify-between border-t border-gray-300 pt-2">
              <p className="font-bold text-bg">Total:</p>
              <p className="font-bold text-bg">
                {formatCurrency(calculateTotal(cartItems))}
              </p>
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="border border-gray-300 rounded-l-md p-2 text-black w-full text-sm focus:outline-none"
              />
              <button
                onClick={handleAddCep}
                className="bg-orange-500 text-white py-2 px-4 rounded-r-md hover:bg-orange-400"
              >
                Adicionar CEP
              </button>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
