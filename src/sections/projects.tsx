
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ProjectMockup } from "../components/project-mockup";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import cashingMockup from "../assets/cashing-mockup.png"
import dashboardMockup from "../assets/dashboard-mockup.png"
import plannerMockup from "../assets/planner-mockup.png"

export function Projects() {

  return(
    <section id="projects" className="relative flex flex-col items- my-12 z-0 scroll-mt-16  bg-gradient-to-b from-bg-color via-bg-project to-bg-color ">
      <div className="absolute top-0 left-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-r-full pr-3 z-10 transition-all ease-linear
      bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle shadow-indigo-600
        md:text-lg  lg:right-0 
        lg:h-10 lg:text-xl
        xl:h-11 ">            
        Projetos
      </div>

      <h2 className='mx-auto text-sm text-zinc-100 mt-20 -mb-16  md:mt-24 md:text-base xl:text-xl '>Veja os projetos em destaque</h2>

      <div className="mt-20 w-full">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="flex justify-center items-center pb-20"
        >
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={plannerMockup}
              name="Plann.er"
              summary="Seu planejamento de viagens, descomplicado e colaborativo."
              description="Plann.er é uma plataforma que torna o agendamento de viagens mais organizado e divertido. Com ela, você pode planejar todos os detalhes da viagem, adicionar lembretes, compartilhar com amigos ou familiares e garantir que tudo saia conforme o planejado."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={dashboardMockup}
              name="TaskManage"
              summary="Gerencie seus serviços com facilidade e organização."
              description="Essa plataforma permite que o usuário crie uma conta para gerenciar serviços e tarefas. Ideal para empresas ou freelancers, a ferramenta facilita o controle de serviços em aberto, como manutenção, projetos ou qualquer tipo de atividade profissional, tudo em um só lugar."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={cashingMockup}
              name="Cashing"
              summary="Controle suas finanças de maneira simples e eficiente."
              description="Cashing é uma plataforma intuitiva para gerenciar suas anotações bancárias. Aqui, o usuário pode registrar ganhos, monitorar gastos e manter o controle completo das finanças pessoais de forma prática e organizada."
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}