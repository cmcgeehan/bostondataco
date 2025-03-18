import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { CaseStudyContent } from "@/components/case-study-content"

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
    {
      id: "playyourcourt",
      title: "Serving Up Insights: How we built a top-notch data platform for PlayYourCourt",
      description: "Learn how we helped PlayYourCourt gain visibility into their business metrics and save $150K annually through data-driven decisions.",
      industry: "SaaS • Sports Tech",
      image: "/case-studies/sigma-analytics.jpg",
      challenge:
        "PlayYourCourt needed a modern data infrastructure to gain better visibility into their business metrics and make data-driven decisions. Their existing setup was fragmented and lacked proper integration.",
      solution:
        "We implemented a comprehensive data stack using Stitch for data integration, Snowflake for data warehousing, dbt for data transformation, and Sigma for business intelligence. This enabled seamless data flow from various sources into actionable insights.",
      results: [
        "$150K+ in annual savings through optimized operations",
        "98% forecast accuracy for business planning",
        "90 days from project start to value realization",
        "Improved decision-making across all departments"
      ],
      testimonial: {
        quote:
          "Boston Data Co. transformed how we use data at PlayYourCourt. Their implementation of our modern data stack has given us unprecedented visibility into our business metrics.",
        author: "John Smith",
        title: "Head of Operations at PlayYourCourt"
      },
      videoUrl: "/case-studies/play_your_court.mp4",
      dashboardImage: "/case-studies/sigma-analytics-dashboard.jpg"
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
    { id: "playyourcourt" }
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = getCaseStudy(resolvedParams.id)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Boston Data Co',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: `${caseStudy.title} Case Study | Boston Data Co`,
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
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="container py-12">
            <h1 className="text-2xl font-bold">Case Study Not Found</h1>
            <p className="mt-4">The case study you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/case-studies">
              <Button className="mt-4">View All Case Studies</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CaseStudyContent caseStudy={caseStudy} />
    </div>
  )
}

