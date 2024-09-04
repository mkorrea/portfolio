import './stars-background.css'

interface StarsBackgroundProps {
  skillCardStyle: string
}

export function StarsBackground({skillCardStyle}: StarsBackgroundProps) {
  return (
    <div className={`absolute ${skillCardStyle} top-0 left-0 w-full h-full z-0 opacity-[0.75] scale-x-95 -translate-x-9`}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
  )
}