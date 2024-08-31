import { HandWaving } from "@phosphor-icons/react";


import aboutPhoto from "./assets/about-photo.png"
import { Header } from "./sections/header";
import { Home } from "./sections/home";

export function Portfolio() {


  return (
    <div className="flex items-center flex-col ">
      <Header />

      <main className="relative w-[1440px] max-w-full ring-border ring-2 z-10 bg-bg-color ">
        

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
        <div id="about" className=" h-fit flex items-center justify-between my-12 z-0 border">
          {/* <StarsBackground /> */}
          <div className="relative w-full h-fit flex items-center  border border-blue-500 ">
            <img 
              src={aboutPhoto} 
              alt="Matheus Correa" 
              className="h-fit w-full  object-contain object-left z-0"
            />
            <div className="absolute w-full h-fit flex flex-col gap-y-40 mt-6   border border-pink-400">
              <div className="ml-auto flex justify-center items-center font-bold text-sm bg-gradient-to-l from-indigo-900 to-indigo-600 h-9 w-36 rounded-l-full shadow-middle-xl shadow-indigo-600 pr-3">
                Sobre mim
              </div>
              <div className="h-full flex flex-col items-end justify-end px-3   border border-green-600">
                <p className="text-[2.7vw] text-zinc-300 text-end w-3/5 leading-relaxed sm:text-md md:text-lg">
                  <HandWaving className="text-indigo-500 inline animate-wave  " /> Olá, sou <span className="text-indigo-500">Matheus</span>! <br/>
                  Um entusiasta do código e das interfaces!
                  Um <span className="text-zinc-100">desenvolvedor front-end</span> que ama transformar ideias em realidades digitais.
                </p>
                <p className="text-[2.7vw] text-zinc-300 text-justify leading-relaxed max-w-[700px] sm:text-md md:text-lg">
                  Meu objetivo? Criar interfaces que sejam tão funcionais quanto um atalho de teclado e tão atraentes quanto uma noite de maratona de séries. Entre uma animação CSS e um script em JavaScript, estou sempre em busca daquele toque especial que vai deixar o site incrível.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* quote */}
        <div className="flex flex-col justify-center items-center gap-y-2 w-full px-3 py-10 bg-gradient-to-b from-bg-color via-bg-quote  to-bg-color   lg:py-11 xl:py-14 transition-all ease-linear duration-75 z-40">
          <p
            className=" text-xs text-center italic text-zinc-400 tracking-[.05em] max-w-3xl  transition-all ease-linear duration-75
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

      </main>
    </div>
  );
}
