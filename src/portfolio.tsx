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



      </main>
    </div>
  );
}
