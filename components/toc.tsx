import Link from "next/link"
import { useRouter } from "next/router"
import { ChevronsUpDown } from "lucide-react"

import { courseContent } from "@/config/content"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const TableOfContents = () => {
  const { asPath, locale } = useRouter()

  return (
    <nav>
      {courseContent.map((chapter) => (
        <div
          key={chapter.id}
          /* open={router.asPath.startsWith(section.slug)} */
        >
          <Link
            href={chapter.slug}
            className={asPath.startsWith(chapter.slug) ? "font-bold" : ""}
          >
            <h3 className="pt-6 pb-4 text-lg leading-tight">
              {chapter.title[locale]}
            </h3>
          </Link>
          {chapter.sections &&
            chapter.sections.map((section, sectionIndex) => (
              <Collapsible
                key={section.id}
                className="mb-2"
                open={asPath.startsWith(section.slug) || undefined}
              >
                <div className="flex items-center justify-between space-x-4 px-1">
                  <Link
                    href={section.slug}
                    className={
                      asPath.startsWith(section.slug) ? "font-bold" : ""
                    }
                  >
                    <div className="flex flex-row gap-1 text-sm leading-tight opacity-90">
                      <span>{sectionIndex + 1}</span>
                      <h4 className="hover:underline">
                        {section.title[locale]}
                      </h4>
                    </div>
                  </Link>
                  {section.subItems && (
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  )}
                </div>

                <CollapsibleContent>
                  <ul className="my-2 ml-4">
                    {section.subItems &&
                      section.subItems.map((subItem, subItemIndex) => (
                        <li
                          key={subItem.id}
                          className="mt-1.5 text-xs hover:underline"
                        >
                          <Link
                            href={subItem.slug}
                            className={
                              asPath === subItem.slug ? "font-bold" : ""
                            }
                          >
                            <div className="flex flex-row gap-1 leading-tight">
                              <span>
                                {sectionIndex + 1}.{subItemIndex + 1}
                              </span>
                              <h4 className="hover:underline">
                                {subItem.title[locale]}
                              </h4>
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </div>
      ))}
    </nav>
  )
}

export default TableOfContents
