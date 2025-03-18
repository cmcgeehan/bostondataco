import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

export default function IndustriesPage() {
  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare",
      description: "HIPAA-compliant data solutions for healthcare providers and organizations.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Sports",
      slug: "sports",
      description: "Data analytics for sports teams, leagues, and organizations.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "E-commerce",
      slug: "ecommerce",
      description: "Customer insights and analytics for online retailers.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "SaaS",
      slug: "saas",
      description: "Customer success and product analytics for software companies.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-500 to-violet-400",
    },
    {
      name: "FinTech",
      slug: "fintech",
      description: "Secure, compliant data solutions for financial technology companies.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-red-500 to-pink-400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#343e53]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">Industry Expertise</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Data Solutions for Your Industry
                </h1>
                <p className="max-w-[900px] text-white/80 md:text-xl">
                  We understand the unique data challenges and opportunities in your industry. Our tailored solutions
                  help you leverage your data for competitive advantage.
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
              {industries.map((industry) => (
                <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                  <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-80`}></div>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={industry.name}
                        className="h-full w-full object-cover mix-blend-overlay transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-muted-foreground mb-4">{industry.description}</p>
                      <div className="mt-auto flex items-center text-[#343e53] font-medium">
                        Learn more about our {industry.name} solutions
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Industry-Specific Data Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We combine our data expertise with deep industry knowledge to deliver solutions that address your
                  specific challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Industry Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    We understand the unique data challenges and regulatory requirements in your industry.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Tailored Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    We customize our approach to address your specific business needs and goals.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    We ensure your data infrastructure meets all relevant regulatory requirements.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Industry Benchmarks</h3>
                  <p className="text-sm text-muted-foreground">
                    We help you measure your performance against industry benchmarks and best practices.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Competitive Advantage</h3>
                  <p className="text-sm text-muted-foreground">
                    We help you leverage your data to gain a competitive advantage in your industry.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-lg">
                  <h3 className="font-bold">Future-Proof Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    We build solutions that can adapt to changing industry trends and requirements.
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
                  Ready to Transform Your Industry Data?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Let&apos;s discuss how we can help you leverage your data for competitive advantage in your industry.
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

