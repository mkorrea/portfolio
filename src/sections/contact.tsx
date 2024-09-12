import { ExternalLink, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { StarsBackground } from "../components/stars-background";
import { Typewriter } from "react-simple-typewriter";

export function Contact() {
  const [ isHovered, setIsHovered ] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  
  return(
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-10 gap-y-8  overflow-hidden"
    >
      
      <h1 className="text-2xl text-zinc-100">Contato</h1>

      <div className="flex flex-col gap-y-4 gap-x-8 md:flex-row">
        <a 
          className="w-64 h-fit flex  text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:bg-transparent transition-all" 
          href="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Mail  size={17}/>
          {isHovered ? (
          <p className="flex flex-1 transition-all duration-1000 ease-linear  "> 
            <Typewriter
              words={["devkorrea@gmail.com"]}
              typeSpeed={20}
              
            />  
          </p> 
          ) : 
          <p className="flex flex-1 transition-all duration-1000 ease-linear"> Email</p>}
          {/* <p className="flex flex-1 transition-all duration-1000 ease-linear"> {isHovered ? 'devkorrea@gmail.com' : 'Email'}  </p> */}
          <ExternalLink size={17} className="text-zinc-400"/>
        </a>

        <a className="w-64 h-fit flex  text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:bg-transparent " href="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?">
          <Github  size={17}/>
          <p className="flex flex-1">Github</p>
          <ExternalLink size={17} className="text-zinc-400"/>
        </a>

        <a className="w-64 h-fit flex  text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:bg-transparent " href="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?">
          <Linkedin  size={17}/>
          <p className="flex flex-1">Linkedin</p>
          <ExternalLink size={17} className="text-zinc-400"/>
        </a>

        <a className="w-64 h-fit flex  text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:bg-transparent " href="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?"
        >
          <SiWhatsapp  size={17}/>
          <p className="flex flex-1">Whatsapp</p>
          <ExternalLink size={17} className="text-zinc-400"/>

        </a>
        <a className="w-64 h-fit flex  text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:bg-transparent " href="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?">
          <Instagram  size={17}/>
          <p className="flex flex-1">Instagram</p>
          <ExternalLink size={17} className="text-zinc-400"/>
        </a>

      </div>
      
      {/* <div className="flex justify-center gap-x-8  md:flex-row md:h-fit md:mb-8  transition-all ease-linear duration-75">
        <Link href="https://github.com/mkorrea" target="_blank">
          <Github className="text-zinc-200 size-7 md:size-8 cursor-pointer" 
        />
        </Link>
        <Link href="https://www.instagram.com/mttcorrea/" target="_blank">
          <Instagram className="text-zinc-200 size-7 md:size-8 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/mtcorrea/" target="_blank">
          <Linkedin className="text-zinc-200 size-7 md:size-8 cursor-pointer" />
        </Link>
      </div> */}
      <StarsBackground skillCardStyle={" opacity-100"} />
    </section>
  )
}