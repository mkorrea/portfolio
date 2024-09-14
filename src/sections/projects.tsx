
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ProjectMockup } from "../components/project-mockup";
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import cashingMockup from "../assets/cashing-mockup.png"
import dashboardMockup from "../assets/dashboard-mockup.png"
import plannerMockup from "../assets/planner-mockup.png"
import portfolioMockup from "../assets/portfolio-mockup.png"

export function Projects() {
  const [ t ] = useTranslation("global")

  return(
    <section id="projects" className="relative flex flex-col items- my-12 z-0 scroll-mt-16  bg-gradient-to-b from-bg-color via-bg-project to-bg-color ">
      <div className="absolute top-0 left-0 flex justify-center items-center font-bold text-sm h-9 min-w-36 w-[34vw] max-w-64 mt-6 -mr-[1px] rounded-r-full pr-3 z-10 transition-all ease-linear
      bg-gradient-to-l from-indigo-900 to-indigo-600 shadow-middle shadow-indigo-600
        md:text-lg  lg:right-0 
        lg:h-10 lg:text-xl
        xl:h-11 ">            
        {t("header.projects")}
      </div>

      <h2 className='mx-auto text-sm text-zinc-100 mt-24 -mb-16  md:mt-28 md:text-base xl:text-xl '>{t("projects.title")}</h2>

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
              summary={t("projects.planner.summary")}
              description={t("projects.planner.description")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={dashboardMockup}
              name="TaskManage"
              summary={t("projects.taskManage.summary")}
              description={t("projects.taskManage.description")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={cashingMockup}
              name="Cashing"
              summary={t("projects.cashing.summary")}
              description={t("projects.cashing.description")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMockup 
              mockupImage={portfolioMockup}
              name={t("projects.portfolio.title")}
              summary={t("projects.portfolio.summary")}
              description={t("projects.portfolio.description")}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}