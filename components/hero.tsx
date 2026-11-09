"use client"

import Link from "next/link"
import { LogoWhite } from "@/components/logo-white"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-110 contrast-110">
          <source src="/videos/miauzly-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      <div className="absolute top-6 left-6 md:top-9 md:left-9 z-20 h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
        <LogoWhite />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-end px-6 md:px-9 pt-6 md:pt-9 gap-4 md:gap-6">
        <Link
          href="/ueber-uns"
          className="text-white/90 hover:text-white text-sm md:text-base font-medium transition-colors"
        >
          {t.aboutUs.navLabel}
        </Link>
        <Link
          href="https://my.miauzly.ch"
          className="text-white/90 hover:text-white text-sm md:text-base font-medium transition-colors"
        >
          {t.aboutUs.loginLabel}
        </Link>
        <LanguageToggle />
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pt-40 pb-16 md:pt-52 md:pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* <div className="inline-block rounded-full bg-[#4982A6] px-4 py-2 mb-6">
              <span className="text-sm text-white">{t.hero.badge}</span>
            </div> */}

            <h1 lang="de" className="mb-6 max-w-full break-words text-left text-[42px] font-normal leading-[1.05] tracking-normal text-white hyphens-auto sm:text-5xl md:text-6xl lg:text-[57px]">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-xl text-gray-200 mb-8 max-w-2xl">{t.hero.description}</p>

            <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row">
              <Link
                href="https://my.miauzly.ch"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#0062F0] px-10 py-4 text-lg font-medium text-white transition-all hover:bg-brand-yellow-hover md:w-auto"
              >
                {t.hero.cta}
              </Link>
              <Link
                href="https://my.miauzly.ch"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-white px-10 py-4 text-lg font-medium text-white transition-all hover:bg-white/10 md:w-auto"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
