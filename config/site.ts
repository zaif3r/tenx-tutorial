import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Ten X Tutorial",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      name: "home",
      href: "/",
    },
    {
      name: "course",
      href: "/course",
    },
  ],
  links: {
    twitter: "https://twitter.com/zaif3r",
    github: "https://github.com/zaif3r/tenx-tutorial",
    docs: "https://zaifer.xyz",
  },
}
