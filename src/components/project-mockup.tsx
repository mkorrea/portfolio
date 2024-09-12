

interface ProjectMockupProps {
  mockupImage: string
  name: string
  summary: string
  description: string
}

export function ProjectMockup({ mockupImage, name, summary, description }: ProjectMockupProps) {
  return(
    <div className="flex flex-col items-center justify-center w-fit select-none">
      <img src={mockupImage} alt="Imagem do Projeto" className="w-8/12 xl:w-5/12 select-none"/>

      <h2 className=" text-center text-zinc-100 font-bold tracking-wide text-lg  lg:text-2xl">
        {name}
      </h2>
      
      <p className="w-8/12 xl:w-5/12 select-none text-[2.7vw] text-zinc-300 text-center leading-loose italic py-2
        sm:text-lg 
        lg:text-xl lg:max-w-[800px] lg:leading-normal ">
        {summary}
      </p>

      <p className="w-9/12 xl:w-7/12 select-none text-[2.7vw] max-w-[65%] text-zinc-500 text-center leading-relaxed  
        sm:text-base 
        lg:text-lg lg:max-w-[1000px] lg:leading-normal ">
        {description}
      </p>
    </div>
  )
}