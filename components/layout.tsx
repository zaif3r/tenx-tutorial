import Head from "next/head"

import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <Head>
          <title>Ten X Tutorial </title>
          <meta
            name="description"
            content="Learn to code with TenXTutorial's beginner-friendly courses in 10 programming languages. Start your coding journey with comprehensive and accessible resources."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </main>
    </>
  )
}
