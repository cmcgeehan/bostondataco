import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronRight, Database, Play } from "lucide-react"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getToolData = (slug: string) => {
  const tools = {
    "sigma-analytics": {
      name: "Sigma Analytics",
      description: "Modern cloud analytics and business intelligence designed for speed and ease of use.",
      longDescription:
        "Sigma Analytics is a cloud-native analytics platform that connects directly to your data warehouse. It combines the power of spreadsheets with the scale of SQL, enabling business users to explore live data at scale with familiar spreadsheet-like interface.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-blue-500 to-cyan-400",
      benefits: [
        "Spreadsheet-like interface that business users already know how to use",
        "Direct connection to your cloud data warehouse for real-time analysis",
        "Collaborative features that allow teams to work together on data analysis",
        "Enterprise-grade security and governance controls",
      ],
      implementation: [
        "We set up Sigma to connect directly to your data warehouse",
        "We build initial dashboards and reports based on your business needs",
        "We train your team on how to use Sigma effectively",
        "We provide ongoing support and optimization",
      ],
      caseStudies: [
        {
          title: "E-commerce Analytics Transformation",
          description:
            "How we used Sigma to help an online retailer increase conversion by 32% through data-driven insights.",
          industry: "E-commerce",
          slug: "ecommerce-analytics",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "SaaS Customer Insights Platform",
          description: "Creating a unified view of customer data in Sigma that improved retention rates by 24%.",
          industry: "SaaS",
          slug: "saas-customer-insights",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    dbt: {
      name: "DBT",
      description: "Transform your data in your warehouse with analytics engineering best practices.",
      longDescription:
        "DBT (data build tool) enables analytics engineers to transform data in their warehouses by simply writing select statements. DBT handles turning these select statements into tables and views. It brings the best practices of software engineering to data transformation.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-orange-500 to-amber-400",
      benefits: [
        "Version control for your data transformations",
        "Modular SQL that's easy to test and maintain",
        "Documentation that stays in sync with your code",
        "Testing framework to ensure data quality",
      ],
      implementation: [
        "We set up a DBT project structure tailored to your business",
        "We implement data models following analytics engineering best practices",
        "We establish testing and documentation standards",
        "We train your team on DBT workflows and maintenance",
      ],
      caseStudies: [
        {
          title: "Healthcare Data Infrastructure",
          description: "How we used DBT to build a HIPAA-compliant data warehouse that reduced reporting time by 85%.",
          industry: "Healthcare",
          slug: "healthcare-infrastructure",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "FinTech Data Modernization",
          description:
            "Using DBT to modernize a legacy data system to enable real-time financial analytics and reporting.",
          industry: "FinTech",
          slug: "fintech-data-modernization",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    snowflake: {
      name: "Snowflake",
      description: "Cloud data platform that enables data storage, processing, and analytic solutions.",
      longDescription:
        "Snowflake is a cloud-based data warehousing platform that enables data storage, processing, and analytic solutions. It separates compute from storage, allowing you to scale each independently and only pay for what you use.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-sky-500 to-blue-400",
      benefits: [
        "Separate storage and compute resources for optimal performance and cost",
        "Automatic scaling to handle any workload",
        "Secure data sharing within and outside your organization",
        "Support for structured and semi-structured data",
      ],
      implementation: [
        "We design a Snowflake architecture optimized for your business needs",
        "We migrate your existing data to Snowflake",
        "We implement security and governance controls",
        "We optimize performance and cost",
      ],
      caseStudies: [
        {
          title: "Healthcare Data Infrastructure",
          description: "Building a HIPAA-compliant Snowflake data warehouse that reduced reporting time by 85%.",
          industry: "Healthcare",
          slug: "healthcare-infrastructure",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "E-commerce Analytics Transformation",
          description:
            "How we used Snowflake to help an online retailer increase conversion by 32% through data-driven insights.",
          industry: "E-commerce",
          slug: "ecommerce-analytics",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    fivetran: {
      name: "Fivetran",
      description: "Automated data integration platform that delivers ready-to-use connectors.",
      longDescription:
        "Fivetran is a fully managed data integration platform that automates the extraction, loading, and transformation of data from various sources into your data warehouse. It offers hundreds of pre-built connectors to databases, applications, files, and more.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-purple-500 to-violet-400",
      benefits: [
        "Zero-maintenance data pipelines that just work",
        "Hundreds of pre-built connectors to popular data sources",
        "Automatic schema migration and data normalization",
        "Incremental updates to minimize data transfer and costs",
      ],
      implementation: [
        "We identify all the data sources you need to integrate",
        "We set up and configure Fivetran connectors",
        "We establish monitoring and alerting for data pipeline health",
        "We optimize sync schedules and configurations for cost and performance",
      ],
      caseStudies: [
        {
          title: "SaaS Customer Insights Platform",
          description: "Using Fivetran to create a unified view of customer data that improved retention rates by 24%.",
          industry: "SaaS",
          slug: "saas-customer-insights",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "FinTech Data Modernization",
          description: "How Fivetran helped modernize a legacy data system to enable real-time financial analytics.",
          industry: "FinTech",
          slug: "fintech-data-modernization",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    bigquery: {
      name: "BigQuery",
      description: "Serverless, highly scalable, and cost-effective cloud data warehouse.",
      longDescription:
        "Google BigQuery is a fully managed, serverless data warehouse that enables super-fast SQL queries using the processing power of Google's infrastructure. It allows you to analyze large datasets in real-time with built-in machine learning capabilities.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-green-500 to-emerald-400",
      benefits: [
        "Serverless architecture with no infrastructure to manage",
        "Automatic scaling to handle any workload",
        "Built-in machine learning capabilities",
        "Integration with the Google Cloud ecosystem",
      ],
      implementation: [
        "We design a BigQuery architecture optimized for your business needs",
        "We migrate your existing data to BigQuery",
        "We implement security and governance controls",
        "We optimize performance and cost",
      ],
      caseStudies: [
        {
          title: "E-commerce Analytics Transformation",
          description:
            "How we used BigQuery to help an online retailer increase conversion by 32% through data-driven insights.",
          industry: "E-commerce",
          slug: "ecommerce-analytics",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "SaaS Customer Insights Platform",
          description: "Creating a unified view of customer data in BigQuery that improved retention rates by 24%.",
          industry: "SaaS",
          slug: "saas-customer-insights",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  }

  return tools[slug as keyof typeof tools]
}

export function generateStaticParams() {
  // These should match the keys in your getToolData function
  return [
    { slug: 'sigma-analytics' },
    { slug: 'dbt' },
    { slug: 'snowflake' },
    { slug: 'fivetran' },
    { slug: 'bigquery' },
  ]
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const tool = getToolData(resolvedParams.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found | Boston Data Co.',
    }
  }

  return {
    title: `${tool.name} | Boston Data Co.`,
    description: tool.description,
  }
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const tool = getToolData(resolvedParams.slug)

  if (!tool) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Tool Not Found</h1>
        <Link href="/tools">
          <Button variant="link">Back to Tools</Button>
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
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-[#343e53]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tools" className="hover:text-[#343e53]">
              Tools
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#343e53]">{tool.name}</span>
          </div>
        </div>

        <section className="w-full">
          <div className={`relative h-[50vh] md:h-[60vh] overflow-hidden bg-gradient-to-r ${tool.color}`}>
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
              src={tool.image || "/placeholder.svg"}
              fill
              alt={tool.name}
              className="object-cover mix-blend-overlay"
            />
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6 text-white">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{tool.name}</h1>
                <p className="text-xl text-white/90 max-w-2xl">{tool.description}</p>
                <div className="mt-6">
                  <Button className="bg-white text-[#343e53] hover:bg-white/90">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Dave Explain {tool.name}
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
                  <h2 className="text-2xl font-bold">How We Use {tool.name}</h2>
                  <p className="text-muted-foreground">{tool.longDescription}</p>
                  <div className="relative aspect-video overflow-hidden rounded-lg border mt-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Button className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    </div>
                    <Image
                      src={tool.image || "/placeholder.svg"}
                      width={800}
                      height={450}
                      alt={`${tool.name} demonstration`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Key Benefits</h2>
                  <ul className="space-y-2">
                    {tool.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#343e53]"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Our Implementation Process</h2>
                  <div className="space-y-6 pt-4">
                    {tool.implementation.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#343e53] text-white">
                          {i + 1}
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Why Choose Boston Data Co. for {tool.name}</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our team has extensive experience implementing {tool.name} for businesses across industries. We
                      understand the nuances of the platform and how to optimize it for your specific needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Certified {tool.name} experts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Proven implementation methodology</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Ongoing support and optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Integration with your entire data stack</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Ready to get started with {tool.name}?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let&apos;s discuss how we can help you leverage {tool.name} for your business.
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full bg-[#343e53] hover:bg-[#343e53]/90">Schedule a Consultation</Button>
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
                <div className="inline-block rounded-lg bg-[#343e53]/10 px-3 py-1 text-sm text-[#343e53]">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">See {tool.name} in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore how we&apos;ve helped businesses leverage {tool.name} to transform their data infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              {tool.caseStudies.map((study, i) => (
                <Link href={`/case-studies/${study.slug}`} key={i}>
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
                        <span className="inline-block rounded-full bg-[#343e53]/90 px-2.5 py-0.5 text-xs font-medium text-white">
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
                        <span className="text-sm font-medium text-[#343e53] group-hover:underline">
                          Read Case Study
                        </span>
                        <ArrowRight className="ml-1 h-4 w-4 text-[#343e53]" />
                      </div>
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

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Data with {tool.name}?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Let&apos;s discuss how we can help you implement {tool.name} to drive better business decisions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/#contact">
                  <Button className="bg-[#343e53] hover:bg-[#343e53]/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Tools
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

