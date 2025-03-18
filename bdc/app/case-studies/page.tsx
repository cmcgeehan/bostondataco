import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Database, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"

export default function CaseStudies() {
  // Sample case studies data
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
    },
  ]

  // Industries for filtering
  const industries = ["All", "E-commerce", "Healthcare", "SaaS", "FinTech"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">Case Studies</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our Data Success Stories
                </h1>
                <p className="max-w-[900px] text-white/80 md:text-xl">
                  Explore how we&apos;ve helped businesses across industries transform their data infrastructure and
                  decision-making processes.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Link href="/#contact">
                  <Button className="bg-white text-primary hover:bg-white/90">
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
                        <div className="absolute inset-0 z-10 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                          <Button
                            variant="outline"
                            className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Video
                          </Button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[5]"></div>
                        <Image
                          src={study.image || "/placeholder.svg"}
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
                    alt="Our data process visualization"
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
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
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

