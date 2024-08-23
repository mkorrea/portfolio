

import homePhoto from './assets/photo-home.png'

export function Portfolio() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <main className="w-[1920px] max-w-screen border-l-2 border-r-2 border-border px-3 ">
        

        {/* home */}
        <div className=' h-screen flex flex-col justify-end '>

          <div className='relative w-full h-screen flex justify-center align-middle'>
            {/* presentation */}
            <div className='absolute mt-36 h-fit flex flex-col justify-center mx-auto gap-y-2 z-0  '>
              <p className='text-zinc-400 text-base'>
                Olá! Eu me chamo
              </p>
              <h1 className='flex text-4xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text '>
                Matheus Correa
              </h1>
              <h1 className='absolute flex text-4xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text text-shadow blur-md  '>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-base text-center font-bold italic tracking-wider'>
                Desenvolvedor Front-end
              </p>
            </div>

            {/* image */}
            <div className="flex align-bottom justify-end mt-auto w-full h-fit ">
              <img
                className=' flex justify-end align-bottom object-contain object-right-bottom'
                src={homePhoto}
                alt="Matheus Correa"
                />
            </div>

          </div>
        </div>



        {/* quote */}
        <div className='bg-zinc-800/10 w-full h-24'>

        </div>

      </main>

    </div>
  )
}