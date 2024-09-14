import { Navbar, NavbarContent, NavbarBrand, NavbarMenuToggle, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Home, User, Laptop, Mail, Languages } from "lucide-react";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import type { Selection } from "@nextui-org/react";

import logo from "../assets/logo.png";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useTranslation } from "react-i18next";

export function Header() {
  const [ t, i18n ] = useTranslation("global")

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["text"]));

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed max-w-[1920px] mx-auto w-full backdrop-blur-lg bg-bg-color/50 shadow-xl shadow-bg-color/50 flex justify-center`}
      shouldHideOnScroll
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
            {t("header.home")}
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
              {t("header.about")}
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
            {t("header.projects")}
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
            {t("header.contact")}
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="bg-bg-color/50 backdrop-brightness-200 backdrop-blur-md">
            <DropdownTrigger>
              <div className="flex flex-col gap-y-1 w-24 items-center justify-center gap-x-2 text-zinc-100 md:w-28 lg:w-32 lg:flex-row transition-all ease-linear cursor-pointer">
                <Languages size={16} />
                <p className="font-semibold leading-4 text-xs sm:text-sm lg:text-base"> {t("header.language")} </p>
              </div>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text" onClick={()=> handleChangeLanguage("pt")} color="primary" className="  "> {t("header.langModal.pt")} </DropdownItem>
              <DropdownItem key="number" onClick={()=> handleChangeLanguage("en")} color="primary" className=" focus:text-zinc-100"> {t("header.langModal.en")} </DropdownItem>
            </DropdownMenu>
          </Dropdown>


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