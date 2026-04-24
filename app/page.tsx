"use client"

import { Hero } from "@/components/hero"
import { ForWhom } from "@/components/for-whom"
import { WhyMiauzly } from "@/components/why-miauzly"
import { HowItWorks } from "@/components/how-it-works"
import { SneakPreview } from "@/components/sneak-preview"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyMiauzly />
      <ForWhom />
      <HowItWorks />
      <SneakPreview />
      <Newsletter />
      <Footer />
    </div>
  )
}
