import { Layout } from "@/components/layout"
import { LayoutCourse } from "@/components/layout-course"

export default function CoursePage() {
  return (
    <section className="container grid h-full max-w-full items-center gap-6 bg-cover pt-6 pb-8 md:py-10">
      Discrete math
    </section>
  )
}

CoursePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutCourse>{page}</LayoutCourse>
    </Layout>
  )
}
