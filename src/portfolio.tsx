import { Header } from "./sections/header";
import { Home } from "./sections/home";
import { Quote } from "./sections/quote";
import { About } from "./sections/about";


export function Portfolio() {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <main className="relative w-[1920px] max-w-full ring-border ring-2 z-10 bg-bg-color overflow-x-hidden ">
        <Home />
        <Quote />
        <About />

        {/* projects */}
        <section id="projects" className="relative h-32 flex flex-col items- my-12 z-0 scroll-mt-24  ">
          <div className="absolute top-0 left-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-r-full pr-3 z-10 transition-all ease-linear
          bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle shadow-indigo-600
            md:text-lg  lg:right-0 
            lg:h-10 lg:text-xl
            xl:h-11 ">            
            Projetos
          </div>

          <div>
            
          </div>
        </section>

      </main>
    </div>
  );
}
