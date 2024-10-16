import React from "react";
import Header from "../Header/Header";

const Home = () => (
  <div className="h-[90vh]">
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
          class="mr-6 hover:mr-4 transition-all duration-300"
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
);

export default Home;
