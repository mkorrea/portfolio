import { Header } from "./sections/header";
import { Home } from "./sections/home";
import { Quote } from "./sections/quote";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";




export function Portfolio() {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <main className="relative w-[1920px] max-w-full ring-border ring-2 z-10 bg-bg-color overflow-x-hidden ">
        <Home />
        <Quote />
        <About />
        <Projects />



        <section
          id="contact"
          className="flex flex-col items-center justify-center bg-bg-project"
        >
          <h1 className="text-xl">Contato</h1>
          <div className="h-44"></div>
        </section>

      </main>
    </div>
  );
}
