import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { StarsBackground } from "./stars-background";

interface SkillsCardProps {
  icon: string
  title: string
}

export function SkillsCard ({ icon, title }: SkillsCardProps) {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["11.5deg", "-11.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-11.5deg", "11.5deg"])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left - 40
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    console.log(xPct)

    x.set(xPct)
    y.set(yPct)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }} 
      className="relative flex justify-center items-center w-[150px] h-[112px] from-blue-500/40 from-25% to-indigo-600/40 to-75% bg-gradient-to-br rounded-lg shadow-indigo-900 transition-width duration-[5s]
        lg:w-[175px] lg:h-[131px] 
        xl:w-[200px] xl:h-[150px]
        2xl:w-[225px]
      "
    >
      <div 
        style={{
          transform: 'translateZ(13px)',
          transformStyle: 'preserve-3d'
        }}
        className="absolute flex flex-col items-center justify-center w-[150px] h-[112px] bg-bg-color rounded-lg    overflow-hidden transition-width duration-[5s] border border-indigo-600/0
          lg:w-[175px] lg:h-[131px]
          xl:w-[200px] xl:h-[150px]
          2xl:w-[225px]
        "
      >
        <img 
          style={{ transform: 'translateZ(0px)' }} 
          src={icon} 
          alt="js" 
          className="w-14 " 
        />
        <h3 
          style={{ transform: 'translateZ(0px)' }} 
          className="text-xs drop-shadow-2xl drop-shadow-zinc-100"
        >
          {title}
        </h3>
        <StarsBackground />
      </div>
    </motion.div>
  )
}