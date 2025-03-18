import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Metric {
  label: string
  value: string
}

interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  video: string
  metrics?: Metric[]
}

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[]
}

export function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
        >
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
              <Button
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
              >
                Read Full Case Study
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[5]"></div>
            <video
              muted
              autoPlay
              loop
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            >
              <source src={`/case-studies/${study.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-3 left-3 z-20 flex gap-2">
              <span className="inline-block rounded-full bg-[#34495E]/90 px-2.5 py-0.5 text-xs font-medium text-white">
                {study.industry}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-bold">{study.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{study.description}</p>
              {study.metrics && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-[#34495E]">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center">
              <Link href={`/case-studies/${study.id}`} className="text-sm font-medium text-[#34495E] hover:underline">
                Read Case Study
                <ArrowRight className="ml-1 inline-block h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 