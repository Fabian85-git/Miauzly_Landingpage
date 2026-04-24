"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { LogoWhite } from "@/components/logo-white"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function UeberUnsPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-800">
        <div className="relative mx-auto max-w-7xl px-4 py-4 min-h-[90px] md:min-h-[150px]">
          <Link
            href="/"
            className="absolute top-6 left-6 md:top-9 md:left-9 h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
          >
            <LogoWhite />
          </Link>
          <div className="absolute top-6 right-6 md:top-9 md:right-9">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 mx-auto max-w-4xl px-4 py-12 font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.aboutUs.backLink}</span>
        </Link>

        <h1 className="text-4xl md:text-5xl mb-12 font-sans">{t.aboutUs.title}</h1>

        <div className="bg-[#FF8204] rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-8">
              <Image
                src="/images/rubi-ramiro.png"
                alt="Rubi & Ramiro"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-white text-xl leading-relaxed">
              {t.aboutUs.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
