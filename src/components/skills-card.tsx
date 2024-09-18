import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { StarsBackground } from "./stars-background";
import { useRef } from "react";

interface SkillsCardProps {
  icon: string
  title: string
  bgStyle: string
}

export function SkillsCard ({ icon, title, bgStyle }: SkillsCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.6, 0.6], ["13deg", "-13deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.6, 0.6], ["-13deg", "13deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return [0, 0];

    const rect = cardRef.current.getBoundingClientRect(); 

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }} 
      className="relative flex justify-center items-center max-w-full min-w-36 w-[30vw] h-[122px] from-blue-500 from-25% to-indigo-600 to-75% bg-gradient-to-br shadow-tech-inset shadow-bg-color rounded-3xl  transition-transform duration-75 ease-linear
      md:w-[24vw] md:h-[141px] 
      xl:w-[14vw] xl:h-[160px] 
      2xl:h-[170px]
      "
    >
      <div 
        style={{
          transform: 'translateZ(27px)',
          transformStyle: 'preserve-3d'
        }}
        className="relative flex flex-col items-center justify-center max-w-full min-w-36 w-[30vw] h-[124px] bg-bg-color overflow-hidden shadow-tech shadow-bg-color rounded-3xl  transition-transform duration-75 ease-linear
        md:w-[24vw] md:h-[141px] 
        xl:w-[14vw] xl:h-[160px] 
        2xl:h-[170px]
        "
      >
        <div className="absolute flex flex-col items-center justify-center">
          <img
            src={icon}
            alt={title}
            className="w-16 lg:w-[72] xl:w-20 transition-all duration-1000 text-zinc-100 z-30  "
            />
          <h3
            className="text-xs [text-shadow:0px_0px_8px_#f4f4f5] shadow-red-500  lg:text-sm xl:text-md 2xl:text-lg  "
          >
            {title}
          </h3>
          
        </div>
        <StarsBackground skillCardStyle={bgStyle} />
      </div>
    </motion.div>
  )
}