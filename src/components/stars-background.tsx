import './stars-background.css'

export function StarsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.5] scale-x-95 -translate-x-9 ">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
  )
}