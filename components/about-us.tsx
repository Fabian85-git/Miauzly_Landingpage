"use client"

import { useLanguage } from "@/contexts/language-context"

export function AboutUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">{t.aboutUs.title}</h2>
        </div>

        <div className="bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mb-6 shadow-md">
              🐱
            </div>

            <div className="space-y-4 text-[#2D2D2D] text-lg leading-relaxed">
              {t.aboutUs.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
