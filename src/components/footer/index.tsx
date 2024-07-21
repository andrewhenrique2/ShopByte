import { FaInstagram, FaTwitter, FaTelegram, FaYoutube, FaFacebook, FaDiscord, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import mercadopago from '../../../public/cartoes.webp';
import pix from '../../../public/pix.webp';
import cartao from '../../../public/cartoes.webp';
import nuPay from '../../../public/nubank.webp';
import boleto from '../../../public/boleto.webp';
import googleSafe from '../../../public/google.webp';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-gray-800 text-white text-center">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Formas de Pagamento */}
        <div>
          <h2 className="font-bold mb-4">FORMAS DE PAGAMENTO</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-center gap-2">
              <Image src={mercadopago} alt="MercadoPago" width={340} height={340} />
            </li>
              <li className='flex gap-4 object-cover justify-center'>
              <Image src={pix} alt="Pix" width={60} height={60} />
              <Image src={nuPay} alt="NuPay" width={60} height={60} />
              <Image src={boleto} alt="Boleto MP" width={60} height={60} />
              </li>

          </ul>
        </div>

        {/* Segurança */}
        <div>
          <h2 className="font-bold mb-4">SEGURANÇA</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-center gap-2">
              <FaShieldAlt className="text-green-500 text-2xl" />
              Empresa Autorizada - Compre & Confie
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src={googleSafe} alt="Google - Site Seguro" width={100} height={100} />
              Google - Site Seguro
            </li>
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h2 className="font-bold mb-4">INSTITUCIONAL</h2>
          <ul className="space-y-2">
            <li>Quem somos</li>
            <li>Termos e Condições de Venda</li>
            <li>Política de Troca e Devoluções</li>
      
          </ul>
        </div>

        {/* Dúvidas */}
        <div>
          <h2 className="font-bold mb-4">DÚVIDAS</h2>
          <ul className="space-y-2">
            <li>Como comprar</li>
            <li>Prazos e entregas</li>
            <li>Formas de Pagamento</li>
            <li>Programa de Parceiros</li>
          </ul>
        </div>



    

        {/* Siga-nos */}
        <div className="col-span-2 md:col-span-4 cursor-pointer">
          <h2 className="font-bold mb-4">SIGA-NOS</h2>
          <div className="flex justify-center space-x-4">
            <FaInstagram className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaTelegram className="text-2xl" />
            <FaYoutube className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaDiscord className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p>Copyright © 2024 - Andrew</p>
      </div>
    </footer>
  );
}
