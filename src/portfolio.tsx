import { Github, Home, Instagram, Languages, Laptop, Linkedin, Mail, User } from 'lucide-react'
import { useState } from 'react'

import homePhoto from './assets/math-photo.png'
import logo from './assets/logo.png'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'

export function Portfolio() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  // function handleOpenMenu() {
  //   if(!isMenuOpen){
  //     setIsMenuOpen(true)
  //   } else (
  //     setIsMenuOpen(false)
  //   )
  // }
  

  
  
  return (
    <div className="h-dvh flex items-center flex-col ">

            <Navbar
              onMenuOpenChange={setIsMenuOpen}
              className={`fixed backdrop-blur-lg bg-bg-color/50 shadow-xl shadow-bg-color/50 `}
              // shouldHideOnScroll
              isBlurred={false}
            >
              <NavbarContent>
                <NavbarBrand>
                  <img
                    className='h-8'
                    src={logo}
                    alt=""
                  />
                </NavbarBrand>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className='sm:hidden'
                />
              </NavbarContent>
              <NavbarContent className='hidden sm:flex sm:gap-x-36'>
                <NavbarItem>
                  <Link className="flex w-32 items-center justify-center px-3 gap-x-2 text-zinc-100 md:flex-col md:gap-y-1" href='#home'>
                    <Home size={16} />
                    <p className="font-semibold leading-4  ">Início</p>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="flex w-32 items-center justify-center px-3 gap-x-2 text-zinc-100 md:flex-col md:gap-y-1" href='#home'>
                    <User size={16} />
                    <p className="font-semibold leading-4  ">Sobre mim</p>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className="flex w-32 items-center justify-center px-3 gap-x-2 text-zinc-100 md:flex-col md:gap-y-1" href='#home'>
                    <Laptop size={16} />
                    <p className="font-semibold leading-4  ">Projetos</p>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="flex w-32 items-center justify-center px-3 gap-x-2 text-zinc-100 md:flex-col md:gap-y-1 bg-indigo-600 py-2 -my-2 rounded-lg shadow-lg shadow-indigo-800" href='#home'>
                    <Mail size={16} />
                    <p className="font-semibold leading-4  ">Contato</p>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="flex w-32 items-center justify-center px-3 gap-x-2 text-zinc-100 md:flex-col md:gap-y-1" href='#home'>
                    <Languages size={16} />
                    <p className="font-semibold leading-4  ">Idioma</p>
                  </Link>
                </NavbarItem>
              </NavbarContent>
              {/* menu mobile */}
              <NavbarMenu className='backdrop-blur-md bg-bg-color/30 py-6 flex gap-y-8 overflow-y-hidden'>
                <NavbarMenuItem >
                  <Link className="flex items-center gap-x-2 justify-center text-zinc-100" href='#home'>
                      <Home size={16} />
                      <p className="font-semibold leading-4  ">Início</p>
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link className="flex items-center gap-x-2 justify-center text-zinc-100" href='#home'>
                    <User size={16} />
                    <p className="font-semibold leading-4  ">Sobre mim</p>
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link className="flex items-center gap-x-2 justify-center text-zinc-100" href='#home'>
                    <Laptop size={16} />
                    <p className="font-semibold leading-4  ">Projetos</p>
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link className="flex items-center gap-x-2 justify-center text-zinc-100 bg-indigo-600 py-2 -my-2 rounded-lg shadow-lg shadow-indigo-800" href='#home'>
                    <Mail size={16} />
                    <p className="font-semibold leading-4  ">Contato</p>
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link className="flex items-center gap-x-2 justify-center text-zinc-100" href='#home'>
                    <Languages size={16} />
                    <p className="font-semibold leading-4  ">Idioma</p>
                  </Link>
                </NavbarMenuItem>
              </NavbarMenu>
            </Navbar>


      <main className="relative w-[1920px] max-w-full border-x-2 border-border px-3 z-10  ">

        {/* home */}
        <div id='home' className='h-screen max-h-[1080px] flex flex-col justify-end -mx-3 -'>
          <div className='relative h-full flex items-center flex-col z-10 '>
            {/* presentation */}
            <div className='relative mt-28 h-fit flex flex-col justify-center mx-auto gap-y-1 z-0  lg:left-[5vw] lg:absolute lg:top-1/4 lg:-translate-y-full xl:top-1/2 xl:-translate-y-full  2xl:left-[8vw]   '>
              <p className='text-zinc-400 text-[3.9vw] md:text-[3vw] lg:text-3xl transition-all ease-linear '>
                Olá! Eu me chamo
              </p>
              <h1 className='font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text   md:text-[9vw] lg:text-[80px] xl:text-[88px]  transition-all ease-linear'>
                Matheus Correa
              </h1>
              <h1 className='absolute font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-sm  md:text-[9vw] lg:text-[80px] xl:text-[88px]   transition-all ease-linear'>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-[3.9vw] text-center font-bold italic tracking-widest  md:text-[3vw] lg:text-2xl transition-all ease-linear'>
                Desenvolvedor Front-end
              </p>
              <div className='w-5/6 h-4/6 absolute left-1/2 -translate-x-1/2 bg-shadow blur-3xl '>
              </div>
            </div>


              {/* photo and socials */}
            <div className=" flex justify-between items-end mt-auto w-full h-fit max-h-fit z-20  ">
              {/* socials */}
              <div className=' flex flex-col justify-center pl-5 h-full gap-x-8 gap-y-8 text-zinc-400  md:absolute md:flex-row md:h-fit md:mb-8 '>
                <Link>
                  <Github size={30} className='text-zinc-400' />
                </Link>
                <Link>
                  <Instagram size={30} className='text-zinc-400' />
                </Link>
                <Link>
                  <Linkedin size={30} className='text-zinc-400' />
                </Link>
              </div>
              {/* image */} 
              <img
                className='flex flex-1 max-w-md w-full justify-end object-contain object-right-bottom lg:max-w-lg   xl:max-w-2xl transition-all ease-linear  md:ml-auto '
                src={homePhoto}
                alt="Matheus Correa"
              />
            </div>
          </div>
        </div>
        <div id='home' className=' h-screen max-h-[1080px] flex flex-col justify-end -mx-3 -'>
          <div className='relative h-full flex items-center flex-col z-10 '>
            {/* presentation */}
            <div className='relative mt-28 h-fit flex flex-col justify-center mx-auto gap-y-1 z-0  lg:left-[5vw] lg:absolute lg:top-1/4 lg:-translate-y-full xl:top-1/2 xl:-translate-y-full  2xl:left-[8vw]   '>
              <p className='text-zinc-400 text-[3.9vw] md:text-[3vw] lg:text-3xl transition-all ease-linear '>
                Olá! Eu me chamo
              </p>
              <h1 className='font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text   md:text-[9vw] lg:text-[80px] xl:text-[88px]  transition-all ease-linear'>
                Matheus Correa
              </h1>
              <h1 className='absolute font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-sm  md:text-[9vw] lg:text-[80px] xl:text-[88px]   transition-all ease-linear'>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-[3.9vw] text-center font-bold italic tracking-widest  md:text-[3vw] lg:text-2xl transition-all ease-linear'>
                Desenvolvedor Front-end
              </p>
              <div className='w-5/6 h-4/6 absolute left-1/2 -translate-x-1/2 bg-shadow blur-3xl '>
              </div>
            </div>


              {/* photo and socials */}
            <div className=" flex justify-between items-end mt-auto w-full h-fit max-h-fit z-20  ">
              {/* socials */}
              <div className=' flex flex-col justify-center pl-5 h-full gap-x-8 gap-y-8 text-zinc-400  md:absolute md:flex-row md:h-fit md:mb-8 '>
                <Link>
                  <Github size={30} className='text-zinc-400' />
                </Link>
                <Link>
                  <Instagram size={30} className='text-zinc-400' />
                </Link>
                <Link>
                  <Linkedin size={30} className='text-zinc-400' />
                </Link>
              </div>
              {/* image */} 
              <img
                className='flex flex-1 max-w-md w-full justify-end object-contain object-right-bottom lg:max-w-lg   xl:max-w-2xl transition-all ease-linear  md:ml-auto '
                src={homePhoto}
                alt="Matheus Correa"
              />
            </div>
          </div>
        </div>





        {/* quote */}


        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.5] scale-x-95 -translate-x-9 ">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>  
      </main>


    </div>
  )
}

