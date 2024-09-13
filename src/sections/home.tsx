import { Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import homePhoto from "../assets/home-photo.png";
import { Link } from "@nextui-org/link";
import { StarsBackground } from "../components/stars-background";
import { useTranslation } from "react-i18next";

export function Home() {
  const [ t ] = useTranslation("global")

  return ( 
    <section id="home" className=" min-h-full h- flex  items-end ">
      <div className="relative h-full w-full flex flex-col items-center z-10 pt-16 overflow-y-hidden  xl:flex-row xl:   ">
        <StarsBackground skillCardStyle='' />

        {/* presentation */}
        <div
          className="relative h-fit min-w-fit w-fit flex flex-col justify-center py-10 px-3 my-auto mt-10
          md:gap-y-1 
          xl:my-auto xl:ml-[3.1vw]
          2xl:ml-[5vw]
          transition-all ease-linear duration-0 "
        >
          <p
            className="text-zinc-400 text-sm 
            sm:text-lg
            md:text-xl 
            lg:text-2xl 
            transition-all ease-linear  duration-75 select-none "
          >
            {t("home.hi")}
          </p>
          <span className="relative flex">
            <h1
              className=" font-merienda flex text-[10vw] leading-none font-bold text-nowrap py-2
              bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text 
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
              xl:text-[6.2vw]
              2xl:text-8xl
              transition-all ease-linear  duration-75 select-none"
            >
              Matheus Correa
            </h1>
            <h1
              className="absolute font-merienda flex text-[10vw] leading-none font-bold text-nowrap py-2
              bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-[6px]
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
              xl:text-[6.2vw]
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
              words={[t("home.dev")]}
              loop={0}
              cursor
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={3000}
            />
          </p>
          <div className="h-full w-full absolute left-1/2 -translate-x-1/2 bg-shadow blur-[130px] opacity-90 "></div>
        </div>

        {/* photo */}
        <img
          className=" flex max-w-md w-full ml-auto mb-0 mt-auto object-contain object-right-bottom  z-10
            xl:min-w-xl xl:max-w-2xl  2xl:mt-0
            select-none transition-all ease-linear duration-0"
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
            <Link
              href="https://www.instagram.com/mttcorrea/"
              target="_blank"
            >
              <Instagram className="text-zinc-400 size-7 md:size-8 cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mtcorrea/"
              target="_blank"
            >
              <Linkedin className="text-zinc-400 size-7 md:size-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}