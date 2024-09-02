import { Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import homePhoto from "../assets/math-photo6.png";
import { Link } from "@nextui-org/link";
import { StarsBackground } from "../components/stars-background";

export function Home() {
  return ( 
    <div id="home" className=" min-h-screen h-screen flex  items-end ">
      <div className="relative h-full w-full flex flex-col items-center z-10 pt-16  xl:flex-row overflow-y-hidden   ">
        <StarsBackground />

        {/* presentation */}
        <div
          className="relative h-fit min-w-fit w-fit flex flex-col justify-center py-10 px-3 my-auto mt-10
          md:gap-y-1 
          xl:my-auto xl:ml-[3.5vw]
          2xl:ml-[5vw]
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
          className=" flex max-w-md w-full ml-auto mb-0 mt-auto object-contain object-right-bottom  z-10
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
          lg:pl-14
          transition-all ease-linear duration-75"
        >
          <div
            className=" flex flex-col justify-center pl-5 h-full gap-x-8 gap-y-8 text-zinc-400 
            md:flex-row md:h-fit md:mb-8 
            transition-all ease-linear duration-75"
          >
            <Link 
              href="https://github.com/mkorrea"
              target="_blank"
            >
              <Github className="text-zinc-400 size-7 md:size-8 cursor-pointer" 
            />
            </Link>
            <Link>
              <Instagram className="text-zinc-400 size-7 md:size-8 cursor-pointer" />
            </Link>
            <Link>
              <Linkedin className="text-zinc-400 size-7 md:size-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}