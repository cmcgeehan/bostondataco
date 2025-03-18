'use server'

import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Database, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

// This would typically come from a database or CMS
const getCaseStudy = (id: string) => {
  const caseStudies = [
    {
      id: "sigma-analytics",
      title: "Sigma Analytics Implementation",
      description: "How we helped a data-driven company unlock insights with Sigma's cloud-native analytics platform.",
      industry: "Analytics",
      image: "/case-studies/sigma-analytics.jpg",
      challenge:
        "A growing company needed a modern analytics solution that could handle their complex data needs while remaining accessible to business users. Traditional BI tools were too rigid and required extensive technical knowledge.",
      solution:
        "We implemented Sigma Analytics, connecting it to their Snowflake data warehouse. We created custom worksheets and dashboards that enabled business users to explore data freely while maintaining governance.",
      results: [
        "90% reduction in time-to-insight for business users",
        "Eliminated backlog of analytics requests to data team",
        "Enabled self-service analytics across departments",
        "Improved data-driven decision making company-wide",
      ],
      testimonial: {
        quote:
          "Sigma has transformed how our entire organization interacts with data. The implementation by Boston Data Co. was smooth and their training ensured high adoption across teams.",
        author: "Alex Chen",
        title: "Director of Analytics",
      },
      videoUrl: "#",
      dashboardImage: "/case-studies/sigma-dashboard.jpg",
    },
    {
      id: "dbt-implementation",
      title: "dbt Data Transformation",
      description: "Modernizing data transformation processes with dbt for improved efficiency and reliability.",
      industry: "Data Engineering",
      image: "/case-studies/dbt-implementation.jpg",
      challenge:
        "A company was struggling with complex, hard-to-maintain SQL scripts for their data transformations. Documentation was poor and there was no version control for data models.",
      solution:
        "We implemented dbt to modernize their data transformation process, creating modular, well-documented data models with proper testing and version control.",
      results: [
        "75% reduction in data transformation errors",
        "Automated testing of data quality",
        "Complete documentation of data lineage",
        "Faster onboarding of new data team members",
      ],
      testimonial: {
        quote:
          "The move to dbt has been revolutionary for our data team. Our transformations are now reliable, documented, and easy to maintain.",
        author: "Sarah Martinez",
        title: "Lead Data Engineer",
      },
      videoUrl: "#",
      dashboardImage: "/case-studies/dbt-models.jpg",
    },
    {
      id: "snowflake-migration",
      title: "Snowflake Cloud Migration",
      description: "Successful migration from legacy data warehouse to Snowflake's modern cloud platform.",
      industry: "Cloud Infrastructure",
      image: "/case-studies/snowflake-migration.jpg",
      challenge:
        "A company was facing performance and scalability issues with their on-premise data warehouse. Costs were high and query performance was poor.",
      solution:
        "We planned and executed a phased migration to Snowflake, optimizing data models and implementing proper data governance along the way.",
      results: [
        "60% reduction in infrastructure costs",
        "95% improvement in query performance",
        "Zero downtime during migration",
        "Enabled multi-cloud strategy",
      ],
      testimonial: {
        quote:
          "The migration to Snowflake was seamless thanks to Boston Data Co. We're now seeing better performance at lower costs.",
        author: "Michael Lee",
        title: "VP of Engineering",
      },
      videoUrl: "#",
      dashboardImage: "/case-studies/snowflake-dashboard.jpg",
    },
    {
      id: "fivetran-etl",
      title: "Fivetran ETL Implementation",
      description: "Automating data pipelines with Fivetran for real-time analytics.",
      industry: "Data Integration",
      image: "/case-studies/fivetran-etl.jpg",
      challenge:
        "Manual data integration processes were causing delays in reporting and analysis. Engineers spent too much time maintaining custom ETL scripts.",
      solution:
        "We implemented Fivetran to automate data integration from multiple sources, ensuring reliable and timely data delivery to their warehouse.",
      results: [
        "100% automation of data pipelines",
        "Real-time data availability",
        "Reduced engineering maintenance time by 80%",
        "Improved data reliability and freshness",
      ],
      testimonial: {
        quote:
          "Fivetran has eliminated our data integration headaches. The implementation was smooth and now our data just works.",
        author: "Lisa Wong",
        title: "Data Operations Manager",
      },
      videoUrl: "#",
      dashboardImage: "/case-studies/fivetran-connectors.jpg",
    },
    {
      id: "bigquery-analytics",
      title: "BigQuery Analytics Platform",
      description: "Building a scalable analytics platform on Google BigQuery.",
      industry: "Cloud Analytics",
      image: "/case-studies/bigquery-analytics.jpg",
      challenge:
        "A growing company needed a scalable analytics platform that could handle their increasing data volume while keeping costs predictable.",
      solution:
        "We architected and implemented a BigQuery-based analytics platform with optimized table structures and proper partitioning for cost control.",
      results: [
        "Unlimited scalability for growing data needs",
        "40% reduction in query costs",
        "Sub-second query response times",
        "Improved data governance and security",
      ],
      testimonial: {
        quote:
          "BigQuery has transformed our analytics capabilities. Boston Data Co.'s implementation exceeded our expectations in both performance and cost efficiency.",
        author: "David Kim",
        title: "Head of Analytics",
      },
      videoUrl: "#",
      dashboardImage: "/case-studies/bigquery-dashboard.jpg",
    },
  ]

  return caseStudies.find((study) => study.id === id)
}

