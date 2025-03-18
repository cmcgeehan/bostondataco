'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Database, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoPlayerModal } from "@/components/video-player-modal"
import { useState } from "react"

interface CaseStudyContentProps {
  caseStudy: {
    id: string
    title: string
    description: string
    industry: string
    image: string
    videoUrl: string
    challenge: string
    solution: string
    results: string[]
    testimonial: {
      quote: string
      author: string
      title: string
    }
    dashboardImage: string
  }
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
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
            <video
              muted
              autoPlay
              loop
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={caseStudy.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6 text-white">
              <div className="max-w-3xl">
                <div className="inline-block rounded-full bg-[#343e53] px-3 py-1 text-xs font-medium mb-4">
                  {caseStudy.industry}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{caseStudy.title}</h1>
                <p className="text-xl text-white/80 max-w-2xl">{caseStudy.description}</p>
                <div className="mt-6">
                  <Button 
                    className="bg-white text-[#343e53] hover:bg-white/90"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
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
                      src={caseStudy.dashboardImage}
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
                      src={caseStudy.dashboardImage}
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

        <VideoPlayerModal
          videoUrl={caseStudy.videoUrl}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
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