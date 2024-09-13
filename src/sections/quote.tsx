import { useTranslation } from "react-i18next"

export function Quote() {
  const [ t ] = useTranslation("global")

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 w-full px-3 py-10 bg-gradient-to-b from-bg-color via-bg-quote  to-bg-color   lg:py-11 xl:py-14 transition-all ease-linear duration-75 z-40">
      <p className="h-fit text-xs text-center italic text-zinc-400 tracking-[.05em] max-w-3xl  transition-all ease-linear duration-75
        sm:text-sm
        md:text-base
        lg:text-lg"
      >
        <span className="text-indigo-500">"</span>
        {t("quote")}
        <span className="text-indigo-500">"</span>
      </p>
      <p className="text-[10px] text-zinc-700   sm:text-xs  md:text-sm lg:text-base">
        - Doug Linder
      </p>
    </div>
  )
}