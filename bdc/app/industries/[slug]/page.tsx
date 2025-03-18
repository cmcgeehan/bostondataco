import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronRight, Database, Play } from "lucide-react"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getIndustryData = (slug: string) => {
  const industries = {
    healthcare: {
      name: "Healthcare",
      description: "HIPAA-compliant data solutions for healthcare providers and organizations.",
      longDescription:
        "Healthcare organizations face unique challenges when it comes to data management, including strict regulatory requirements, complex data sources, and the need for real-time insights. We help healthcare providers, payers, and life sciences companies build secure, compliant data infrastructures that improve patient outcomes and operational efficiency.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-blue-500 to-cyan-400",
      challenges: [
        "Ensuring HIPAA compliance and data security",
        "Integrating data from disparate clinical and operational systems",
        "Providing real-time insights for clinical decision-making",
        "Managing and analyzing large volumes of patient data",
      ],
      solutions: [
        "HIPAA-compliant data warehousing and analytics",
        "Secure patient data integration and management",
        "Clinical and operational dashboards for real-time insights",
        "Predictive analytics for patient outcomes and resource allocation",
      ],
      caseStudies: [
        {
          title: "Healthcare Data Infrastructure",
          description: "Building a HIPAA-compliant data warehouse that reduced reporting time by 85%.",
          slug: "healthcare-infrastructure",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      metrics: [
        {
          value: "85%",
          label: "Reduction in reporting time",
        },
        {
          value: "40%",
          label: "Decrease in readmission rates",
        },
        {
          value: "$1.2M",
          label: "Annual cost savings",
        },
        {
          value: "99.9%",
          label: "Data security compliance",
        },
      ],
    },
    sports: {
      name: "Sports",
      description: "Data analytics for sports teams, leagues, and organizations.",
      longDescription:
        "Sports organizations are increasingly turning to data analytics to gain a competitive edge, improve player performance, and enhance fan engagement. We help sports teams, leagues, and organizations build data infrastructures that provide actionable insights for performance optimization, injury prevention, fan engagement, and business operations.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-green-500 to-emerald-400",
      challenges: [
        "Integrating data from multiple sources (wearables, video, stats)",
        "Providing real-time insights for coaches and players",
        "Analyzing fan behavior and engagement",
        "Optimizing business operations and revenue streams",
      ],
      solutions: [
        "Performance analytics dashboards for coaches and players",
        "Injury prevention and player health monitoring",
        "Fan engagement and experience analytics",
        "Business operations and revenue optimization",
      ],
      caseStudies: [
        {
          title: "Sports Performance Analytics",
          description: "How we helped a professional sports team improve player performance and reduce injuries.",
          slug: "sports-performance-analytics",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      metrics: [
        {
          value: "25%",
          label: "Reduction in player injuries",
        },
        {
          value: "15%",
          label: "Improvement in key performance metrics",
        },
        {
          value: "30%",
          label: "Increase in fan engagement",
        },
        {
          value: "$2.5M",
          label: "Additional revenue generated",
        },
      ],
    },
    ecommerce: {
      name: "E-commerce",
      description: "Customer insights and analytics for online retailers.",
      longDescription:
        "E-commerce businesses generate vast amounts of data across multiple channels, from website interactions to marketing campaigns to inventory management. We help online retailers build data infrastructures that provide a unified view of their customers, optimize marketing spend, improve conversion rates, and streamline operations.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-orange-500 to-amber-400",
      challenges: [
        "Integrating data from multiple channels and platforms",
        "Understanding customer behavior and preferences",
        "Optimizing marketing spend and attribution",
        "Managing inventory and supply chain efficiently",
      ],
      solutions: [
        "Customer 360 view for personalized marketing",
        "Marketing attribution and optimization",
        "Conversion rate optimization",
        "Inventory and supply chain analytics",
      ],
      caseStudies: [
        {
          title: "E-commerce Analytics Transformation",
          description: "How we helped an online retailer increase conversion by 32% through data-driven insights.",
          slug: "ecommerce-analytics",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      metrics: [
        {
          value: "32%",
          label: "Increase in conversion rate",
        },
        {
          value: "45%",
          label: "Reduction in customer acquisition costs",
        },
        {
          value: "20%",
          label: "Increase in average order value",
        },
        {
          value: "85%",
          label: "Faster reporting process",
        },
      ],
    },
    saas: {
      name: "SaaS",
      description: "Customer success and product analytics for software companies.",
      longDescription:
        "SaaS companies need to understand how customers use their products, identify at-risk accounts, and optimize their product development. We help SaaS companies build data infrastructures that provide insights into customer behavior, product usage, and business metrics to drive growth and reduce churn.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-purple-500 to-violet-400",
      challenges: [
        "Tracking and analyzing product usage data",
        "Identifying at-risk customers before they churn",
        "Measuring feature adoption and impact",
        "Understanding the customer journey across touchpoints",
      ],
      solutions: [
        "Product usage analytics and dashboards",
        "Customer health scoring and churn prediction",
        "Feature adoption and impact analysis",
        "Customer journey mapping and optimization",
      ],
      caseStudies: [
        {
          title: "SaaS Customer Insights Platform",
          description: "Creating a unified view of customer data that improved retention rates by 24%.",
          slug: "saas-customer-insights",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      metrics: [
        {
          value: "24%",
          label: "Improvement in customer retention",
        },
        {
          value: "35%",
          label: "Increase in feature adoption",
        },
        {
          value: "18%",
          label: "Growth in average contract value",
        },
        {
          value: "40%",
          label: "Reduction in time-to-value",
        },
      ],
    },
    fintech: {
      name: "FinTech",
      description: "Secure, compliant data solutions for financial technology companies.",
      longDescription:
        "FinTech companies operate in a highly regulated environment and need to process large volumes of financial data securely and efficiently. We help FinTech companies build data infrastructures that ensure compliance, detect fraud, optimize risk management, and provide personalized customer experiences.",
      image: "/placeholder.svg?height=600&width=1200",
      color: "from-red-500 to-pink-400",
      challenges: [
        "Ensuring regulatory compliance (GDPR, PCI DSS, etc.)",
        "Processing and analyzing large volumes of transaction data",
        "Detecting and preventing fraud in real-time",
        "Personalizing customer experiences while managing risk",
      ],
      solutions: [
        "Compliant data warehousing and analytics",
        "Real-time transaction monitoring and fraud detection",
        "Risk management and credit scoring",
        "Customer segmentation and personalization",
      ],
      caseStudies: [
        {
          title: "FinTech Data Modernization",
          description: "Modernizing a legacy data system to enable real-time financial analytics and reporting.",
          slug: "fintech-data-modernization",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      metrics: [
        {
          value: "97%",
          label: "Reduction in report generation time",
        },
        {
          value: "60%",
          label: "Improvement in fraud detection",
        },
        {
          value: "40%",
          label: "Reduction in infrastructure costs",
        },
        {
          value: "25%",
          label: "Increase in customer satisfaction",
        },
      ],
    },
  }

  return industries[slug as keyof typeof industries]
}

export function generateStaticParams() {
  // These should match the keys in your getIndustryData function
  return [
    { slug: 'healthcare' },
    { slug: 'sports' },
    { slug: 'ecommerce' },
    { slug: 'saas' },
    { slug: 'fintech' },
  ]
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const industry = getIndustryData(resolvedParams.slug)
  
  if (!industry) {
    return {
      title: 'Industry Not Found | Boston Data Co.',
    }
  }

  return {
    title: `${industry.name} | Boston Data Co.`,
    description: industry.description,
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const industry = getIndustryData(resolvedParams.slug)

  if (!industry) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Industry Not Found</h1>
        <Link href="/industries">
          <Button variant="link">Back to Industries</Button>
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
            <Link href="/tools" className="text-sm font-medium hover:text-[#343e53]/80 transition-colors">
              Tools
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-[#343e53] hover:text-[#343e53]/80 transition-colors"
            >
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
            <Link href="/industries" className="hover:text-[#343e53]">
              Industries
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#343e53]">{industry.name}</span>
          </div>
        </div>

        <section className="w-full">
          <div className={`relative h-[50vh] md:h-[60vh] overflow-hidden bg-gradient-to-r ${industry.color}`}>
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
              src={industry.image || "/placeholder.svg"}
              fill
              alt={industry.name}
              className="object-cover mix-blend-overlay"
            />
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6 text-white">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  {industry.name} Data Solutions
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">{industry.description}</p>
                <div className="mt-6">
                  <Button className="bg-white text-[#343e53] hover:bg-white/90">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Dave Discuss {industry.name} Data
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
                  <h2 className="text-2xl font-bold">Data Challenges in {industry.name}</h2>
                  <p className="text-muted-foreground">{industry.longDescription}</p>
                  <div className="relative aspect-video overflow-hidden rounded-lg border mt-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Button className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    </div>
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      width={800}
                      height={450}
                      alt={`${industry.name} data challenges`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Common Challenges</h2>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#343e53]"></div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Our Solutions</h2>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#343e53]"></div>
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {industry.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 border rounded-lg">
                      <div className="text-3xl font-bold text-[#343e53]">{metric.value}</div>
                      <div className="text-sm text-muted-foreground text-center">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Why Choose Boston Data Co. for {industry.name}</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our team has extensive experience working with {industry.name} organizations. We understand the
                      unique challenges and regulatory requirements in your industry.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Industry-specific expertise</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Regulatory compliance knowledge</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Proven track record of success</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#343e53]"></div>
                        <span className="text-sm text-muted-foreground">Tailored solutions for your needs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold mb-4">Ready to transform your {industry.name} data?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let&apos;s discuss how we can help you leverage your data for competitive advantage in the{" "}
                    {industry.name} industry.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Work in {industry.name}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore how we&apos;ve helped {industry.name} organizations transform their data infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              {industry.caseStudies.map((study, i) => (
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
                  Ready to Transform Your {industry.name} Data?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Let&apos;s discuss how we can help you leverage your data for competitive advantage in the {industry.name}{" "}
                  industry.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/#contact">
                  <Button className="bg-[#343e53] hover:bg-[#343e53]/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/industries">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Industries
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

