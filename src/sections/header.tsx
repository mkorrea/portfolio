import { Navbar, NavbarContent, NavbarBrand, NavbarMenuToggle, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Home, User, Laptop, Mail, Languages } from "lucide-react";
import { Link } from "@nextui-org/link";
import { useState } from "react";

import logo from "../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
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
  )
}