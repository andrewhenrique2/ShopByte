// Cart.tsx
import React from 'react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ width: '400px' }}>
      <button onClick={onClose} className="absolute top-4 right-4">Fechar</button>
      <div className='flex max-w-5xl justify-center items-center h-72'>
        <h1 className="text-3xl flex justify-center items-center text-center text-orange-600">Carrinho ainda em desenvolvimento</h1>
      </div>
    </div>
  );
}

export default Cart;
