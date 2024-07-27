// src/pages/favoritos/page.tsx
import { FaBars, FaChevronDown } from 'react-icons/fa';

export default function Favoritos() {
  return (
    <div className="flex h-[500px]">
      <div className="w-full mx-[50px] h-[100px] bg-white mt-8"> {/* Container principal com altura de 100px */}
        <div className="h-[100px] bg-white flex items-center justify-between text-gray-500 px-4 border border-gray-300"> {/* Adiciona borda de 1px sólida */}
          <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded"> {/* Adiciona borda sólida ao container de ícone e texto */}
            <FaBars className="mr-2" /> {/* Ícone de três barras em cinza */}
            <span>OPÇÕES</span> {/* Texto "OPÇÕES" em cinza */}
          </div>
          <button className="flex items-center bg-white text-gray-500 border border-gray-300 rounded px-3 py-1 space-x-2 hover:bg-gray-100"> {/* Botão com fundo branco */}
            <span>ORDENAR POR</span>
            <FaChevronDown /> {/* Ícone de seta para baixo */}
          </button>
        </div>
        <main className="h-[1000px]"> {/* Div principal para teste */}
          {/* Conteúdo principal aqui */}
        </main>
      </div>
    </div>
  );
}
