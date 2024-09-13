import { Link } from "@nextui-org/link"
import { ExternalLink } from "lucide-react"

interface ContactLinkProps {
  icon: React.ReactNode
  link?: string
  children?: React.ReactNode
  handleMouseEnter?: () => void
  handleMouseLeave?: () => void
}

export function ContactLink({ icon, link, children, handleMouseEnter, handleMouseLeave }: ContactLinkProps) {
  return(
    <Link
      href={link}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-12 flex items-center text-zinc-100 gap-x-3 py-3 px-4 text-sm rounded-lg z-10 bg-bg-color border border-indigo-100 shadow-md shadow-zinc-700 hover:shadow-zinc-500 hover:bg-transparent hover:text-indigo-500 hover:scale-[101%] transition-all duration-100 ease-linear "
    >
      {icon}
      <p className="flex flex-1  transition-all duration-100 ease-linear">{children}</p>
      <ExternalLink size={16} className="text-indigo-400/50" />
    </Link>
  )
}