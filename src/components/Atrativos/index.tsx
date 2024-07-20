import Image from "next/image";
import INTEL from '../../../public/intelbanner.webp';
import AMD from '../../../public/bannerryzen.jpg';

export default function Atrativos() {
    const imageWidth = 650; 
    const imageHeight = 150; 

    return (
        <div className="flex w-full mt-10 items-center justify-center" style={{ height: imageHeight }}>
            <div 
                className="relative border-none border-gray-500 rounded-md mx-5 cursor-pointer"
                style={{
                    width: imageWidth, 
                    height: imageHeight,
                    overflow: 'hidden' 
                }}
            >
                <Image 
                    src={AMD} 
                    layout="fill" 
                    objectFit="cover" 
                    alt="" 
                    className="rounded-2xl"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                />
            </div>
            <div 
                className="relative border-none border-gray-500 rounded-md mx-5 cursor-pointer" 
                style={{
                    width: imageWidth, 
                    height: imageHeight,
                    overflow: 'hidden'
                }}
            >
                <Image 
                    src={INTEL} 
                    layout="fill" 
                    objectFit="cover" 
                    alt="" 
                    className="rounded-2xl"
                    style={{
                        maxWidth: '100%', 
                        maxHeight: '100%',
                    }}
                />
            </div>
        </div>
    );
}
