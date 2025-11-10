"use client"

import { UserCircle, Search, Handshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const icons = [
    <UserCircle key="user" className="size-11" />,
    <Search key="search" className="size-11" />,
    <Handshake key="handshake" className="size-11" />,
  ]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.howItWorks.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] flex items-center justify-center text-[#4982A6]">
                  {icons[index]}
                </div>

                

                <p className="text-[#2D2D2D] text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
