import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Database } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ToolsPage() {
  const tools = [
    {
      name: "Sigma Analytics",
      slug: "sigma-analytics",
      description: "Modern cloud analytics and business intelligence designed for speed and ease of use.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "DBT",
      slug: "dbt",
      description: "Transform your data in your warehouse with analytics engineering best practices.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "Snowflake",
      slug: "snowflake",
      description: "Cloud data platform that enables data storage, processing, and analytic solutions.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-sky-500 to-blue-400",
    },
    {
      name: "Fivetran",
      slug: "fivetran",
      description: "Automated data integration platform that delivers ready-to-use connectors.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-500 to-violet-400",
    },
    {
      name: "BigQuery",
      slug: "bigquery",
      description: "Serverless, highly scalable, and cost-effective cloud data warehouse.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-500 to-emerald-400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-[#343e53]">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <span>Boston Data Co.</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              About
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-[#343e53] hover:text-[#343e53]/80 transition-colors"
            >
              Tools
            </Link>
            <Link href="/industries" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Industries
            </Link>
            <Link href="/case-studies" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Case Studies
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#343e53] hover:bg-[#343e53]/90">Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#343e53]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">Our Technology Stack</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Modern Data Tools for Modern Businesses
                </h1>
                <p className="max-w-[900px] text-white/80 md:text-xl">
                  We leverage best-in-class data tools to build scalable, efficient, and insightful data solutions for
                  your business.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Link href="/#contact">
                  <Button className="bg-white text-[#343e53] hover:bg-white/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <Link href={`/tools/${tool.slug}`} key={tool.slug}>
                  <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-80`}></div>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Image
                        src={tool.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={tool.name}
                        className="h-full w-full object-cover mix-blend-overlay transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">{tool.name}</h2>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      <div className="mt-auto flex items-center text-[#343e53] font-medium">
                        Learn how we use {tool.name}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#343e53]/10 px-3 py-1 text-sm text-[#343e53]">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The Modern Data Stack</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We've carefully selected best-in-class tools that work together seamlessly to create a powerful,
                  scalable data infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  width={1200}
                  height={600}
                  alt="Modern Data Stack Architecture"
                  className="w-full object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Data Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Fivetran, Stitch, and custom pipelines to bring all your data together.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Data Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Snowflake, BigQuery, and other cloud data warehouses for scalable storage.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Data Transformation</h3>
                  <p className="text-sm text-muted-foreground">
                    DBT for transforming raw data into analytics-ready datasets.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Data Visualization</h3>
                  <p className="text-sm text-muted-foreground">
                    Sigma Analytics, Looker, and other BI tools for insights and dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Data Infrastructure?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Let's discuss how we can help you implement the right tools for your business needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/#contact">
                  <Button className="bg-[#343e53] hover:bg-[#343e53]/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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

