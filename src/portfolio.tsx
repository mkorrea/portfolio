import { Github, Instagram, Linkedin, Menu } from 'lucide-react'

import homePhoto from './assets/math-photo.png'
import logo from './assets/logo.png'

export function Portfolio() {
  return (
    <div className="w-screen h-dvh flex justify-center overflow-x-hidden">

      <header className='w-screen h-12 fixed flex justify-between items-center px-10 bg-bg-header/20 backdrop-blur-sm z-50'>
        {/* logo */}
        <img 
          className='h-8'
          src={logo} 
          alt="logo" 
        />
        <div>
          <Menu />
        </div>
      </header>




      <main className="w-[1920px] max-w-screen border-l-2 border-r-2 border-border px-3">
        

        {/* home */}
        <div className=' h-screen flex flex-col justify-end '>

          <div className='relative w-full h-screen flex justify-center'>
            {/* presentation */}
            <div className='absolute mt-32 h-fit flex flex-col justify-center mx-auto gap-y-2 z-0  '>
              <p className='text-zinc-400 text-base'>
                Olá! Eu me chamo
              </p>
              <h1 className='font-merienda flex text-4xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text '>
                Matheus Correa
              </h1>
              <h1 className='absolute font-merienda flex text-4xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-sm  '>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-base text-center font-bold italic tracking-wider'>
                Desenvolvedor Front-end
              </p>

              <div className='w-full h-full absolute bg-shadow blur-3xl'>

              </div>
            </div>


            {/* image */}
            <div className="relative flex justify-between items-center mt-auto w-screen h-fit ">
              <div className=' flex flex-col gap-y-8 text-zinc-400 '>
                <Github size={30} />
                <Instagram size={30} />
                <Linkedin size={30} />
              </div>
              <img
                className='flex flex-1 w-full justify-end object-contain object-right-bottom -mr-3 '
                src={homePhoto}
                alt="Matheus Correa"
              />
            </div>


            {/* socials */}


          </div>
        </div>



        {/* quote */}
        <div className='bg-zinc-800/10 w-full h-24'>

        </div>

      </main>




        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>  

    </div>
  )
}

