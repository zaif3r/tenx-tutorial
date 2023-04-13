import type { AppProps } from "next/app"
import Image from "next/image"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"
import { Layout } from "@/components/layout"
import { LayoutCourse } from "@/components/layout-course"
import { H1, H2, H3, H4 } from "@/components/mdx/Heading"

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const components = {
  img: ResponsiveImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
}

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  function getLayout(page: any) {
    return asPath.startsWith("/course") ? (
      <Layout>
        <LayoutCourse>
          <MDXProvider components={components}>{page}</MDXProvider>
        </LayoutCourse>
      </Layout>
    ) : (Component as any).getLayout ? (
      (Component as any).getLayout(page)
    ) : (
      page
    )
  }

  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}
