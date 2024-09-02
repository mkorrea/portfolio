import { HandWaving } from "@phosphor-icons/react";


import aboutPhoto from "./assets/about-photo.png"
import { Header } from "./sections/header";
import { Home } from "./sections/home";

import jsIcon from "./assets/javascript.svg"
import tsIcon from "./assets/typescript.svg"
import reactIcon from "./assets/react.svg"
import viteIcon from "./assets/vite.svg"
import tailwindIcon from "./assets/tailwind.svg"

export function Portfolio() {


  return (
    <div className="flex items-center flex-col ">
      <Header />

      <main className="relative w-[1920px] max-w-full ring-border ring-2 z-10 bg-bg-color overflow-x-hidden ">
        <Home />

        {/* quote */}
        <div className="flex flex-col justify-center items-center gap-y-2 w-full px-3 py-10 bg-gradient-to-b from-bg-color via-bg-quote  to-bg-color   lg:py-11 xl:py-14 transition-all ease-linear duration-75 z-40">
          <p
            className="h-fit text-xs text-center italic text-zinc-400 tracking-[.05em] max-w-3xl  transition-all ease-linear duration-75
            sm:text-sm
            md:text-base
            lg:text-lg
          "
          >
            <span className="text-indigo-500">"</span>
            Um bom programador é alguém que sempre olha para os dois lados antes
            de atravessar uma rua de mão única.
            <span className="text-indigo-500">"</span>
          </p>
          <p className="text-[10px] text-zinc-700   sm:text-xs  md:text-sm lg:text-base">
            {" "}
            - Doug Linder{" "}
          </p>
        </div>

        {/* about */}
        <div id="about" className="relative h-fit flex flex-col items- my-12 z-0   ">
          <div className="absolute top-0 right-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-l-full pr-3 z-10 transition-all ease-linear
          bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle-xl shadow-indigo-600
            md:text-lg  lg:right-0 
            lg:h-10 lg:text-xl
            xl:h-11 ">            
            Sobre mim
          </div>
          <img 
            src={aboutPhoto} 
            alt="Matheus Correa" 
            className="h-fit w-full max-w-5xl object-contain object-left z-0 "
          />
          <div className="h-full flex flex-col items-end justify-center px-3 -mt-20 z-10 transition-all ease-linear     
            lg:my-auto lg:gap-y-4 lg:absolute lg:right-0
            xl:right-[1.5vw]
            2xl:right-[5vw]
          ">
            <p className="text-[2.7vw] text-zinc-300 text-center leading-relaxed max-w-[800px] 
              sm:text-lg
              lg:text-xl lg:text-center lg:w-[40vw]
              xl:w-[50vw]
            ">
              <HandWaving className="text-indigo-500 inline animate-wave size-4 sm:size-5 md:size-6 " /> Olá, sou <span className="text-indigo-500">Matheus</span>! <br/>
              Um entusiasta do código e das interfaces!
              Um <span className="text-zinc-100">desenvolvedor front-end</span> que ama transformar ideias em realidades digitais.
            </p>
            <p className="text-[2.7vw] text-zinc-300 text-center leading-relaxed  
              sm:text-lg 
              lg:text-xl lg:w-[40vw] lg:max-w-[800px]
              xl:w-[50vw]
            ">
              Meu objetivo? Criar interfaces que sejam tão funcionais quanto um atalho de teclado e tão atraentes quanto uma noite de maratona de séries. Entre uma animação CSS e um script em JavaScript, estou sempre em busca daquele toque especial que vai deixar o site incrível.
            </p>
          </div>
        </div>


        <div className="flex justify-center">
          <div className="w-full border border-indigo-600/80 rounded-lg shadow-tech  shadow-indigo-700 mx-3 max-w-7xl ">
            <h2 className="text-center text-lg my-4">Tecnologias e ferramentas</h2>
            <div className="flex flex-wrap justify-center transition-all ease-linear gap-x-10 p-6 lg:gap-x-24 xl:gap-x-32">
              <img src={jsIcon} alt="js" className="w-20" />
              <img src={tsIcon} alt="ts" className="w-20" />
              <img src={reactIcon} alt="react" className="w-20" />
              <img src={viteIcon} alt="vite" className="w-20" />
              <img src={tailwindIcon} alt="tailwind" className="w-20" />
            </div>
          </div>
        </div>



      </main>
    </div>
  );
}
