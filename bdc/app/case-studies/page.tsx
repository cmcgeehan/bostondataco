import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function CaseStudies() {
  // Sample case studies data
  const caseStudies = [
    {
      id: "playyourcourt",
      title: "Serving Up Insights: How we built a top-notch data platform for PlayYourCourt",
      description: "Learn how we helped PlayYourCourt gain visibility into their business metrics and save $150K annually through data-driven decisions.",
      industry: "SaaS • Sports Tech",
      image: "/logos/playyourcourt.avif",
      metrics: [
        { label: "Annual Savings", value: "$150K+" },
        { label: "Forecast Accuracy", value: "98%" },
        { label: "Time to Value", value: "90 days" }
      ],
      stack: ["Stitch", "Fivetran", "Snowflake", "dbt Cloud", "Sigma"],
      testimonial: {
        quote: `[Boston Data Co] solved data specific problems we've been trying to solve for nearly a decade. This relationship was the unlock for our business to get the information we need to scale.`,
        author: `Scott Baxter`,
        role: `CEO and Founder`
      }
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">Case Studies</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our Data Success Stories
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore how we&apos;ve helped businesses across industries transform their data infrastructure and
                  decision-making processes.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Link href="/#contact">
                  <Button className="bg-[#34495E] text-white hover:bg-[#34495E]/90">
                    Start Your Success Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-10">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study) => (
                  <Link href={`/case-studies/${study.id}`} key={study.id}>
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[5]"></div>
                        <Image
                          src={study.image}
                          width={600}
                          height={400}
                          alt={study.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 z-20">
                          <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <h3 className="text-xl font-bold">{study.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{study.description}</p>
                          <div className="mt-4 grid grid-cols-3 gap-4">
                            {study.metrics.map((metric) => (
                              <div key={metric.label} className="text-center">
                                <div className="text-lg font-bold text-primary">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex items-center">
                          <span className="text-sm font-medium text-primary group-hover:underline">
                            Read Case Study
                          </span>
                          <ArrowRight className="ml-1 h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Our Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How We Deliver Results</h2>
                  <p className="text-muted-foreground">
                    Our proven methodology ensures we deliver consistent value across all our client engagements.
                  </p>
                </div>
                <div className="space-y-6 pt-4">
                  {[
                    {
                      step: "1",
                      title: "Discovery & Assessment",
                      description:
                        "We start by understanding your business goals and current data landscape to identify opportunities and challenges.",
                    },
                    {
                      step: "2",
                      title: "Strategy & Architecture",
                      description:
                        "We design a tailored data strategy and architecture that aligns with your business objectives and scales with your growth.",
                    },
                    {
                      step: "3",
                      title: "Implementation",
                      description:
                        "Our team builds and configures your data infrastructure using our modern data special stack, ensuring seamless integration.",
                    },
                    {
                      step: "4",
                      title: "Visualization & Insights",
                      description:
                        "We create intuitive dashboards and reports that make your data accessible and actionable for all stakeholders.",
                    },
                    {
                      step: "5",
                      title: "Ongoing Support & Optimization",
                      description:
                        "We provide continuous support and optimization to ensure your data infrastructure evolves with your business needs.",
                    },
                  ].map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-3xl"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    width={600}
                    height={800}
                    alt="Dave Aaron"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Write Your Success Story?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We&apos;ve helped businesses across industries transform their data infrastructure.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contact Us
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
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Database className="h-5 w-5" />
            <span>Boston Data Co.</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Boston Data Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

