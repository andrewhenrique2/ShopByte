import { useRouter } from 'next/router';


export default function Cart() {
    const router = useRouter();

    return (
        <div className=' flex justify-center items-center h-72'>
            <h1 className="text-3xl  text-orange-600">Carrinho ainda em desenvolvimento</h1>
        </div>
    )
}