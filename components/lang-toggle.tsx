import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LangToggle() {
  const { locale, asPath } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.languages className="transition-all hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <Link className="cursor-pointer" href={asPath} locale="en-US">
          <DropdownMenuItem>
            English <span className="ml-2">{locale == "en-US" ? "🗸" : ""}</span>
          </DropdownMenuItem>
        </Link>
        <Link className="cursor-pointer" href={asPath} locale="es-ES">
          <DropdownMenuItem>
            Español{" "}
            <span className="ml-2"> {locale == "es-ES" ? "🗸" : ""}</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
