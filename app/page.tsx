"use client"

import { Hero } from "@/components/hero"
import { ForWhom } from "@/components/for-whom"
import { WhyMiauzly } from "@/components/why-miauzly"
import { HowItWorks } from "@/components/how-it-works"
import { SneakPreview } from "@/components/sneak-preview"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ForWhom />
      <WhyMiauzly />
      <HowItWorks />
      <SneakPreview />
      <FAQ />
      <Footer />
    </div>
  )
}
