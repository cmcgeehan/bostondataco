import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Business with Data-Driven Decisions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build and support modern data infrastructure that empowers your team to make informed decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/#contact">
                    <Button className="bg-[#34495E] hover:bg-[#34495E]/90">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-3xl"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-xl">
                  <Image
                    src="/sigmaexample.png"
                    width={800}
                    height={600}
                    alt="Data visualization dashboard"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-8 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-3xl"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/headshots/dave_aaron.jpeg"
                    width={500}
                    height={600}
                    alt="Dave Aaron - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Founded on Data-Driven Principles</h2>
                  <blockquote className="border-l-4 border-[#34495E] pl-4 italic text-muted-foreground">
                    {`We're big believers in the power of data, and that every organization should be making decisions
                    informed by accurate and insightful data.`}
                  </blockquote>
                </div>
                <p className="text-muted-foreground">
                  The Boston Data Company was founded in 2023 by Dave Aaron, a Data & Analytics leader with over a
                  decade of experience leading Data teams and creating Business Intelligence & Analytics solutions.
                </p>
                <p className="text-muted-foreground">
                  We partner with businesses of all sizes who are looking to establish their data practice or enhance
                  their existing one.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src="/logos/bdc.png"
                    width={64}
                    height={64}
                    alt="Dave Aaron"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Dave Aaron</h3>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Modern Data Solutions for Modern Businesses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We offer comprehensive data services to help your business leverage the power of data.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <div className="relative group overflow-hidden rounded-xl border bg-background p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative space-y-4">
                  <Database className="h-10 w-10 text-[#34495E]" />
                  <h3 className="text-2xl font-bold">Data Buildout</h3>
                  <p className="text-muted-foreground">
                    We take your data infrastructure from 0 to 1, or 1 to 2, implementing our &quot;modern data special&quot;
                    stack:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>Stitch for data integration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>Snowflake for cloud data warehousing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>DBT for data transformation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>Sigma for business intelligence</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    We also build initial dashboards to help you understand your business health at a glance.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border bg-background p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative space-y-4">
                  <Database className="h-10 w-10 text-[#34495E]" />
                  <h3 className="text-2xl font-bold">Fractional Data Support</h3>
                  <p className="text-muted-foreground">
                    Ongoing support with your business&apos;s data needs, available in flexible arrangements:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>1/4 FTE equivalent support</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>1/2 FTE equivalent support</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-[#34495E]"></div>
                      <span>Full FTE equivalent support</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    Our team becomes an extension of yours, providing the expertise you need without the overhead of a
                    full-time hire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

 

        <section id="clients" className="w-full py-8 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">
                  Our Clients
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Innovative Companies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We&apos;re proud to work with innovative companies across industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Abridge", logo: "/logos/abridge.avif" },
                { name: "CollegeVine", logo: "/logos/collegevine.avif" },
                { name: "Mixbook", logo: "/logos/mixbook.avif" },
                { name: "PlayYourCourt", logo: "/logos/playyourcourt.avif" },
                { name: "PopChew", logo: "/logos/popchew.avif" },
                { name: "Structured", logo: "/logos/structured.avif" },
              ].map((client, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={client.logo}
                    width={300}
                    height={150}
                    alt={`${client.name} logo`}
                    className="h-24 w-auto object-contain opacity-70 transition-all hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Boston Data
                  Co.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  quote: `I brought in Boston Data Co to Abridge to help us solve a day 1 data problem that many fast growing companies have. We were growing faster than our ability to understand and anticipate customer engagement and had few engineering and product cycles to react to the problem. We wanted to continue being an outstanding customer centric company and use data to do so. Dave came in and implemented a thoughtful approach to understand our short term and long term aspiration. Would gladly recommend them to anyone`,
                  author: `Rez Khan`,
                  title: `VP Product at Abridge`,
                  logo: `/logos/abridge.avif`
                },
                {
                  quote: `Dave and the Boston Data Company are everything that you want in an agency. They are proactive, they are extremely smart. I could not be happier with my decision to work with them to built out all of my agency's dashboards. They don't just do the work; they provide that extra layer of consultative guidance, which is so important. Couldn't say anything but great things.`,
                  author: `Jake Schmidt`,
                  title: `CEO at Structured`,
                  logo: `/headshots/jake_schmidt.png`
                },
                {
                  quote: `Dave (founder of Boston Data Co) was my head of business intelligence for 2 years at Landing and is one of the best in the business. He built us a top-notch data platform from scratch and continually found insights to help propel our business forward. His technical expertise combined with his strong business acumen and ability to deliver value to stakeholders makes his services a hugely valuable asset to any organization.`,
                  author: `Casey Woo`,
                  title: `Founder & CEO at Operators Guild`,
                  logo: `/headshots/casey_woo.jpeg`
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-xl border bg-background p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative space-y-4">
                    <div className="text-4xl text-[#34495E]/20">&quot;</div>
                    <p className="text-muted-foreground line-clamp-6 hover:line-clamp-none transition-all duration-300">{testimonial.quote}</p>
                    <div className="flex items-center gap-4 pt-4">
                      <Image
                        src={testimonial.logo || "/placeholder.svg?height=50&width=50"}
                        width={60}
                        height={60}
                        alt={testimonial.author}
                        className="rounded-full object-cover"
                      />
                      <div className="flex flex-col justify-center">
                        <h3 className="font-bold">{testimonial.author}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="w-full py-8 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#34495E]/10 px-3 py-1 text-sm text-[#34495E]">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Work in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See how we&apos;ve helped businesses transform their data infrastructure and decision-making processes.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Link href="/case-studies">
                <Button variant="outline" className="gap-1">
                  View All Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Button>
                </Link>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "playyourcourt",
                  title: "Serving Up Insights: How we built a top-notch data platform for PlayYourCourt",
                  description:
                    "Learn how we helped PlayYourCourt gain visibility into their business metrics and save $150K annually through data-driven decisions.",
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
              ].map((study, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                      <Link href={`/case-studies/${study.id}`}>
                        <Button
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                        >
                          Read Full Case Study
                        </Button>
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[5]"></div>
                    <video
                      muted
                      autoPlay
                      loop
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    >
                      <source src="/case-studies/play_your_court.mp4" type="video/mp4" />
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
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-bold text-[#34495E]">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {study.stack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.stack.map((tech, i) => (
                            <span key={i} className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {study.testimonial && (
                        <blockquote className="mt-4 border-l-2 border-[#34495E]/20 pl-4 italic text-sm text-muted-foreground">
                          &quot;{study.testimonial.quote}&quot;
                          <footer className="mt-2 text-xs font-medium">
                            {study.testimonial.author}, {study.testimonial.role}
                          </footer>
                        </blockquote>
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
          </div>
        </section>

        <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-[#34495E] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Data?</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl">
                  If you&apos;re looking to establish your data practice or enhance your existing one, we&apos;d love to hear from
                  you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your Name"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your Email"
                    type="email"
                  />
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Tell us about your data needs"
                  ></textarea>
                  <Button className="bg-white text-[#34495E] hover:bg-white/90">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>


      </main>
      <footer className="w-full border-t bg-slate-50 py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="font-bold text-xl text-[#34495E]">
            Boston Data Co.
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Boston Data Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-[#34495E]/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#34495E]/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

