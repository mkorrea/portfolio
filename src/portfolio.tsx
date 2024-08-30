import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
  Github,
  Home,
  Instagram,
  Languages,
  Laptop,
  Linkedin,
  Mail,
  User,
  } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import WavingHandIcon from '@mui/icons-material/WavingHand';

import homePhoto from "./assets/math-photo6.png";
import aboutPhoto from "./assets/about-photo.png"
import logo from "./assets/logo.png";

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-dvh flex items-center flex-col ">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`fixed max-w-[1920px] mx-auto w-full backdrop-blur-lg bg-bg-color/50 shadow-xl shadow-bg-color/50 flex justify-center`}
        // shouldHideOnScroll
        isBlurred={false}
        isBordered
      >
        <NavbarContent>
          <NavbarBrand>
            <img className="h-10 sm:max-w-fit lg:h-12 " src={logo} alt="" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        {/* menu desktop */}
        <NavbarContent
          className="hidden gap-x-1 sm:min-w-fit sm:flex xl:gap-x-4 "
          data-justify="center"
        >
          <NavbarItem>
            <Link
              className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear "
              href="#home"
            >
              <Home size={16} />
              <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base ">
                Início
              </p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear "
              href="#about"
            >
              <User size={16} />
              <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base  ">
                Sobre mim
              </p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear "
              href="#projects"
            >
              <Laptop size={16} />
              <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base  ">
                Projetos
              </p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear  bg-indigo-600 py-2 -my-2 rounded-lg shadow-[0px_0px_8px] shadow-indigo-800"
              href="#contact"
            >
              <Mail size={16} />
              <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base  ">
                Contato
              </p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear "
              href="#home"
            >
              <Languages size={16} />
              <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base  ">
                Idioma
              </p>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* menu mobile */}
        <NavbarMenu className="backdrop-blur-md bg-bg-color/30 py-6 flex gap-y-8 overflow-y-hidden">
          <NavbarMenuItem>
            <Link
              className="flex items-center gap-x-2 justify-center text-zinc-100"
              href="#home"
            >
              <Home size={16} />
              <p className="font-semibold leading-4 ">Início</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="flex items-center gap-x-2 justify-center text-zinc-100"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={16} />
              <p className="font-semibold leading-4  ">Sobre mim</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="flex items-center gap-x-2 justify-center text-zinc-100"
              href="#projects"
            >
              <Laptop size={16} />
              <p className="font-semibold leading-4  ">Projetos</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="flex items-center gap-x-2 justify-center text-zinc-100 bg-indigo-600 py-2 -my-2 rounded-lg shadow-[0px_0px_8px] shadow-indigo-800"
              href="#contact"
            >
              <Mail size={16} />
              <p className="font-semibold leading-4  ">Contato</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="flex items-center gap-x-2 justify-center text-zinc-100"
              href="#home"
            >
              <Languages size={16} />
              <p className="font-semibold leading-4  ">Idioma</p>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <main className="relative w-[1920px] max-w-full  ring-border ring-2 z-10 bg-bg-color ">
        {/* home */}
        <div id="home" className="h-screen max-h-[1080px] flex  items-end ">
          <div className="relative h-full w-full flex flex-col items-center z-10 pt-16  xl:flex-row overflow-y-hidden   ">
            {/* stars background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.5] scale-x-95 -translate-x-9 ">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <div id="stars4"></div>
            </div>

            {/* presentation */}
            <div
              className="relative h-fit min-w-fit w-fit flex flex-col justify-center py-10 px-3 my-auto 
              md:gap-y-1 
              lg:mt-24
              xl:my-auto xl:pl-10
              2xl:ml-40 
              transition-all ease-linear duration-75 "
            >
              <p
                className="text-zinc-400 text-sm 
                sm:text-lg
                md:text-xl 
                lg:text-2xl 
                transition-all ease-linear  duration-75 select-none "
              >
                Olá! Eu me chamo
              </p>
              <span className="relative flex">
                <h1
                  className=" font-merienda flex text-[10vw] leading-none font-bold text-nowrap py-2
                  bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text 
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  xl:text-[6.5vw]
                  2xl:text-8xl
                  transition-all ease-linear  duration-75 select-none"
                >
                  Matheus Correa
                </h1>
                <h1
                  className="absolute font-merienda flex text-[10vw] leading-none font-bold text-nowrap py-2
                  bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-sm
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  xl:text-[6.5vw]
                  2xl:text-8xl
                  transition-all ease-linear  duration-75 select-none"
                >
                  Matheus Correa
                </h1>
              </span>
              <p
                className="w-full text-zinc-100 text-sm text-center font-bold italic tracking-wide pl-3 
                sm:text-lg sm:tracking-wider
                md:text-xl md:tracking-widest 
                lg:text-2xl 
                transition-all ease-linear  duration-75 select-none "
              >
                <Typewriter
                  words={["Desenvolvedor Front-end"]}
                  loop={0}
                  cursor
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={3000}
                />
              </p>
              <div className="h-full w-full absolute left-1/2 -translate-x-1/2 bg-shadow blur-3xl opacity-90 "></div>
            </div>

            {/* photo */}
            <img
              className=" flex max-w-md w-full ml-auto mb-0 mt-auto object-contain object-right-bottom overflow-y-hidden z-10
                lg:max-w-lg lg:mt-auto
                xl:max-w-xl 
                2xl:max-w-2xl
                select-none transition-all ease-linear duration-75"
              src={homePhoto}
              alt="Matheus Correa"
            />

            {/* socials */}
            <div
              className="absolute flex justify-between items-end mt-auto w-fit h-fit max-h-fit z-20 bottom-24 left-0 
              md:bottom-0 md:ml-8 md:mb-8
              lg:left-[3vw] 
              2xl:left-[10vw]
              transition-all ease-linear duration-75"
            >
              <div
                className=" flex flex-col justify-center pl-5 h-full gap-x-8 gap-y-8 text-zinc-400 
                md:flex-row md:h-fit md:mb-8 
                transition-all ease-linear duration-75"
              >
                <Link>
                  <Github className="text-zinc-400 size-7 md:size-8" />
                </Link>
                <Link>
                  <Instagram className="text-zinc-400 size-7 md:size-8" />
                </Link>
                <Link>
                  <Linkedin className="text-zinc-400 size-7 md:size-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* quote */}
        <div className="flex flex-col justify-center items-center gap-y-2 w-full px-3 py-10 bg-gradient-to-b from-bg-color via-bg-quote  to-bg-color   lg:py-11 xl:py-14 transition-all ease-linear duration-75 ">
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
        <div id="about" className="relative h-[500px] py-12">
          <div className="absolute right-0 top-14 flex justify-center items-center font-bold bg-gradient-to-l from-indigo-900 to-indigo-600 h-9 w-36 rounded-l-full shadow-middle-xl shadow-indigo-600 pr-3">
            Sobre mim
          </div>
          <div className="relative w-full h-fit flex items-end  border border-blue-500 ">
            <img 
              src={aboutPhoto} 
              alt="Matheus Correa" 
              className="h-fit w-fit object-contain object-left-top"
            />
            <div className="absolute h-full -mb-28   sm:mb-10">
              <div className="h-full flex flex-col items-end justify-end px-3   border">
                <p className="text-xs text-zinc-300 text-end w-3/5 leading-relaxed ">
                  <WavingHandIcon className="text-indigo-500  max-w-4" /> Olá, sou <span className="text-indigo-500">Matheus</span>! <br/>
                  Um entusiasta do código e das interfaces!
                  Um <span className="text-zinc-100">desenvolvedor front-end</span> que ama transformar ideias em realidades digitais.
                </p>
                <p className="text-xs text-zinc-300 text-justify leading-relaxed ">
                  Meu objetivo? Criar interfaces que sejam tão funcionais quanto um atalho de teclado e tão atraentes quanto uma noite de maratona de séries. Entre uma animação CSS e um script em JavaScript, estou sempre em busca daquele toque especial que vai deixar o site incrível.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
