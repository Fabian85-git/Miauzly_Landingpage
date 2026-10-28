"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function ForWhom() {
  const { t } = useLanguage()

  const images = [
    { src: "/images/katzenhalter-final.png", alt: "Katze, die in einer weichen Decke ruht" },
    { src: "/images/katzensitter-final.png", alt: "Katzensitterin mit einer Katze im Arm" },
  ]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.forWhom.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.forWhom.audiences.map((audience, index) => (
            <div key={index} className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.18)] transition-all">
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={990}
                height={660}
                className="h-[250px] w-full object-cover md:h-[330px]"
              />
              <div className="p-8">
                <div className="mb-6 flex flex-col items-start gap-4">
                  <h3 className="text-center text-2xl font-bold text-[#2D2D2D]">{audience.title}</h3>
                </div>

              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#FFC736]">
                      <svg className="w-4 h-4 text-[#2D2D2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#6B6B6B] flex-1 text-xl">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
