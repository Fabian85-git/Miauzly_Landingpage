"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#F9F9F9] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.howItWorks.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.howItWorks.audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
            >
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">{audience.title}</h3>

              <ul className="space-y-4">
                {audience.steps.map((step, stepIndex) => {
                  if (!step.label && !step.description) return null
                  return (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FFC736] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3.5 h-3.5 text-[#2D2D2D]" />
                      </div>
                      <div className="flex-1">
                        {step.label && (
                          <span className="font-normal text-[#2D2D2D] text-base">
                            {step.label}
                            {step.description ? ": " : ""}
                          </span>
                        )}
                        {step.description && (
                          <span className="text-[#6B6B6B] text-base">{step.description}</span>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              {audience.note && (
                <p className="mt-6 text-sm text-[#6B6B6B] italic border-t border-gray-100 pt-4">
                  {audience.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
