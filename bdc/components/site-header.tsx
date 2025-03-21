import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logos/bdc.png" alt="Boston Data Co. Logo" width={32} height={32} />
              <span>Boston Data Co.</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#case-studies" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Case Studies
          </Link>
          <Link href="/#services" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Services
          </Link>
          <Link href="/#about" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            About
          </Link>
          <Link href="/tools" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Tools
          </Link>
        </nav>
        <Link href="/#contact">
          <Button className="bg-white text-primary hover:bg-white/90">Contact Us</Button>
        </Link>
      </div>
    </header>
  )
} 