import React from "react";
import Header from "../Header/Header";
import sispag from "../../assets/sispag.png";
import interzap from "../../assets/interzap.png";
import telemarketing from "../../assets/telemarketing.png";
import Footer from "../Footer/Footer";

const Home = () => (
  <>
    <div className="min-h-[90vh]">
      <Header></Header>
      <div className="px-28 mt-52">
        <p className="bg-gray inline text-white py-3 px-6 rounded-3xl tracking-widest ">
          <span className="text-[#6C6C6C] mr-2">&lt;/&gt;</span>FULL STACK
          DEVELOPER
        </p>
        <h1 className="text-white font-bold text-4xl my-6">
          Transformando código em
          <span className="text-primary mr-2"> soluções</span>
          inovadoras
        </h1>
        <p className="text-lg text-gray-2 max-w-4xl">
          Sou Arthur Menezes, desenvolvedor full stack com foco em back-end.
          Estudei em instituições como CEFET, Trybe e Alura, e além da
          programação, tenho paixão pela aviação e montagem de miniaturas.
        </p>
        <button className="w-28 h-11 bg-primary rounded-lg mt-12 flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            className="mr-6 hover:mr-4 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="px-28 bg-black flex gap-16 min-h-[60vh] py-32">
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray hover:bg-gray rounded-lg p-5 group">
            <div className="w-14 h-14 bg-gray group-hover:bg-primary rounded-full mb-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                className="bi bi-terminal-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z" />
              </svg>
            </div>
            <p className="text-white font-semibold">
              Linguagens de programação
            </p>
            <p className="text-gray-2">
              Tenho uma experiência sólida em PHP e JavaScript.
            </p>
          </div>
          <div className="border border-gray hover:bg-gray rounded-lg p-5 group">
            <div className="w-14 h-14 bg-gray group-hover:bg-primary rounded-full mb-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="bi bi-grid-1x2-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <p className="text-white font-semibold">Frameworks PHP</p>
            <p className="text-gray-2">
              Especializado em CodeIgniter e Laravel, oferecendo agilidade.
            </p>
          </div>
          <div className="border border-gray hover:bg-gray rounded-lg p-5 group">
            <div className="w-14 h-14 bg-gray group-hover:bg-primary rounded-full mb-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold">Frameworks JavaScript</p>
            <p className="text-gray-2">
              Vasta experiência em React, Redux e Node.js.
            </p>
          </div>
          <div className="border border-gray hover:bg-gray rounded-lg p-5 group">
            <div className="w-14 h-14 bg-gray group-hover:bg-primary rounded-full mb-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="bi bi-database-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223" />
                <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
              </svg>
            </div>
            <p className="text-white font-semibold">Banco de Dados</p>
            <p className="text-gray-2">
              Domínio de MySQL com 5 anos de experiência na área.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-4xl text-white font-bold mb-4">
          Minhas especializações
        </h2>
        <p className="text-[#707070] mb-10">
          Ao longo da minha carreira como desenvolvedor full stack, adquiri
          experiência em diversas linguagens, frameworks e ferramentas que me
          permitem criar soluções robustas e eficientes.
        </p>
        <button className="w-28 h-11 bg-primary rounded-lg mt-12 flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            className="mr-6 hover:mr-4 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="px-28 bg-black min-h-[60vh] pb-32">
      <h2 className="text-white text-4xl font-bold text-center mb-8">
        Últimos projetos
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="bg-gray rounded-2xl max-w-[621px]">
            <img src={sispag} />
            <div className="p-8">
              <p className="text-white font-bold mb-4">SISPAG</p>
              <p className="text-gray-2">
                Novos métodos de planejamento financeiro ajudam a economizar até
                30% a mais do que aquelas que não o utilizam.
              </p>
              <div className="flex gap-2 items-center mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#898989"
                  class="bi bi-plus-circle cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <p className="text-gray-2 cursor-pointer">Saiba mais</p>
              </div>
            </div>
          </div>
          <div className="bg-gray rounded-2xl max-w-[621px]">
            <img src={interzap} />
            <div className="p-8">
              <p className="text-white font-bold mb-4">Interzap</p>
              <p className="text-gray-2">
                Um sistema de WhatsApp Business que desenvolvi durante minha
                experiência na Inter Gestão. O objetivo do Interzap é
                centralizar todas as mensagens do WhatsApp em um único número.
              </p>
              <div className="flex gap-2 items-center mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#898989"
                  class="bi bi-plus-circle cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <p className="text-gray-2 cursor-pointer">Saiba mais</p>
              </div>
            </div>
          </div>
          <div className="bg-gray rounded-2xl max-w-[621px]">
            <img src={telemarketing} />
            <div className="p-8">
              <p className="text-white font-bold mb-4">
                Telemarketing Logística
              </p>
              <p className="text-gray-2">
                Facilita a vida do departamento de logística e dos gestores, com
                uma solução inovadora para simplificar a negociação de fretes.
              </p>
              <div className="flex gap-2 items-center mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#898989"
                  class="bi bi-plus-circle cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <p className="text-gray-2 cursor-pointer">Saiba mais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-20 flex items-center flex-col">
      <h2 className="text-4xl text-white font-bold mb-4">Vamos conversar?</h2>
      <p className="text-gray-2 text-center max-w-[60vw] mb-10">
        Se você é recrutador ou está buscando um desenvolvedor full stack
        dedicado e apaixonado por tecnologia, estou à disposição para
        conversarmos.
      </p>
      <button className="w-36 h-11 bg-primary rounded-lg text-white font-bold">
        Fale comigo
      </button>
    </div>
    <Footer></Footer>
  </>
);

export default Home;
