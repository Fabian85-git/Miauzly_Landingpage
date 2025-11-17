"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export function SneakPreview() {
  const { t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const mockups = [
    {
      src: "/images/app-list-catowner.png",
      alt: "Miauzly App - Katzenhalter Liste",
      label: t.sneakPreview.mockups[0],
    },
    {
      src: "/images/app-profile-sitter.png",
      alt: "Miauzly App - Sitter Profil",
      label: t.sneakPreview.mockups[1],
    },
    {
      src: "/images/app-forum.png",
      alt: "Miauzly App - Forum",
      label: t.sneakPreview.mockups[2],
    },
  ]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.sneakPreview.title}</h2>
        </div>

        <div className="md:hidden mb-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {mockups.map((mockup, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#2D2D2D] rounded-[2rem] p-2 w-full max-w-[280px] mx-auto">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        <Image
                          src={mockup.src || "/placeholder.svg"}
                          alt={mockup.alt}
                          width={280}
                          height={560}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-[#6B6B6B]">{mockup.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {mockups.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-brand-blue" : "bg-gray-300"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {mockups.map((mockup, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#2D2D2D] rounded-[2rem] p-2 w-full max-w-[280px]">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  <Image
                    src={mockup.src || "/placeholder.svg"}
                    alt={mockup.alt}
                    width={280}
                    height={560}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-[#6B6B6B]">{mockup.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-[#6B6B6B]">
            {t.sneakPreview.description}
            <br />
            {t.sneakPreview.cta}
          </p>
        </div>
      </div>
    </section>
  )
}
