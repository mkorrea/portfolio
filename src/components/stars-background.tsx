import './stars-background.css'

interface StarsBackgroundProps {
  skillCardStyle: string
}

export function StarsBackground({skillCardStyle}: StarsBackgroundProps) {
  return (
    <div className={`absolute top-0 left-0 w-full h-full z-0 opacity-[0.75] scale-x-95 -translate-x-9`}>
      <div id="stars" className={`${skillCardStyle}`}></div>
      <div id="stars2" className={`${skillCardStyle}`}></div>
      <div id="stars3" className={`${skillCardStyle}`}></div>
      <div id="stars4" className={`${skillCardStyle}`}></div>
    </div>
  )
}