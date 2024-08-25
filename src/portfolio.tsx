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
    <div className="w-screen h-dvh flex items-center flex-col ">


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



      <main className="w-[1920px] max-w-full border-x-2 border-border px-3 z-10">
        {/* home */}
        <div id='home' className=' h-screen flex flex-col justify-end'>

          <div className='relative w-full h-screen flex justify-center'>
            {/* presentation */}
            <div className='absolute mt-28 h-fit flex flex-col justify-center mx-auto gap-y-1 z-0  '>
              <p className='text-zinc-400 text-[3.9vw]'>
                Olá! Eu me chamo
              </p>
              <h1 className='font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text '>
                Matheus Correa
              </h1>
              <h1 className='absolute font-merienda flex text-[11vw] font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text blur-sm  '>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-[3.9vw] text-center font-bold italic tracking-widest'>
                Desenvolvedor Front-end
              </p>

              <div className='w-full h-4/5 absolute bg-shadow blur-3xl opacity-90'>
              </div>
            </div>


            <div className=" flex flex-1 justify-between items-center mt-auto w-screen h-fit ">
              {/* socials */}
              <div className=' flex flex-col gap-y-8 text-zinc-400 '>
                <Github size={30} />
                <Instagram size={30} />
                <Linkedin size={30} />
              </div>
              {/* image */} 
              <img
                className='flex flex-1 max-w-[450px] w-full justify-end object-contain object-right-bottom -mr-3 sm:max-w-[500px] md:max-w-[600px] transition-all ease'
                src={homePhoto}
                alt="Matheus Correa"
              />
            </div>
          </div>
        </div>


{/* <div id='home' className=' h-screen flex flex-col justify-end '>
<div className='relative w-full h-screen flex justify-center'>
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
</div>
</div> */}



        {/* quote */}


      </main>

      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-[0.5] ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>  

    </div>
  )
}

