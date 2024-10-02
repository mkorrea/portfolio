import { Download, File, Github, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { StarsBackground } from "../components/stars-background";
import { Typewriter } from "react-simple-typewriter";
import { ContactLink } from "../components/contact-link";
import { useTranslation } from "react-i18next";

export function Contact() {
  const [ t ] = useTranslation("global")

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => () => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-16 gap-y-8  overflow-hidden"
    >
      {/* shadow */}
      <div className="absolute flex flex-row justify-between items-end w-screen h-[907px] gap-[540px] isolate">
        <div className="absolute w-[986.7px] h-[506.08px] right-[-321.04px] top-[830px] bg-indigo-600/30 blur-[261.6px] rotate-[-17deg]"></div>
        <div className="absolute w-[986.7px] h-[506.08px] left-[-321.04px] top-[830px] bg-indigo-600/30 blur-[261.6px] rotate-[17deg]"></div>
      </div>

      <h1 className="text-2xl text-zinc-100 "> {t("header.contact")} </h1>
      <div className="flex flex-col items-center gap-y-5">
        <div className="grid grid-cols-1 gap-y-5 gap-x-8 md:grid-cols-2 transition-all ">
          <ContactLink
            icon={<Mail size={17} />}
            link="mailto:devkorrea@gmail.com?subject=Contato%20via%20Portfólio"
            handleMouseEnter={handleMouseEnter("email")}
            handleMouseLeave={handleMouseLeave}
          >
            {hoveredItem === "email" ? (
              <Typewriter words={["devkorrea@gmail.com"]} typeSpeed={25} />
            ) : (
              "Email"
            )}
          </ContactLink>
          <ContactLink
            icon={<Github size={17} />}
            link="https://github.com/mkorrea"
            handleMouseEnter={handleMouseEnter("github")}
            handleMouseLeave={handleMouseLeave}
          >
            {hoveredItem === "github" ? (
              <Typewriter words={["@mkorrea"]} typeSpeed={25} />
            ) : (
              "Github"
            )}
          </ContactLink>
          <ContactLink
            icon={<Linkedin size={17} />}
            link="https://www.linkedin.com/in/mtcorrea/"
            handleMouseEnter={handleMouseEnter("linkedin")}
            handleMouseLeave={handleMouseLeave}
          >
            {hoveredItem === "linkedin" ? (
              <Typewriter words={["/mtcorrea"]} typeSpeed={25} />
            ) : (
              "LinkedIn"
            )}
          </ContactLink>
          <ContactLink
            icon={<SiWhatsapp size={17} />}
            link="https://wa.me/11976401524?text=Oi, Matheus! Estou passando por aqui e gostaria de saber mais sobre seu trabalho. Vamos conversar?"
            handleMouseEnter={handleMouseEnter("whatsapp")}
            handleMouseLeave={handleMouseLeave}
          >
            {hoveredItem === "whatsapp" ? (
              <Typewriter words={["(11) 97640-1524"]} typeSpeed={25} />
            ) : (
              "Whatsapp"
            )}
          </ContactLink>
        </div>
        <a
          href="Matheus-Correa-CV.pdf"
          download="Matheus-Correa-CV.pdf"
          className="w-72 h-12 flex items-center text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-project border border-indigo-600 shadow-md shadow-indigo-900 hover:shadow-indigo-800 hover:bg-bg-project/90 hover:scale-[101%] transition-all duration-100 ease-linear cursor-pointer "
        >
          <File size={17} />
            <p className="flex flex-1  transition-all duration-100 ease-linear select-none"> {t("curriculum")} </p>
          <Download size={16} className="text-indigo-100" />
        </a>
      </div>
      <StarsBackground skillCardStyle={" opacity-100"} />
    </section>
  );
}
