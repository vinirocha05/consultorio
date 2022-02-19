import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-lg text-white px-3 py-5">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="mb-5 px-5 py-4">
                    <ul>
                        <h3 className="text-xl text-blue-100">Empresa</h3>
                        <li className="text-sm">
                            <a href="">Sobre</a>
                        </li>
                        <li className="text-sm">
                            <a href="">História</a>
                        </li>
                        <li className="text-sm">
                            <a href="">Contatos</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-5 px-5 py-4">
                    <h3 className="text-xl text-blue-100">Produtos</h3>
                    <ul>
                        <li className="text-sm">
                            <a href="">Odontoliga geral</a>
                        </li>
                        <li className="text-sm">
                            <a href="">Branqueamento</a>
                        </li>                        <li className="text-sm">
                            <a href="">Aparelho</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-5 px-5 py-4">
                    <ul className="flex text-2xl md:justify-end items-center text-blue-900">
                        <li className="mx-3 hover:bg-pink-400 hover:border-2 hover:border-white duration-200 hover:text-white bg-blue-50 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                            <a href=""><FaInstagram /></a>
                        </li>
                        <li className="mx-3 hover:bg-green-500 hover:border-2 hover:border-white duration-200 hover:text-white bg-blue-50 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                            <a href=""><FaWhatsapp /></a>
                        </li>                        
                        <li className="mx-3 hover:bg-blue-700 hover:border-2 hover:border-white duration-200 hover:text-white bg-blue-50 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                            <a href=""><FaFacebookF /></a>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-3 text-center pb-2">
                    <p className='underline' >Desenvolvido por <Link  href="/">vinirocha05</Link></p>
                </div>

            </div>

        </footer>
    )
};
