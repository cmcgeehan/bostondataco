import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Database, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getCaseStudy = (id: string) => {
  const caseStudies = [
    {
      id: "ecommerce-analytics",
      title: "E-commerce Analytics Transformation",
      description: "How we helped an online retailer increase conversion by 32% through data-driven insights.",
      industry: "E-commerce",
      image: "/placeholder.svg?height=600&width=1200",
      challenge:
        "A rapidly growing e-commerce company was struggling to make sense of their customer data across multiple platforms. Their marketing team couldn't identify which channels were most effective, and their product team lacked insights into customer behavior.",
      solution:
        "We implemented our modern data special stack (Stitch, Snowflake, DBT, and Sigma) to create a unified view of customer data. We built custom dashboards for marketing attribution, product performance, and customer journey analysis.",
      results: [
        "32% increase in conversion rate within 3 months",
        "45% reduction in customer acquisition costs",
        "85% faster reporting process, from days to hours",
        "Enabled real-time decision making during promotional events",
      ],
      testimonial: {
        quote:
          "Boston Data Co. transformed how we understand our customers. We now have clear visibility into what's working and what's not, allowing us to make data-driven decisions that have significantly improved our bottom line.",
        author: "Sarah Johnson",
        title: "CMO, E-commerce Retailer",
      },
      videoUrl: "#",
      dashboardImage: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "healthcare-infrastructure",
      title: "Healthcare Data Infrastructure",
      description: "Building a HIPAA-compliant data warehouse that reduced reporting time by 85%.",
      industry: "Healthcare",
      image: "/placeholder.svg?height=600&width=1200",
      challenge:
        "A healthcare provider was struggling with fragmented patient data across multiple systems. Compliance reporting was manual and time-consuming, and they lacked the ability to analyze patient outcomes effectively.",
      solution:
        "We designed and implemented a HIPAA-compliant data warehouse using Snowflake, with automated ETL processes through Stitch. We created secure dashboards for clinical staff and administrators, with role-based access controls.",
      results: [
        "85% reduction in time spent on compliance reporting",
        "Enabled predictive analytics for patient readmission risk",
        "Improved resource allocation, saving an estimated $1.2M annually",
        "Created a unified patient view across all departments",
      ],
      testimonial: {
        quote:
          "The data infrastructure Boston Data Co. built has transformed our operations. We're now able to focus on patient care instead of wrestling with spreadsheets, and our compliance team has never been happier.",
        author: "Dr. Michael Chen",
        title: "CIO, Healthcare Provider",
      },
      videoUrl: "#",
      dashboardImage: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "saas-customer-insights",
      title: "SaaS Customer Insights Platform",
      description: "Creating a unified view of customer data that improved retention rates by 24%.",
      industry: "SaaS",
      image: "/placeholder.svg?height=600&width=1200",
      challenge:
        "A B2B SaaS company was experiencing higher than industry-average churn rates. They had data in multiple systems (CRM, product analytics, support tickets) but no way to connect these dots to understand the customer journey and identify at-risk accounts.",
      solution:
        "We built a customer 360 platform that integrated data from all customer touchpoints. We implemented predictive churn models and created early warning systems for the customer success team. Custom dashboards were created for executives, sales, and customer success teams.",
      results: [
        "24% improvement in customer retention within 6 months",
        "Identified key product usage patterns correlated with long-term success",
        "Enabled proactive outreach to at-risk customers before they churned",
        "Increased average contract value by 18% through better upsell targeting",
      ],
      testimonial: {
        quote:
          "The customer insights platform has been a game-changer for our business. We can now see exactly which customers need attention and why, allowing our customer success team to be much more strategic and effective.",
        author: "Jessica Williams",
        title: "VP of Customer Success, SaaS Company",
      },
      videoUrl: "#",
      dashboardImage: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "fintech-data-modernization",
      title: "FinTech Data Modernization",
      description: "Modernizing a legacy data system to enable real-time financial analytics and reporting.",
      industry: "FinTech",
      image: "/placeholder.svg?height=600&width=1200",
      challenge:
        "A financial technology company was relying on outdated data systems that couldn't handle their growing data volume. Reports were slow, often inaccurate, and the team spent more time maintaining the system than analyzing data.",
      solution:
        "We migrated their legacy data warehouse to a modern cloud architecture using Snowflake. We implemented streaming data pipelines for real-time analytics and redesigned their data models using DBT for better performance and maintainability.",
      results: [
        "97% reduction in report generation time",
        "Enabled real-time fraud detection capabilities",
        "Reduced infrastructure costs by 40%",
        "Empowered business users to create their own reports without IT assistance",
      ],
      testimonial: {
        quote:
          "Boston Data Co. took us from the data dark ages to the cutting edge in just a few months. Our team is now focused on finding insights rather than fighting with our systems, and the business impact has been tremendous.",
        author: "Robert Chang",
        title: "CTO, FinTech Company",
      },
      videoUrl: "#",
      dashboardImage: "/placeholder.svg?height=800&width=1200",
    },
  ]

  return caseStudies.find((study) => study.id === id)
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = getCaseStudy(params.id)

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
            <Link href="/#clients" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Clients
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-[#343e53] hover:text-[#343e53]/80 transition-colors"
            >
              Case Studies
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#343e53] hover:bg-[#343e53]/90">Get Started</Button>
        </div>
      </header>

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
                    <p className="italic text-muted-foreground">"{caseStudy.testimonial.quote}"</p>
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
                    Let's discuss how we can help you transform your data infrastructure and decision-making processes.
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
                  Discover how we've helped other businesses transform their data infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {/* Filter out the current case study and show 3 others */}
              {[
                {
                  id: "ecommerce-analytics",
                  title: "E-commerce Analytics Transformation",
                  industry: "E-commerce",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "healthcare-infrastructure",
                  title: "Healthcare Data Infrastructure",
                  industry: "Healthcare",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "saas-customer-insights",
                  title: "SaaS Customer Insights Platform",
                  industry: "SaaS",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "fintech-data-modernization",
                  title: "FinTech Data Modernization",
                  industry: "FinTech",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ]
                .filter((study) => study.id !== params.id)
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

