import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

import { hero } from "@/config/i18n"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  const { locale } = useRouter()

  const { theme: currentTheme, systemTheme } = useTheme()
  const [theme, setTheme] = useState(currentTheme)
  const [bgImage, setBgImage] = useState("")

  const { title, subtitle, action } = hero[locale]

  useEffect(() => {
    setTheme(currentTheme == "system" ? systemTheme : currentTheme)
  }, [currentTheme, systemTheme])

  useEffect(() => {
    setBgImage(getRandomImage(theme))
  }, [theme])

  function getRandomImage(theme: string) {
    const imageCount = theme == "dark" ? 1 : 1
    const index = Math.floor(Math.random() * imageCount)
    return `hero-${theme}-${index + 1}.jpg`
  }

  return (
    <Layout>
      <section
        className="container grid min-h-screen max-w-full items-center gap-6 bg-cover pt-6 pb-8 md:py-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-2 flex gap-4">
              <Link href="/course" className={buttonVariants({ size: "lg" })}>
                {action}
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
