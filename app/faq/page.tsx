"use client"

import Link from "next/link"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"
import { LogoWhite } from "@/components/logo-white"
export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-md">
        <div className="relative mx-auto min-h-[90px] max-w-7xl px-4 py-4 md:min-h-[150px]">
          <Link href="/" className="absolute left-6 top-6 h-[60px] w-[60px] md:left-9 md:top-9 md:h-[100px] md:w-[100px]" aria-label="miauzly home">
            <LogoWhite />
          </Link>
          <div className="absolute right-6 top-6 md:right-9 md:top-9">
            <LanguageToggle />
          </div>
        </div>
      </header>
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
