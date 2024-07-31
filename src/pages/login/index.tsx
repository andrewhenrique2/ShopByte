// src/pages/login.tsx
import { useState } from 'react';
import { auth, provider } from '../../utils/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import Head from 'next/head';
import { FaGoogle, FaLock, FaUser } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login com email e senha aqui
    console.log('Email:', email, 'Senha:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Login - ShopByte</title>
      </Head>
      <div className="flex shadow-lg">
        <div className="bg-gray-200 p-8 rounded-l-lg text-center w-full max-w-md">
          <FaUser className="mx-auto mb-4 text-gray-500" size={50} />
          <h1 className="text-2xl text-orange-500 mb-2 font-black">
            LOGIN
          </h1>
          <h2 className="text-[18px] mb-4 text-bg">
            sou cliente
          </h2>
          <p className="text-gray-600">Olá! Se você já comprou na loja da ShopByte antes, por favor, informe seu e-mail e senha.</p>
        </div>
        <div className="bg-white p-8 rounded-r-lg text-center w-full max-w-md shadow-xl">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-MAIL, CPF OU CNPJ"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-orange-500 text-bg shadow"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="SENHA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-orange-500 text-bg shadow"
                required
              />
              <FaLock className="absolute right-3 top-3 text-gray-400" />
            </div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Chave de teste do reCAPTCHA
              className="mb-4"
            />
            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
              >
                ENTRAR
              </button>
              <a href="/create-account" className="text-orange-500">
                CRIAR CONTA
              </a>
            </div>
          </form>
          <div className="flex items-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <span className="text-gray-500">ou</span>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 w-full"
          >
            <FaGoogle className="mr-2" />
            Entrar com Google
          </button>
          <div className="flex justify-center mt-4">
            <FaLock className="mr-2 text-gray-400" />
            <a href="/forgot-password" className="text-blue-500">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
