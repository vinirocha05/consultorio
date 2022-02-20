import Image from "next/image"
import Link from "next/link"
import {useState } from "react"
import { FaBars } from 'react-icons/fa'

export default function Header(props) {
    const [click, setClick] = useState(true);
    function handleClick() {
        setClick(!click)
    }
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-lg fixed w-screen  z-10">
            <div className="flex h-24 justify-between items-center px-4 md:max-w-6xl mx-auto my-auto" >
                <div><Link href="/" passHref><Image src='/assets/img/dentistry.webp' alt="img" width='60' height='60' /></Link></div>
                <div className="flex flex-1 text-white justify-end md:hidden text-xl" >
                    <FaBars onClick={handleClick} />
                </div>
                <div>
                    <nav className="flex-1">
                        <ul className="text-white hidden md:flex ">
                            <li className="mx-2"><Link passHref href="/">Sobre</Link></li>
                            <li className="mx-2"><Link passHref href="/">Produtos</Link></li>
                            <li className="mx-2"><Link passHref href="/">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`h-screen text-blue-100 z-10 w-64 absolute top-0 md:hidden bg-blue-700 transform transition duration-500 ease-in-out ${click ? '-translate-x-full' : ''}`}>
                <div className="flex justify-center items-center py-6 "><Link href="/" passHref><Image src='/assets/img/dentistry.webp' alt="img" width='60' height='60' /></Link>
                    <span className="ml-2">Clínicas sempre sorrindo</span></div>
                <nav className="flex-1">
                    <ul className="text-white text-xl mt-5">
                        <li className="py-5 ml-8"><Link passHref href="/">Sobre</Link></li>
                        <li className="py-5 ml-8"><Link passHref href="/">Produtos</Link></li>
                        <li className="py-5 ml-8"><Link passHref href="/">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}; 