export async function generateStaticParams() {
  return [
    { id: "sigma-analytics" },
    { id: "dbt-implementation" },
    { id: "snowflake-migration" },
    { id: "fivetran-etl" },
    { id: "bigquery-analytics" },
  ]
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = getCaseStudy(resolvedParams.id)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Boston Data Co.',
    }
  }

  return {
    title: `${caseStudy.title} | Boston Data Co.`,
    description: caseStudy.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const caseStudy = getCaseStudy(resolvedParams.id)

  if (!caseStudy) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        <Link href="/case-studies">
          <Button variant="link">Back to Case Studies</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-[#343e53]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/case-studies" className="hover:text-[#343e53]">
              Case Studies
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#343e53]">{caseStudy.title}</span>
          </div>
        </div>

        <section className="w-full">
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image src={caseStudy.image || "/placeholder.svg"} fill alt={caseStudy.title} className="object-cover" />
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6 text-white">
              <div className="max-w-3xl">
                <div className="inline-block rounded-full bg-[#343e53] px-3 py-1 text-xs font-medium mb-4">
                  {caseStudy.industry}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{caseStudy.title}</h1>
                <p className="text-xl text-white/80 max-w-2xl">{caseStudy.description}</p>
                <div className="mt-6">
                  <Button className="bg-white text-[#343e53] hover:bg-white/90">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Our Solution</h2>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                  <div className="relative aspect-video overflow-hidden rounded-lg border mt-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Button className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    </div>
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      width={800}
                      height={450}
                      alt="Solution video thumbnail"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">The Results</h2>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#343e53]"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative aspect-video overflow-hidden rounded-lg border mt-6">
                    <Image
                      src={caseStudy.dashboardImage || "/placeholder.svg"}
                      width={800}
                      height={450}
                      alt="Dashboard visualization"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border bg-slate-50 p-6">
                  <h3 className="text-lg font-bold mb-4">Client Testimonial</h3>
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">&ldquo;{caseStudy.testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        width={40}
                        height={40}
                        alt={caseStudy.testimonial.author}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{caseStudy.testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                  <div className="space-y-2">
                    {["Stitch", "Snowflake", "DBT", "Sigma"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Ready to achieve similar results?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let&apos;s discuss how we can help you transform your data infrastructure and decision-making processes.
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full bg-[#343e53] hover:bg-[#343e53]/90">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore More Case Studies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We&apos;ve helped businesses transform their data infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {/* Filter out the current case study and show 3 others */}
              {[
                {
                  id: "sigma-analytics",
                  title: "Sigma Analytics Implementation",
                  industry: "Analytics",
                  image: "/case-studies/sigma-analytics.jpg",
                },
                {
                  id: "dbt-implementation",
                  title: "dbt Data Transformation",
                  industry: "Data Engineering",
                  image: "/case-studies/dbt-implementation.jpg",
                },
                {
                  id: "snowflake-migration",
                  title: "Snowflake Cloud Migration",
                  industry: "Cloud Infrastructure",
                  image: "/case-studies/snowflake-migration.jpg",
                },
                {
                  id: "fivetran-etl",
                  title: "Fivetran ETL Implementation",
                  industry: "Data Integration",
                  image: "/case-studies/fivetran-etl.jpg",
                },
                {
                  id: "bigquery-analytics",
                  title: "BigQuery Analytics Platform",
                  industry: "Cloud Analytics",
                  image: "/case-studies/bigquery-analytics.jpg",
                },
              ]
                .filter((study) => study.id !== resolvedParams.id)
                .slice(0, 3)
                .map((study) => (
                  <Link href={`/case-studies/${study.id}`} key={study.id}>
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={study.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3">
                          <span className="inline-block rounded-full bg-[#343e53]/90 px-2.5 py-0.5 text-xs font-medium text-white">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="font-bold">{study.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="flex justify-center">
              <Link href="/case-studies">
                <Button variant="outline">View All Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-slate-50 py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl text-[#343e53]">
            <Database className="h-5 w-5" />
            <span>Boston Data Co.</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Boston Data Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

