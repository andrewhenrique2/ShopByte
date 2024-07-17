// src/components/Header/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-bg text-white px-[200px] py-4 flex items-center">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="flex-grow mx-4 flex justify-center">
        <input 
          className='border border-gray-300 rounded-md p-2 text-black w-full max-w-[600px]'
          placeholder='Pesquise o seu produto'
          type="text"
          name=""
          id="search"
        />
        <button className="ml-2 p-2 bg-white text-black rounded-md">
          <FaSearch className="cursor-pointer"/>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <FaUserCircle size={28} className="cursor-pointer"/>
        <div className="flex-col items-center space-x-1">
          <div className="text-xs flex items-start ">
            <span className="mx-1">Olá,</span>
            <Link href="/login" className="hover:text-gray-300 text-xs font-black">Entre</Link>
            <span className="mx-1">ou</span>
          </div>
          <Link href="/cadastro" className="hover:text-gray-300 text-xs font-black">Cadastre-se</Link>
        </div>
        <Link href="/favorites" className="hover:text-gray-300 relative">
          <FaHeart />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
        </Link>
        <Link href="/cart" className="hover:text-gray-300 relative">
          <FaShoppingCart />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
