import { useTranslation } from "react-i18next";

import { SkillsCard } from "../components/skills-card";
import { HandWaving } from "@phosphor-icons/react";

import aboutPhoto from "../assets/about-photo.png"
import htmlIcon from "../assets/icons/html-icon.svg"
import cssIcon from "../assets/icons/css-icon.svg"
import jsIcon from "../assets/icons/javascript-icon.svg"
import tsIcon from "../assets/icons/typescript-icon.svg"
import reactIcon from "../assets/icons/react-icon.svg"
import tailwindIcon from "../assets/icons/tailwind-icon.svg"
import nodejsIcon from "../assets/icons/nodejs-icon.svg"
import figmaIcon from "../assets/icons/figma-icon.svg"

export function About() {
  const [ t ] = useTranslation("global")

  return (
    <section>
      <div id="about" className="relative h-fit flex flex-col items- my-12 z-0 scroll-mt-24  ">
        <div className="absolute top-0 right-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-l-full pr-3 z-10 transition-all ease-linear
        bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle shadow-indigo-600
          md:text-lg  lg:right-0 
          lg:h-10 lg:text-xl
          xl:h-11 ">            
          {t("header.about")}
        </div>
        <img 
          src={aboutPhoto} 
          alt="Matheus Correa" 
          className="h-fit w-full max-w-5xl object-contain object-left z-0 "
        />
        <div className="h-full flex flex-col items-center justify-center px-3 -mt-20 z-10 transition-all ease-linear     
          lg:my-auto lg:gap-y-4 lg:absolute lg:right-0
          xl:right-[1.5vw]
          2xl:right-[5vw]
        ">
          <p className="text-xs text-zinc-300 text-center leading-loose max-w-[800px] 
            sm:text-base sm:leading-relaxed
            md:text-lg
            lg:text-xl lg:text-center lg:w-[40vw] lg:leading-normal 
            xl:w-[50vw]  
          ">
            <HandWaving className="text-indigo-500 inline animate-wave size-4 sm:size-5 md:size-6 " /> Olá, sou <span className="text-indigo-500">Matheus</span>! <br/>
            Um <span className="text-zinc-100">desenvolvedor front-end</span> apaixonado em tecnologia que ama transformar <span className="font-bold">ideias</span> em realidades digitais.
          </p>
          <p className="text-xs text-zinc-300 text-center leading-loose  
            sm:text-base sm:leading-relaxed
            md:text-lg
            lg:text-xl lg:w-[40vw] lg:max-w-[800px] lg:leading-normal
            xl:w-[50vw]
          ">
            Com uma formação em <span className="text-indigo-500">Marketing</span>, desenvolvi a habilidade de entender as <span className="font-bold">necessidades dos usuários</span> e traduzi-las em interfaces criativas e amigáveis. Atualmente, estou em constante evolução no mundo da programação, sempre buscando novas ferramentas e tecnologias para aprimorar meu trabalho.<br/><br/>

            Meu objetivo? Criar interfaces que sejam tão funcionais quanto um atalho de teclado e tão atraentes quanto uma noite de maratona de séries. Entre uma animação CSS e um script em JavaScript, estou sempre em busca daquele toque especial que vai deixar o site incrível.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center overflow-hidden">
        <h2 className="text-center font-bold tracking-wide text-lg my-4  lg:text-xl xl:text-2xl">
          Habilidades técnicas
        </h2>
        <div className="grid grid-cols-2 justify-center gap-y-4 gap-x-5 p-3 transition-all duration-1000 ease-linear md:grid-cols-3 xl:grid-cols-4 grid-transition ">
          <SkillsCard 
            icon={htmlIcon}
            title={"HTML"}
            bgStyle={"absolute -top-28  opacity-100"}
          />
          <SkillsCard 
            icon={cssIcon}
            title={"CSS"}
            bgStyle={"absolute -top-44  opacity-100"}
          />
          <SkillsCard 
            icon={jsIcon}
            title={"JavaScript"}
            bgStyle={"absolute -left-0  opacity-100"}
          />
          <SkillsCard 
            icon={tsIcon}
            title={"TypeScript"}
            bgStyle={"absolute -left-32 opacity-100"}
          />
          <SkillsCard 
            icon={reactIcon}
            title={"React JS"}
            bgStyle={"absolute -left-10 opacity-100"}
          />
          <SkillsCard 
            icon={tailwindIcon}
            title={"Tailwind"}
            bgStyle={"absolute -left-20 opacity-100"}
          />
          <span className="flex col-span-2 gap-x-5 md:justify-center md:col-span-3 xl:col-span-2">
            <SkillsCard
              icon={figmaIcon}
              title={"Figma"}
              bgStyle={"absolute -top-12 opacity-100"}
            />
            <SkillsCard
              icon={nodejsIcon}
              title={"Node.js"}
              bgStyle={"absolute -left-36 opacity-100"}
            />
          </span>
        </div>
      </div>
    </section>
  )
}