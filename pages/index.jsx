import Header from "./components/Header"
import Footer from "./components/Footer"

import Aos from "aos"
import 'aos/dist/aos.css';

import { useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div className="bg-[url('/assets/img/mobile-photo.webp')] h-68vh md:bg-[url('/assets/img/main-bg.webp')] bg-no-repeat md:h-screen md:bg-cover">
        </div>
        <div className="h-2/3 w-1/3 p-8 rounded-md shadow-md border-2 border-blue-700 bg-blue-50 absolute top-40 left-20 hidden md:block"><h2 className="mb-3 text-lg font-bold" >Agende uma consulta</h2>
          <form className="flex flex-col" action="">
            <label>Nome</label>
            <input type="text" className="mb-3 border-2 border-gray-100 shadow-sm" />
            <label>Sobrenome</label>
            <input type="text" className="mb-3 border-2 border-gray-100 shadow-sm" />
            <label>Telefone</label>
            <input type="number" className="mb-3 border-2 border-gray-100 shadow-sm" />
            <label className="mb-2"  >Qual especialidade</label>
            <select id="combo-box" className="mb-3 border-2 border-gray-100 shadow-sm" name="time">
              <option value=""></option>
              <option value="ac">Odontologia geral</option>
              <option value="ac">Branqueamento</option>
              <option value="ac">Aparelho</option>
            </select>
            <button className="bg-blue-700 px-4 py-2 w-2/3 ml-10 my-1 text-white rounded-md hover:bg-blue-500 duration-300 flex justify-center items-center " > <FaWhatsapp className="mx-2" /> Pedir um orçamento</button>
          </form>
        </div>

        <div className="bg-blue-50 h-screen w-full grid grid-cols-1 md:grid-cols-2 md:px-10 md:py-10">
          <div data-aos='fade-right' className="w-full h-full flex justify-center items-center md:block">
            <img src='/assets/img/dor_de_dente.webp' alt='' className="w-3/4 h-2/3" />
          </div>
          <div data-aos='fade-left' className="w-3/4 mx-auto h-2/3 ">
            <h2 className="text-3xl font-heading font-bold mb-2 md:mb-2">Teste</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.</p>
          </div>
        </div>

        <div className="bg-blue-50 h-screen w-full grid grid-cols-1 md:grid-cols-2 md:px-10 md:py-10">
          <div data-aos='fade-left' className="w-full h-full flex justify-center items-center md:block md:order-2">
            <img src='/assets/img/clareamento.webp' alt='' className="w-3/4 h-2/3" />
          </div>
          <div data-aos='fade-right' className="w-3/4 mx-auto ">
            <h2 className="text-3xl font-heading font-bold mb-2 md:mb-2 md:order-1">Teste</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.</p>
          </div>
        </div>

        <div className="bg-blue-50 h-screen w-full grid grid-cols-1 md:grid-cols-2 md:px-10 md:py-10">
          <div data-aos='fade-right' className="w-full h-full flex justify-center items-center md:block">
            <img src='/assets/img/aparelho.webp' alt='' className="w-3/4 h-2/3" />
          </div>
          <div data-aos='fade-left' className="w-3/4 mx-auto ">
            <h2 className="text-3xl font-heading font-bold mb-2 md:mb-2">Teste</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, exercitationem deserunt. Repellat aliquam dolor ad pariatur vitae delectus beatae ut.</p>
          </div>
        </div>
        <div className="bg-blue-50 h-96 mb-5 w-full grid grid-cols-1  md:px-10 md:py-10">
          <div className=" h-96 md:h-3/4 w-2/3 mx-auto p-8 rounded-md shadow-md border-2 border-blue-700 bg-blue-50  md:block"><h2 className="mb-3 text-lg font-bold" >Agende uma consulta</h2>
            <form className="flex flex-col" action="">
              <label>Nome</label>
              <input type="text" className="mb-3 border-2 border-gray-100 shadow-sm" placeholder="Seu nome" />
              <label>Sobrenome</label>
              <input type="text" className="mb-3 border-2 border-gray-100 shadow-sm" placeholder="Seu sobrenome" />
              <label>Telefone</label>
              <input type="number" className="mb-3 border-2 border-gray-100 shadow-sm" placeholder="Seu telefone" />
              <label className="mb-2"  >Qual especialidade</label>
              <select id="combo-box" className="mb-3 border-2 border-gray-100 shadow-sm" name="time" placeholder="O quê você precisar?">
                <option value=""></option>
                <option value="ac">Odontologia geral</option>
                <option value="ac">Branqueamento</option>
                <option value="ac">Aparelho</option>
              </select>
              <button className="bg-blue-700 px-4 py-2 w-fill mx-auto my-1 text-white rounded-md hover:bg-blue-500 duration-300 flex justify-center items-center " > <FaWhatsapp className=" mx-1 md:mx-2" /> Pedir um orçamento</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}