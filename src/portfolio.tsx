import { Header } from "./sections/header";
import { Home } from "./sections/home";
import { Quote } from "./sections/quote";
import { About } from "./sections/about";

import cashingMockup from "./assets/cashing-mockup.png"
import dashboardMockup from "./assets/dashboard-mockup.png"
import plannerMockup from "./assets/planner-mockup.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';


export function Portfolio() {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <main className="relative w-[1920px] max-w-full ring-border ring-2 z-10 bg-bg-color overflow-x-hidden ">
        <Home />
        <Quote />
        <About />

        {/* projects */}
        <section id="projects" className="relative flex flex-col items- my-12 z-0 scroll-mt-24  ">
          <div className="absolute top-0 left-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-r-full pr-3 z-10 transition-all ease-linear
          bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle shadow-indigo-600
            md:text-lg  lg:right-0 
            lg:h-10 lg:text-xl
            xl:h-11 ">            
            Projetos
          </div>

          <div className="mt-20 w-full">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 1500,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="flex justify-center items-center"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center w-fit">
                  <img src={cashingMockup} alt="Imagem do Projeto" className="w-1/2 "/>
                  <h2 className="bg-bg-color ">Cashing</h2>
                  <p className="bg-bg-color ">Assistente financeiro para te ajudar a gerenciar suas finanças</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex flex-col items-center justify-center w-fit">
                  <img src={dashboardMockup} alt="Imagem do Projeto" className="w-1/2"/>
                  <h2 className="bg-bg-color ">Cashing</h2>
                  <p className="bg-bg-color ">Assistente financeiro para te ajudar a gerenciar suas finanças</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex flex-col items-center justify-center w-fit">
                  <img src={plannerMockup} alt="Imagem do Projeto" className="w-1/2"/>
                  <h2 className="bg-bg-color ">Cashing</h2>
                  <p className="bg-bg-color ">Assistente financeiro para te ajudar a gerenciar suas finanças</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

      </main>
    </div>
  );
}
