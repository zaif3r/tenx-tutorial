import TableOfContents from "@/components/toc"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LayoutProps {
  children: React.ReactNode
}

export function LayoutCourse({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-row">
        <ScrollArea className="w-72 min-w-[18rem] rounded-md border-r border-slate-100 dark:border-slate-700">
          <div className="py-2 pl-4 pr-3">
            <TableOfContents />
          </div>
        </ScrollArea>
        <section className="container grid max-w-full items-center gap-6 pt-6 pb-8 md:py-10">
          {children}
        </section>
      </div>
    </>
  )
}
