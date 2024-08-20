

import homePhoto from './assets/photo-home.png'

export function Portfolio() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <main className="w-[1920px] max-w-screen border-l-2 border-r-2 border-border ">
        

        {/* home */}
        <div className='h-screen flex '>

          <div className='flex my-auto w-screen h-fit '>
            {/* presentation */}
            <div className='flex flex-col justify-center mx-auto gap-y-4 z-0'>
              <p className='text-zinc-400 text-3xl'>
                Olá! Eu me chamo
              </p>
              <h1 className='flex text-9xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text '>
                Matheus Correa
              </h1>
              <h1 className='absolute flex text-9xl font-bold text-nowrap bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text text-shadow blur-md  '>
                Matheus Correa
              </h1>
              <p className='text-zinc-100 text-2xl text-center font-bold italic tracking-widest'>
                Desenvolvedor Front-end
              </p>
            </div>

            {/* image */}
            <div className="flex w-2/5 align-bottom justify-end">
              <img
                className='flex justify-end align-bottom object-contain object-right-bottom z-10'
                src={homePhoto}
                alt="Matheus Correa"
                />
            </div>

          </div>
        </div>



        {/* quote */}
        <div className='bg-zinc-700/10 w-full h-24'>

        </div>

      </main>

    </div>
  )
}